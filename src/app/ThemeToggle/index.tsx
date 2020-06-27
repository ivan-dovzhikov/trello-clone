import React, { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from 'utils';
import { toggleTheme as toggleThemeActionCreator } from './actions';

const ThemeToggle: FC = () => {
  const dispatch = useDispatch();

  const currentTheme = useSelector<AppState>(({ theme }) => theme.theme);
  const toggleTheme = () => dispatch(toggleThemeActionCreator());

  return (
    <input
      type="checkbox"
      checked={currentTheme === 'dark'}
      onChange={toggleTheme}
    />
  );
};

export default ThemeToggle;
