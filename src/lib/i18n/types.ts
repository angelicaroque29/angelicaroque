export type Locale = "es" | "en";

export const locales: Locale[] = ["en", "es"];

export const defaultLocale: Locale = "en";

export const localeLabels: Record<Locale, string> = {
  es: "ES",
  en: "EN",
};
