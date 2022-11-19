import IApiResponse from '~/types/IApiResponse';

const myFetch = async (url: string): Promise<IApiResponse[]> => {
  const data = await fetch(url);
  const json = await data.json();

  return json;
};

export default myFetch;
