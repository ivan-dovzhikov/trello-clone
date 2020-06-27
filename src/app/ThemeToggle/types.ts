export enum ThemeActionTypes {
  TOGGLE_THEME = 'TOGGLE_THEME',
}

const { TOGGLE_THEME } = ThemeActionTypes;

export interface ToggleThemeAction {
  type: typeof TOGGLE_THEME;
}

export type ThemeActions = ToggleThemeAction;

export interface ThemeState {
  theme: string;
}
