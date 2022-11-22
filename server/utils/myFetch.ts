import IApiData from '~/types/IApiData';

export default async function myFetch(url: string): Promise<IApiData[]> {
  const data = await fetch(url);
  const json = await data.json();

  return json;
}
