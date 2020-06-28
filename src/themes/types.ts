import themesData from './themesData.json';

export enum ThemeActionTypes {
  TOGGLE_THEME = 'TOGGLE_THEME',
}

const { TOGGLE_THEME } = ThemeActionTypes;

export interface ToggleThemeAction {
  type: typeof TOGGLE_THEME;
}

export type ThemeActions = ToggleThemeAction;

export interface ThemeState {
  theme: keyof typeof themesData;
  data: {
    bgAuthor: string;
    bgAuthorLink: string;
    bgSource: string;
    bgSourceLink: string;
  };
}
