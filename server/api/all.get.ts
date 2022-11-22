import { convertPopulation, myFetch } from '~/server/utils';

export default defineEventHandler(async (event) => {
  const URL = 'https://restcountries.com/v3.1/all';

  const { search } = useQuery(event);

  console.log('server', search);

  const countries = await myFetch(URL);

  const response = countries.map((country) => {
    const { flags, name, population, region, capital } = country;

    return {
      flag: flags.png,
      header: name.common,
      population: convertPopulation(population),
      region: region,
      capital: !capital ? 'None' : capital[0],
    };
  });

  // console.log('server', response);

  return response.slice(0, 6);
});
