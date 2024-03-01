import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './app/resources/locales/en/translation.json';
import translationES from './app/resources/locales/es/translation.json';

const getStoredLanguage = () => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('language') || 'es';
  } else {
    return 'es';
  }
};

const storedLanguage = getStoredLanguage();

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: translationEN,
      },
      es: {
        translation: translationES,
      },
    },
    lng: storedLanguage,
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;