import { Reducer } from 'redux';
import {
  LocaleActionTypes,
  LocaleState,
  LocaleActions,
  SetLanguageAction,
} from './types';
import translations from './data';

const { SET_LANGUAGE } = LocaleActionTypes;

const preferredLanguage = navigator.language?.slice(0, 2);
let language: string = 'en';
if (preferredLanguage in translations) language = preferredLanguage;

const initialState: LocaleState = {
  languageCode: language,
  languageName: translations[language].name,
};

const localeReducer: Reducer<LocaleState, LocaleActions> = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case SET_LANGUAGE: {
      return {
        ...state,
        ...(payload as SetLanguageAction['payload']),
      };
    }

    default: {
      return state;
    }
  }
};

export default localeReducer;
