export interface CountryDetail {
  flags: Flags
  name: Name
  tld: string[]
  currencies: Currencies
  capital: string[]
  region: string
  subregion: string
  languages: Languages
  borders: string[]
  population: number
}

interface Flags {
  png: string
  svg: string
  alt: string
}

interface Name {
  common: string
  official: string
  nativeName: NativeName
}

interface NativeName {
  [x: string]: {
    official: string
    common: string
  }
}

interface Currencies {
  [x: string]: {
    name: string
    symbol: string
  }
}

interface Languages {
  [x: string]: string
}
