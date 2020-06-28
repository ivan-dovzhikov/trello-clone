import { LocaleActionTypes, LocaleState, SetLanguageAction } from './types';
import localeReducer from './reducer';
import translations from './data';
import { cloneDeep } from 'utils';
const { SET_LANGUAGE } = LocaleActionTypes;

describe('Test localization reducer', () => {
  const testingState: LocaleState = {
    languageCode: 'en',
    languageName: translations.en.name,
  };

  describe('set language action', () => {
    const newLang = 'ru';
    const newLangName = translations[newLang].name;

    const action: SetLanguageAction = {
      type: SET_LANGUAGE,
      payload: {
        languageCode: newLang,
        languageName: newLangName,
      },
    };

    const expected = cloneDeep(testingState);
    expected.languageCode = newLang;
    expected.languageName = newLangName;

    const actual = localeReducer(testingState, action);

    it('should change language', () => {
      expect(actual).toEqual(expected);
    });

    it('should not mutate state', () => {
      expect(actual).not.toBe(testingState);
    });
  });
});
