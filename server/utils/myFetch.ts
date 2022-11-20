import IApiResponse from '~/types/IApiResponse';

export default async function myFetch(url: string): Promise<IApiResponse[]> {
  const data = await fetch(url);
  const json = await data.json();

  return json;
}
