import React,  { useState, useEffect } from 'react';
import { Route, Switch, useRouteMatch, useHistory, useLocation, Redirect } from 'react-router-dom';

import * as mainApi from '../../utils/MainApi';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import Footer from '../Footer/Footer';

import './App.css';


function App() {

  const history = useHistory();
  const jwt = localStorage.getItem('jwt');
  const location = useLocation();

  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);

  const hideHeaderPaths = ['/not-found', '/signup', '/signin'];
  const hideFooterPaths = ['/not-found','/profile', '/signup', '/signin'];

  const [profileMessage, setProfileMessage] = useState('');
  const [registerMessage, setRegisterMessage] = useState('');
  const [loginMessage, setLoginMessage] = useState('');

  useEffect(() => {
    if (localStorage.getItem('jwt')) {
      mainApi
        .getUserInfo(localStorage.getItem('jwt'))
        .then(() => {
          setLoggedIn(true);
          history.push(location.pathname);
        })
        .catch((err) => console.log(err));
    }
  }, []);

  useEffect(() => {
    if (loggedIn) {
      console.log('log from use effect');
      console.log(localStorage.getItem('jwt'));
      mainApi
        .getUserInfo(localStorage.getItem('jwt'))
        .then((user) => setCurrentUser(user))
        .catch((err) => {
          console.log(`Ошибка получения данных пользователя: ${err}`);
        });

      }
    }, [loggedIn])


  const onRegister = ({ name, password, email }) => {
    mainApi
    .signup ({ name, password, email })
    .then((res) => {
      if (res) {
        onLogin({ email, password });
        setRegisterMessage('Регистрация прошла успешно');

      }
    })
    .catch ((err) => {
      setRegisterMessage('Что-то пошло не так...');
    })
  }

  const onLogin = ({ email, password }) => {
    mainApi
    .signin ({ email, password })
    .then ((data) => {
      localStorage.setItem('jwt', data.token);
      setLoggedIn(true);
      console.log("log from onLogin");
      console.log(data.token)
      console.log(localStorage.getItem('jwt'));
      mainApi.getUserInfo(localStorage.getItem('jwt'))
        .then((response) => {
          setCurrentUser(response);
        });
      setLoginMessage('Авторизация прошла успешно');
      history.push('/movies');
    })
  }

  const handleUpdateUser = (user) => {
    mainApi
      .setUserInfo (user, localStorage.getItem('jwt'))
      .then ((userInfo) => {
        setProfileMessage('Данные успешно обновлены');
        setCurrentUser(userInfo);
      })
      .catch ((err) => {
        setProfileMessage('Ошибка редактирования данных профиля');
      })
  }

  const signOut = () => {
    localStorage.removeItem('jwt');
    setLoggedIn(false);
    setCurrentUser({});
    setProfileMessage('');
    setRegisterMessage('');
    setLoginMessage('');
  }

  return (

    <CurrentUserContext.Provider value={currentUser}>
      <div className='app'>

        {useRouteMatch(hideHeaderPaths) ? null : <Header loggedIn={loggedIn} />}

        <Switch>
          <Route path='/' exact>
            <Main loggedIn={loggedIn} />
          </Route>

          <Route path='/signup'>
            <Register
              onAuth={onRegister}
              infoMessage={registerMessage}
            />
          </Route>

          <Route path='/signin'>
            <Login
              onAuth={onLogin}
              infoMessage={loginMessage}/>
          </Route>

          <ProtectedRoute
            path='/movies'
            exact
            component={Movies}
            loggedIn={loggedIn}
            >
          </ProtectedRoute>

          <ProtectedRoute path='/saved-movies'>
            <SavedMovies loggedIn={loggedIn} />
          </ProtectedRoute>

          <ProtectedRoute
            path='/profile'
            exact
            component={Profile}
            loggedIn={loggedIn}
            onUpdateUser={handleUpdateUser}
            signOut={signOut}
            infoMessage={profileMessage}
            >
          </ProtectedRoute>




          <Route path='/not-found'>
            <NotFound />
          </Route>
          <Redirect to='/not-found'/>
        </Switch>

        {useRouteMatch(hideFooterPaths) ? null : <Footer />}

      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
