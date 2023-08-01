const getMovie = async () => {
  const response = await fetch(`https://api.tvmaze.com/shows`);
  if (response.status === 200) {
    const data = await response.json();
    console.log(data);
    return data;
  }
};
export default getMovie;
