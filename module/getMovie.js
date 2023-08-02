const getMovie = async () => {
  try {
    const response = await fetch('https://api.tvmaze.com/shows');
    if (response.status === 200) {
      const data = await response.json();
      const limitedData = data.slice(0, 20);
      return limitedData;
    }
    throw new Error('Error while retrieving movies');
  } catch (error) {
    throw new Error('Error while retrieving movies', error);
  }
};

export default getMovie;
