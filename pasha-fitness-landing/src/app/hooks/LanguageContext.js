// context/LanguageContext.js

import React, { createContext, useContext, useState } from "react";
import rus from "@/app/assets/data/translations/rus";
import ils from "@/app/assets/data/translations/ils";

const translations = { ils, rus };

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("ils");

  const t = (key) => {
    const keys = key.split(".");
    let result = translations[language];

    for (const k of keys) {
      result = result[k];
      if (result === undefined) {
        return key; // If key is not found, return the key itself
      }
    }

    return result;
  };

  const changeLanguage = (newLanguage) => {
    if (translations[newLanguage]) {
      setLanguage(newLanguage);
    }
  };

  return (
    <LanguageContext.Provider value={{ t, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = () => useContext(LanguageContext);
