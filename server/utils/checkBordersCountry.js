export const checkBordersCountry = (borders, countries) => {
  if (!borders) return [];

  return borders.map((name) => {
    const country = countries.find((item) => item.cca3 === name);

    if (country) {
      return country.name.common;
    } else {
      return name;
    }
  });
};
