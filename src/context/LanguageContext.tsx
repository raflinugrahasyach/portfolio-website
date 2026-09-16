// ============================================================
// src/context/LanguageContext.tsx - Global i18n context
// EN / ID bilingual toggle
// ============================================================

import { createContext, useContext, useState, ReactNode } from "react";

export type Language = "en" | "id";

export type Bilingual<T = string> = { en: T; id: T };

export function t(field: Bilingual, lang: Language): string {
  return field[lang];
}

export function tArr(field: Bilingual<string[]>, lang: Language): string[] {
  return field[lang];
}

interface LanguageContextType {
  lang: Language;
  setLang: (l: Language) => void;
  t: (field: Bilingual) => string;
  tArr: (field: Bilingual<string[]>) => string[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("en");

  const translate = (field: Bilingual) => field[lang];
  const translateArr = (field: Bilingual<string[]>) => field[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translate, tArr: translateArr }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
