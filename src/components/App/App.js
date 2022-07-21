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
  const location = useLocation();


  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [allMovies, setAllMovies] = useState(
    JSON.parse(localStorage.getItem('loadedMovies')) || []
  );
  const [filteredMovies, setFilteredMovies] = useState(
    JSON.parse(localStorage.getItem('filteredMovies')) || []
  );
  const [searchKeyword, setSearchKeyword] = useState(
    localStorage.getItem('searchKeyword') || ''
  );

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
      mainApi
        .getUserInfo(localStorage.getItem('jwt'))
        .then((user) => setCurrentUser(user))
        .catch((err) => {
          console.log(`Ошибка получения данных пользователя: ${err}`);
        });
        mainApi
          .getMovies(localStorage.getItem('jwt'))
          .then((res) => {
            setSavedMovies(res);
            localStorage.setItem('savedMovies', JSON.stringify(res));
          })
          .catch((err) => {
            console.log(err);
          });
          if (localStorage.filteredMovies) {
            setMovies(filteredMovies);
          }
      }
    }, [loggedIn, filteredMovies])




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



  const searchMovies = (movie, name) => {
    return movie.filter((movie) =>
    movie.nameRU.toLowerCase().includes(name.toLowerCase())
    );
  }

  const handleSearchMovies = (name) => {
    setIsLoading(true);
    const newMovies = searchMovies(allMovies, name);
    setMovies(newMovies);
    localStorage.setItem('filteredMovies', JSON.stringify(newMovies));
    setFilteredMovies(newMovies);
    localStorage.setItem('searchKeyword', name);
    setSearchKeyword(name);
    setTimeout(() => setIsLoading(false), 1000);
  };

  const handleSaveMovie = (movie) => {
    mainApi
      .saveMovie(movie, localStorage.getItem('jwt'))
      .then((data) => {
        setSavedMovies([data, ...savedMovies]);
        localStorage.setItem(
          'savedMovies',
          JSON.stringify([data, ...savedMovies])
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDeleteMovie = (movie) => {
    const savedMovie = savedMovies.find(
      (item) => item.movieId === movie.movieId
    );
    mainApi
      .deleteMovie(savedMovie._id, localStorage.getItem('jwt'))
      .then(() => {
        const newMoviesList = savedMovies.filter(
          (item) => item._id !== savedMovie._id
        );
        setSavedMovies(newMoviesList);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const signOut = () => {
    localStorage.removeItem('jwt');
    localStorage.removeItem('checkBox');
    localStorage.removeItem('searchKeyword');
    localStorage.removeItem('filteredMovies');
    localStorage.removeItem('savedMovies');
    localStorage.removeItem('loadedMovies');
    setLoggedIn(false);
    setCurrentUser({});
    setProfileMessage('');
    setRegisterMessage('');
    setLoginMessage('');
    setIsLoading(false);
    setAllMovies([]);
    setMovies([]);
    setSavedMovies([]);
    setCurrentUser({});
    setSearchKeyword('');
    setFilteredMovies([]);
    history.push('/');
  }

  return (

    <CurrentUserContext.Provider value={currentUser}>
      <div className='app'>

        {useRouteMatch(hideHeaderPaths) ? null : (
          <Header loggedIn={loggedIn} />
        )}

        <Switch>
          <Route path='/' exact>
            <Main />
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
            isLoading={isLoading}
            movies={movies}
            onSubmit={handleSearchMovies}
            onLike={handleSaveMovie}
            onDislike={handleDeleteMovie}
            searchKeyword={searchKeyword}
            savedMovies={savedMovies}
            setAllMovies={setAllMovies}
          />

          <ProtectedRoute
            path='/saved-movies'
            exact
            component={SavedMovies}
            loggedIn={loggedIn}
            isLoading={isLoading}
            onDislike={handleDeleteMovie}
            savedMovies={savedMovies}
            searchKeyword={searchKeyword}
          />

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
