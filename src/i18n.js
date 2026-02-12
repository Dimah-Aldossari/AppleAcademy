import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import TranslationAr from './locales/ar.json';
import TranslationEn from './locales/en.json';

const resources = {
  ar: { translation: TranslationAr },
  en: { translation: TranslationEn },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'ar',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;