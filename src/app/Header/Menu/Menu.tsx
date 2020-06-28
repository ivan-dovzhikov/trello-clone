import React, { FC, useRef } from 'react';
import { useIntl } from 'react-intl';
import { useToggle, useCallbackOnExternalAction } from 'utils';
import './Menu.scss';
import SelectLanguage from './SelectLanguage';
import ThemeToggle from './ThemeToggle';

const Menu: FC = () => {
  const intl = useIntl();
  const menuRef = useRef<HTMLDivElement>(null);
  const [expand, toggleExpand] = useToggle(false);

  useCallbackOnExternalAction(menuRef.current, toggleExpand, expand);

  return (
    <div
      className={`site-header__menu${expand ? '--expand' : ''}`}
      ref={menuRef}
    >
      <button onClick={toggleExpand} className="site-header__menu-toggle">
        {expand
          ? intl.formatMessage({
              id: 'app/close-menu',
              defaultMessage: 'Close',
            })
          : intl.formatMessage({ id: 'app/open-menu', defaultMessage: 'Menu' })}
      </button>
      <div className="site-header__menu-dropdown">
        <div className="site-header__menu-dropdown-inner">
          <fieldset className="site-header__menu-options-fieldset">
            <legend className="site-header__menu-options-legend">
              {intl.formatMessage({
                id: 'app/options',
                defaultMessage: 'Options',
              })}
            </legend>
            <div className="field">
              <SelectLanguage />
            </div>
            <div className="field">
              <ThemeToggle />
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Menu;
