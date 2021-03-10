import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import SearchPage from './pages/search/search.component';
import ErrorPage from './pages/404/404.component';

import './App.css';

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/search" exact component={SearchPage} />
        <Route component={ErrorPage} />
      </Switch>
    </div>
  );
};

export default App;
