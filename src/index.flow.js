declare type Continent = {
  code: string,
  name: string,
  countries: [Country],
};

declare type Country = {
  code: string,
  name: string,
  phone: string,
  currency: string,
  emoji: string,
  languages: [Language],

}

declare type Language = {
  code: string,
  name: string,
}
