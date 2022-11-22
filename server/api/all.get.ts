import { convertPopulation, myFetch } from '~/server/utils';

interface IResponseForIndexPage {
  flag: string;
  header: string;
  population: string;
  region: string;
  capital: string;
}

export default defineEventHandler(async (event) => {
  const URL = 'https://restcountries.com/v3.1/all';
  const countries = await myFetch(URL);

  const { search } = useQuery(event);

  const response = countries.reduce(
    (filtered: IResponseForIndexPage[], country) => {
      const testReg = new RegExp(`${search}`, 'i');

      if (country.name.common.match(testReg)) {
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

  console.log('server', response);

  return response;
});
