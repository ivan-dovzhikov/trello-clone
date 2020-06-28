import themesData from './themesData.json';
import { Reducer } from 'redux';
import { ThemeActionTypes, ThemeActions, ThemeState } from './types';

const { TOGGLE_THEME } = ThemeActionTypes;

const initialState: ThemeState = {
  theme: 'light',
  data: themesData.light,
};

const themeReducer: Reducer<ThemeState, ThemeActions> = (
  state = initialState,
  { type }
) => {
  switch (type) {
    case TOGGLE_THEME: {
      const newTheme = state.theme === 'light' ? 'dark' : 'light';
      return {
        ...state,
        theme: newTheme,
        data: themesData[newTheme],
      };
    }

    default: {
      return state;
    }
  }
};

export default themeReducer;
