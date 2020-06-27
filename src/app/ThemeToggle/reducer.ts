import { Reducer } from 'redux';
import { ThemeActionTypes, ThemeActions, ThemeState } from './types';

const { TOGGLE_THEME } = ThemeActionTypes;

const initialState: ThemeState = {
  theme: 'light',
};

const themeReducer: Reducer<ThemeState, ThemeActions> = (
  state = initialState,
  { type }
) => {
  switch (type) {
    case TOGGLE_THEME: {
      if (state.theme === 'light') return { ...state, theme: 'dark' };
      return { ...state, theme: 'light' };
    }

    default: {
      return state;
    }
  }
};

export default themeReducer;
