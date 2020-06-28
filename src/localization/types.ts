import translations from './data';

export type AvailableLanguages = keyof typeof translations;

export type EnTranslationId = keyof typeof translations['en']['translation'];

export enum LocaleActionTypes {
  SET_LANGUAGE = 'SET_LANGUAGE',
}
const { SET_LANGUAGE } = LocaleActionTypes;

export interface SetLanguageAction {
  type: typeof SET_LANGUAGE;
  payload: {
    languageCode: string;
    languageName: string;
  };
}

export type LocaleActions = SetLanguageAction;

export interface LocaleState {
  languageCode: string;
  languageName: string;
}
