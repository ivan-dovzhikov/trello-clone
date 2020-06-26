import React, { FC, useRef } from 'react';
import { useIntl } from 'react-intl';
import { useToggle, useCallbackOnExternalAction } from 'utils';
import SelectLanguage from './SelectLanguage';

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
          <SelectLanguage />
        </div>
      </div>
    </div>
  );
};

export default Menu;
