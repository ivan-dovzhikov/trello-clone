import React, { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from 'utils';
import { toggleTheme as toggleThemeActionCreator } from 'app/ThemeToggle/actions';
import { Toggle } from 'shared';

const ThemeToggle: FC = () => {
  const dispatch = useDispatch();

  const currentTheme = useSelector<AppState>(({ theme }) => theme.theme);
  const toggleTheme = () => dispatch(toggleThemeActionCreator());

  return (
    <label>
      Change theme
      <div className="theme-toggle__toggle-container">
        <Toggle checked={currentTheme === 'dark'} onChange={toggleTheme} />
      </div>
    </label>
  );
};

export default ThemeToggle;
