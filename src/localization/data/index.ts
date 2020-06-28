import englishTranslation from './en.json';
import russianTranslation from './ru.json';

interface Translations {
  [prop: string]: {
    name: string;
    translation: {
      [prop: string]: string;
    };
  };
}

const translations: Translations = {
  en: {
    name: 'english',
    translation: englishTranslation,
  },
  ru: {
    name: 'русский',
    translation: russianTranslation,
  },
};

export default translations;
