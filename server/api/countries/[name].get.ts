import {
  checkBordersCountry,
  convertPopulation,
  myFetch,
} from '~/server/utils';

export default defineEventHandler(async (event) => {
  const paramName: string = event.context.params.name;

  const MAIN_URL: string = `https://restcountries.com/v3.1/name/${paramName}`;
  const ALL_DATA_URL: string = 'https://restcountries.com/v3.1/all';
  const [currentCountry] = await myFetch(MAIN_URL);
  const allCountries = await myFetch(ALL_DATA_URL);

  const response = await Promise.all([currentCountry, allCountries]).then(
    (value) => {
      const [country, countries] = value;

      const {
        flags,
        name,
        population,
        region,
        subregion,
        capital,
        tld,
        currencies,
        languages,
        borders,
      } = country;

      return {
        flag: flags.png,
        header: name.common,
        nativeName: Object.keys(name.nativeName).map(
          (key) => name.nativeName[key]
        )[0].common as string,
        population: convertPopulation(population),
        region: region,
        subRegion: subregion,
        capital: capital[0],
        topLevelDomain: tld,
        currencies: Object.values(currencies)[0].name,
        languages: Object.values(languages),
        borders: checkBordersCountry(borders, countries),
      };
    }
  );

  return response;
});
