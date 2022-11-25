import { convertPopulation, myFetch } from '~/server/utils';

interface IResponseForIndexPage {
  flag: string;
  header: string;
  population: string;
  region: string;
  capital: string;
}

export default defineEventHandler(async (event) => {
  const { search, filter, loadAll } = useQuery(event);

  const API_URL = {
    all: 'https://restcountries.com/v3.1/all',
    region: `https://restcountries.com/v3.1/region/${filter}`,
  };

  const MAIN_URL = filter !== '' ? API_URL.region : API_URL.all;

  const countries = await myFetch(MAIN_URL);

  console.log('server load all:', filter);

  const response = countries.reduce(
    (filtered: IResponseForIndexPage[], country) => {
      const searchRegEx = new RegExp(`${search}`, 'i');
      const isCheckRegEx = searchRegEx.test(country.name.common);

      if (isCheckRegEx) {
        const { flags, name, population, region, capital } = country;

        const newCountry = {
          flag: flags.png,
          header: name.common,
          population: convertPopulation(population),
          region: region,
          capital: !capital ? 'None' : capital[0],
        };

        filtered.push(newCountry);
      }

      return filtered;
    },
    []
  );

  // console.log('server', response);

  return response;
});
