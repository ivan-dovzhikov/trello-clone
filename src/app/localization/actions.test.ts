import { LocaleActionTypes, SetLanguageAction } from './types';
import { setLanguage } from './actions';
import translations from './data';
const { SET_LANGUAGE } = LocaleActionTypes;

describe('Test localization action creators', () => {
  it(`should create ${SET_LANGUAGE} action with language name`, () => {
    const languageCode = 'ru';

    const expected: SetLanguageAction = {
      type: SET_LANGUAGE,
      payload: {
        languageCode,
        languageName: translations[languageCode].name,
      },
    };

    const actual = setLanguage(languageCode);
    expect(actual).toEqual(expected);
  });
});
