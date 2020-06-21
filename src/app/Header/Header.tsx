import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { useIntl } from 'react-intl';
import './styles.scss';

const Header: FC = () => {
  const intl = useIntl();

  return (
    <header className="site-header">
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
    </header>
  );
};

export default Header;
