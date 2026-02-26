import { useApp } from "./AppProvider";
import type { Locale } from "./geo";

export const translations: Record<Locale, Record<string, string>> = {
  en: {
    openGame: "Open Game",
    downloadTitle: "Download Casino",
    downloadSubtitle: "Play anytime, anywhere",
    installApp: "Install App",
    only18: "Only for 18+ players",
    socialMedia: "Us in social media:",
  },
  ru: {
    openGame: "Открыть игру",
    downloadTitle: "Скачать приложение",
    downloadSubtitle: "Играйте в любое время",
    installApp: "Установить",
    only18: "Только для игроков 18+",
    socialMedia: "Мы в соцсетях:",
  },
  hy: {
    openGame: "Բացել խաղը",
    downloadTitle: "Ներբեռնել հավելվածը",
    downloadSubtitle: "Խաղացեք ցանկացած ժամանակ",
    installApp: "Տեղադրել",
    only18: "Միայն 18+ խաղացողների համար",
    socialMedia: "Մենք սոցիալական ցանցերում:",
  },
};

export function useT() {
  const { state } = useApp();
  const dict = translations[state.locale];

  return (key: keyof typeof dict) => dict[key] ?? String(key);
}
