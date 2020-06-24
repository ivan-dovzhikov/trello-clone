import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { useIntl } from 'react-intl';
import './styles.scss';
import Menu from './Components/Menu';

const Header: FC = () => {
  const intl = useIntl();

  return (
    <header className="site-header">
      <div className="placeholder" />
      <nav className="site-navigation">
        <ul>
          <li>
            <NavLink to="/" exact={true}>
              {intl.formatMessage({ id: 'app/home', defaultMessage: 'Home' })}
            </NavLink>
          </li>
          <li>
            <NavLink to="/boards">
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
