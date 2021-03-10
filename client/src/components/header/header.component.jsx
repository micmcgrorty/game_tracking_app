import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/console-controller.svg';

import './header.styles.scss';

const Header = () => (
  <div className="header-container">
    <Link to="/">
      <Logo className="logo" />
    </Link>
    <div className="options-container">
      <Link className="option-link" to="/search">
        Search
      </Link>
      <Link className="option-link" to="/sign-in">
        Sign In
      </Link>
    </div>
  </div>
);

export default Header;
