import React, { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from 'app/types';
import { toggleTheme as toggleThemeActionCreator } from 'themes/actions';
import { Toggle } from 'shared';

export interface ThemeToggleProps {
  id?: string;
}

const ThemeToggle: FC<ThemeToggleProps> = ({ id }) => {
  const dispatch = useDispatch();

  const currentTheme = useSelector<AppState>(({ theme }) => theme.theme);
  const toggleTheme = () => dispatch(toggleThemeActionCreator());

  return (
    <Toggle
      containerClassName="site-menu__theme-toggle"
      id={id}
      checked={currentTheme === 'dark'}
      onChange={toggleTheme}
    />
  );
};

export default ThemeToggle;
