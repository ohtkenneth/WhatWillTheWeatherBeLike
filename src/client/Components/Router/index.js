import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AppComponent from '../App';
import AboutComponent from '../About/index';

const AppRouter = () => {
  return (
    <Router>
      <nav>
        <a href="https://github.com/ohtkenneth/WhatWillTheWeatherBeLike" target="_blank">
          <img className="app__github" src="https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png" alt="Fork me on GitHub"/>
        </a>
        <ul className="nav">
          <li>
            <Link style={{ textDecoration: 'none' }} to="/">Search</Link>
          </li>
          <li>
            <Link style={{ textDecoration: 'none' }} to="/about">About</Link>
          </li>
        </ul>
        <Route exact path="/" component={ AppComponent } />
        <Route path="/about" component={ AboutComponent } />
      </nav>
    </Router>
  );
};

export default AppRouter;