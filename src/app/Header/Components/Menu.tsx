import React, { FC } from 'react';
import { useIntl } from 'react-intl';
import { useToggle } from 'utils';

const Menu: FC = () => {
  const intl = useIntl();
  const [expand, toggleExpand] = useToggle(false);

  return (
    <div className={`site-menu${expand ? ' expand' : ''}`}>
      <button onClick={toggleExpand} className="toggler">
        {expand
          ? intl.formatMessage({
              id: 'app/close-menu',
              defaultMessage: 'Close',
            })
          : intl.formatMessage({ id: 'app/open-menu', defaultMessage: 'Menu' })}
      </button>
      <div className="dropdown">
        <div className="dropdown-inner"></div>
      </div>
    </div>
  );
};

export default Menu;
