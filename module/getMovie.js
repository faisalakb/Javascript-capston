const getMovie = async () => {
  try {
    const response = await fetch("https://api.tvmaze.com/shows");
    if (response.status === 200) {
      const data = await response.json();
      const limitedData = data.slice(0, 20);
      return limitedData;
    } else {
      console.log("Erreur lors de la récupération des films");
      return [];
    }
  } catch (error) {
    console.log("Erreur lors de la récupération des films", error);
    return [];
  }
};

export default getMovie;
