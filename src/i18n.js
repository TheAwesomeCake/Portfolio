// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from './locales/en/translation.json';
import translationPT from './locales/pt/translation.json';

const resources = {
  en: {
    translation: translationEN
  },
  pt: {
    translation: translationPT
  }
};

i18n
  .use(LanguageDetector) // Detecta o idioma do usuário
  .use(initReactI18next) // Passa a instância do i18n para o react-i18next
  .init({
    resources,
    fallbackLng: 'pt', // Idioma padrão caso o detectado não esteja disponível
    interpolation: {
      escapeValue: false // React já protege contra XSS
    }
  });

// Apenas em ambiente de desenvolvimento, expomos a instância i18n para o window
if (import.meta.env.DEV) {
  window.i18n = i18n;
}

export default i18n;
