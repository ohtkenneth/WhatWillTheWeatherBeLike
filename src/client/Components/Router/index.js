import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AppComponent from '../App';
import AboutComponent from '../About/index';

const AppRouter = () => {
  return (
    <Router>
      <nav>
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