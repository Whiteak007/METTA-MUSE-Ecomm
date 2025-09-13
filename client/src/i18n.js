// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    English: {
      translation: {
        SHOP: "Shop",
        SKILLS: "Skills",
        STORIES: "Stories",
        ABOUT: "About",
        CONTACT: "Contact Us",
        SIGN_OUT: "Sign Out"
      }
    },
    Hindi: {
      translation: {
        SHOP: "दुकान",
        SKILLS: "कौशल",
        STORIES: "कहानियाँ",
        ABOUT: "हमारे बारे में",
        CONTACT: "संपर्क करें",
        SIGN_OUT: "साइन आउट"
      }
    },
    Marathi: {
      translation: {
        SHOP: "दुकान",
        SKILLS: "कौशल्ये",
        STORIES: "कथा",
        ABOUT: "आमच्याबद्दल",
        CONTACT: "संपर्क करा",
        SIGN_OUT: "साइन आऊट"
      }
    }
  },
  lng: "English", // default language
  fallbackLng: "English",
  interpolation: { escapeValue: false }
});

export default i18n;
