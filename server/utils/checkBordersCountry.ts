import IApiResponse from '~/types/IApiResponse';

export default function checkBordersCountry(
  borders: string[],
  countries: IApiResponse[]
): string[] {
  if (!borders) return [];

  return borders.map((countryName) => {
    const country = countries.find((country) => country.cca3 === countryName);

    return country ? country.name.common : countryName;
  });
}
