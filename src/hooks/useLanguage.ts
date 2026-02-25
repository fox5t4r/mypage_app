"use client";

import { useState, useEffect, useCallback } from "react";
import ko from "@/locales/ko.json";
import en from "@/locales/en.json";

export type Lang = "ko" | "en";

const STORAGE_KEY = "portfolio-lang";

const translations: Record<Lang, typeof ko> = { ko, en: en as typeof ko };

export function useLanguage() {
  const [lang, setLang] = useState<Lang>("ko");

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as Lang | null;
    if (saved === "ko" || saved === "en") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLang(saved);
    }
  }, []);

  const toggleLang = useCallback(() => {
    setLang((prev) => {
      const next: Lang = prev === "ko" ? "en" : "ko";
      localStorage.setItem(STORAGE_KEY, next);
      return next;
    });
  }, []);

  const t = translations[lang];

  return { lang, toggleLang, t };
}
