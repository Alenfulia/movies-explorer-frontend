import React from 'react';
import { Route, Switch, useRouteMatch, Redirect } from 'react-router-dom';

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
  const hideHeaderPaths = ['/not-found', '/signup', '/signin'];
  const hideFooterPaths = ['/not-found','/profile', '/signup', '/signin'];

  return (
    <div className='app'>

      {useRouteMatch(hideHeaderPaths) ? null : <Header />}

      <Switch>
        <Route path='/movies'>
          <Movies />
        </Route>
        <Route path='/saved-movies'>
          <SavedMovies />
        </Route>
        <Route path='/profile'>
          <Profile />
        </Route>
        <Route path='/signup'>
          <Register />
        </Route>
        <Route path='/signin'>
          <Login />
        </Route>
        <Route path='/' exact>
          <Main />
        </Route>
        <Route path='/not-found'>
          <NotFound />
        </Route>
        <Redirect to='/not-found'/>
      </Switch>

      {useRouteMatch(hideFooterPaths) ? null : <Footer />}

    </div>
  );
}

export default App;
