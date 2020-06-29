import React, { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useIntl } from 'react-intl';
import { AppState } from 'app/types';
import { toggleTheme as toggleThemeActionCreator } from 'themes/actions';
import { Toggle } from 'shared';
import './ThemeToggle.scss';

const ThemeToggle: FC = () => {
  const intl = useIntl();
  const dispatch = useDispatch();

  const currentTheme = useSelector<AppState>(({ theme }) => theme.theme);
  const toggleTheme = () => dispatch(toggleThemeActionCreator());

  return (
    <label>
      {intl.formatMessage({ id: 'app/change-theme', defaultMessage: 'Theme' })}
      {':'}
      <div className="theme-toggle__toggle-container">
        <Toggle checked={currentTheme === 'dark'} onChange={toggleTheme} />
      </div>
    </label>
  );
};

export default ThemeToggle;
