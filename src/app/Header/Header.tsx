import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { useIntl } from 'react-intl';
import './Header.scss';
import Menu from './Menu/Menu';

const Header: FC = () => {
  const intl = useIntl();

  return (
    <header className="site-header">
      <div className="site-header__placeholder" />
      <nav className="site-header__navigation">
        <ul className="site-header__navigation-list">
          <li>
            <NavLink
              className="site-header__navigation-link"
              to="/"
              exact={true}
            >
              {intl.formatMessage({ id: 'app/home', defaultMessage: 'Home' })}
            </NavLink>
          </li>
          <li>
            <NavLink className="site-header__navigation-link" to="/boards">
              {intl.formatMessage({
                id: 'app/boards',
                defaultMessage: 'Boards',
              })}
            </NavLink>
          </li>
        </ul>
      </nav>
      <Menu />
    </header>
  );
};

export default Header;
