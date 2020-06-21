import translations from './data';

export type AvailableLanguages = keyof typeof translations;

export enum LocaleActionTypes {
  SET_LANGUAGE = 'SET_LANGUAGE',
}
const { SET_LANGUAGE } = LocaleActionTypes;

export interface SetLanguageAction {
  type: typeof SET_LANGUAGE;
  payload: {
    languageCode: AvailableLanguages;
    languageName: string;
  };
}

export type LocaleActions = SetLanguageAction;

export interface LocaleState {
  languageCode: AvailableLanguages;
  languageName: string;
}
