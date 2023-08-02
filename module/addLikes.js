const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/s1szyoelhRqTHhs2c19P/likes/';
const addLikes = async () => {
  fetch(url, {
    method: 'POST',
    dataType: 'json',
    body: JSON.stringify({
      item_id: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Error entering like');
      }
      return response.text(); // This returns a Promise that resolves with the JSON data
    })
    .catch((error) => {
      console.error('Like Error:', error);
    });
};

export default addLikes;