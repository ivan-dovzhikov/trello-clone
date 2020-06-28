import themesData from './themesData.json';
import { ThemeActionTypes, ThemeState, ToggleThemeAction } from './types';
import themeReducer from './reducer';
const { TOGGLE_THEME } = ThemeActionTypes;

describe('Test theme reducer', () => {
  const testingState: ThemeState = {
    theme: 'light',
  };

  const action: ToggleThemeAction = {
    type: TOGGLE_THEME,
  };

  it('should toggle theme to "dark"', () => {
    const expected = { theme: 'dark', data: themesData.dark };
    const actual = themeReducer(testingState, action);
    expect(actual).toEqual(expected);
  });

  it('should toggle theme to "dark" and to "light" again', () => {
    const expected = { theme: 'light', data: themesData.light };
    const actual = themeReducer(themeReducer(testingState, action), action);
    expect(actual).toEqual(expected);
  });
});
