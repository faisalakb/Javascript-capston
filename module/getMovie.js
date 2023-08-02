const getMovie = async () => {
  const response = await fetch('https://api.tvmaze.com/shows');
  if (response.status === 200) {
    const data = await response.json();
    return data;
  }

  return [];
};

export default getMovie;
