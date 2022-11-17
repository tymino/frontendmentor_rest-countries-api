import { myFetch } from '~/server/utils/myFetch';

export default defineEventHandler(async (event) => {
  const param = event.context.params.name;
  const MAIN_URL = `https://restcountries.com/v3.1/name/${param}`;
  const ALL_DATA_URL = 'https://restcountries.com/v3.1/all';

  const currentCountry = await myFetch(MAIN_URL);
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
      } = country[0];

      const countryBorders = country[0].borders.map((name) => {
        const countryObj = countries.find((item) => item.cca3 === name);

        if (countryObj) {
          return countryObj.name.common;
        } else {
          return name;
        }
      });

      return {
        flag: flags.png,
        header: name.common,
        nativeName: Object.values(name.nativeName)[0].common,
        population: population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','),
        region: region,
        subRegion: subregion,
        capital: capital[0],
        topLevelDomain: tld,
        currencies: Object.values(currencies)[0].name,
        languages: Object.values(languages),
        borders: countryBorders,
      };
    }
  );

  console.log(response);

  return response;
});
