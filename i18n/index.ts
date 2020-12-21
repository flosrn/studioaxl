/**
 * Locales should implement this interface
 * Only serializable objects are supported right now (i.e: no functions).
 */

export interface IHero {
  subtitle: string;
}

export interface MyLocale {
  locale: string;
  home: {
    hero: IHero;
  };
}
