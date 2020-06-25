import translations from './data';
import { LocaleActionTypes, SetLanguageAction } from './types';
const { SET_LANGUAGE } = LocaleActionTypes;

export type SetLanguageActionCreator = (code: string) => SetLanguageAction;

export const setLanguage: SetLanguageActionCreator = code => ({
  type: SET_LANGUAGE,
  payload: { languageCode: code, languageName: translations[code].name },
});
