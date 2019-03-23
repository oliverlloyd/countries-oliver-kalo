declare type ContinentType = {
  code: string,
  name: string,
  countries?: [CountryType],
};

declare type CountryType = {
  code: string,
  name: string,
  phone?: string,
  currency?: string,
  emoji?: string,
  languages?: [LanguageType],
}

declare type LanguageType = {
  code: string,
  name: string,
}
