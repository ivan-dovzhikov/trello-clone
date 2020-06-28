import { ThemeActionTypes, ToggleThemeAction } from './types';
import { toggleTheme } from './actions';
const { TOGGLE_THEME } = ThemeActionTypes;

describe('Test theme action creators', () => {
  it(`should create ${TOGGLE_THEME} action with language name`, () => {
    const expected: ToggleThemeAction = {
      type: TOGGLE_THEME,
    };

    const actual = toggleTheme();
    expect(actual).toEqual(expected);
  });
});
