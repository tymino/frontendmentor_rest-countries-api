import IApiData from '~/types/IApiData';

const myFetch = async (url: string): Promise<IApiData[]> => {
  const data = await fetch(url);
  const json = await data.json();

  return json;
};

export default myFetch;
