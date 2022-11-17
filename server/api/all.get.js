export default defineEventHandler(async () => {
  const data = await fetch('https://restcountries.com/v3.1/all');
  const response = await data.json();

  // console.log('server', response);

  return response.slice(0, 6);
});
