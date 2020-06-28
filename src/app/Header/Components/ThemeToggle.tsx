import React, { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from 'utils';
import { toggleTheme as toggleThemeActionCreator } from 'app/ThemeToggle/actions';
import { Toggle } from 'shared';
import { useIntl } from 'react-intl';

const ThemeToggle: FC = () => {
  const intl = useIntl();
  const dispatch = useDispatch();

  const currentTheme = useSelector<AppState>(({ theme }) => theme.theme);
  const toggleTheme = () => dispatch(toggleThemeActionCreator());

  return (
    <label>
      {intl.formatMessage({
        id: 'app/change-theme',
        defaultMessage: 'Change theme',
      })}
      <div className="theme-toggle__toggle-container">
        <Toggle checked={currentTheme === 'dark'} onChange={toggleTheme} />
      </div>
    </label>
  );
};

export default ThemeToggle;
