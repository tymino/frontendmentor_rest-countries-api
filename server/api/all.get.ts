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

  const { search, filter } = useQuery(event);

  // console.log('server search:', search);
  // console.log('server filter:', filter);

  const response = countries.reduce(
    (filtered: IResponseForIndexPage[], country) => {
      const searchRegEx = new RegExp(`${search}`, 'i');

      const isCheckRegEx = searchRegEx.test(country.name.common);
      const hasRegion = country.region === filter || filter === '';

      if (isCheckRegEx && hasRegion) {
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
