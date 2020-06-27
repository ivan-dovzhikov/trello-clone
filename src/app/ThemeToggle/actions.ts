import { ThemeActionTypes, ToggleThemeAction } from './types';
const { TOGGLE_THEME } = ThemeActionTypes;

export type ToggleThemeActionCreator = () => ToggleThemeAction;

export const toggleTheme: ToggleThemeActionCreator = () => ({
  type: TOGGLE_THEME,
});
