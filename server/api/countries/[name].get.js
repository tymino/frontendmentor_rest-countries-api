import { myFetch } from '~/server/utils/myFetch';
import { checkBordersCountry } from '~/server/utils/checkBordersCountry';

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
        borders,
      } = country[0];

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
        borders: checkBordersCountry(borders, countries),
      };
    }
  );

  // console.log(borders);

  return response;
});
