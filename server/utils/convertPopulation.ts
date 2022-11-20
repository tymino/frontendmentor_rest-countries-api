export default function convertPopulation(population: number) {
  return population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
