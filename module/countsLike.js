// countsLike.js
const countLikes = async () => {
  try {
    const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/fy6DJ86u1eQhR7jHzpFg/likes');
    if (response.status === 200) {
      const data = await response.json();
      // Calculate the total number of likes
      const totalLikes = data.reduce((total, item) => total + item.likes, 0);
      return totalLikes;
    }
    throw new Error('Error while retrieving likes');
  } catch (error) {
    throw new Error('Error while retrieving likes', error);
  }
};

export default countLikes;
