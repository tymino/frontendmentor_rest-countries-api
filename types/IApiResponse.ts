export default interface IApiResponse {
  name: {
    common: string;
    official: string;
    nativeName: any;
  };
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  cioc: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: { ARS: { name: string; symbol: string } };
  idd: { root: string; suffixes: string[] };
  capital: string[];
  altSpellings: string[];
  region: string;
  subregion: string;
  languages: { grn: string; spa: string };
  translations: any;
  latlng: number[];
  landlocked: boolean;
  borders: string[];
  area: number;
  demonyms: {
    eng: { f: string; m: string };
    fra: { f: string; m: string };
  };
  flag: string;
  maps: {
    googleMaps: string;
    openStreetMaps: string;
  };
  population: number;
  gini: { [key: string]: number };
  fifa: string;
  car: { signs: string[]; side: string };
  timezones: string[];
  continents: string[];
  flags: {
    png: string;
    svg: string;
  };
  coatOfArms: {
    png: string;
    svg: string;
  };
  startOfWeek: string;
  capitalInfo: { latlng: number[] };
  postalCode: { format: string; regex: string };
}
// export interface ICountryResponse {
//   flag: string;
//   header: string;
//   nativeName: string;
//   population: string;
//   region: string;
//   subRegion: string;
//   capital: string;
//   topLevelDomain: string[];
//   currencies: string;
//   languages: string[];
//   borders: string[];
// }
