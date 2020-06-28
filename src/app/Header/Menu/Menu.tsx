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
    <div className={`site-menu${expand ? '--expand' : ''}`} ref={menuRef}>
      <button onClick={toggleExpand} className="site-menu__toggle">
        {expand
          ? intl.formatMessage({
              id: 'app/close-menu',
              defaultMessage: 'Close',
            })
          : intl.formatMessage({ id: 'app/open-menu', defaultMessage: 'Menu' })}
      </button>
      <div className="site-menu__dropdown">
        <div className="site-menu__dropdown-inner">
          <fieldset className="site-menu__options-fieldset">
            <legend className="site-menu__options-legend">
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
