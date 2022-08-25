export const fetchMovie = async (name: string) => {
  const response = await fetch(`https://swapi.dev/api/films/?search=${name}`);
  const data = await response.json();
  return data.results[0];
};
