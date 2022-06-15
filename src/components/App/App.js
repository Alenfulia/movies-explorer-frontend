import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Footer from '../Footer/Footer';

import './App.css';

function App() {
  return (
    <>
    <Header />
    <Switch>
      <Route path='/movies'>
        <Movies />
      </Route>
      <Route path='/' exact>
        <Main />
      </Route>
    </Switch>
    <Footer />
    </>
  );
}

export default App;
