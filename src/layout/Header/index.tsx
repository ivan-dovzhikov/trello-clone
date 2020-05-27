import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import './styles.scss';

const Header: FC = () => {
  return (
    <header className="site-header">
      <nav className="site-navigation">
        <ul>
          <li>
            <NavLink to="/" exact={true}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/boards">Boards</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
