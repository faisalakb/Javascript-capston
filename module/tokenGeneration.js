const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const getToken = async () => {
  fetch(url, {
    method: 'POST',
    dataType: 'json',
    body: JSON.stringify({

    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('From GET: Network response was not ok');
      }
      return response.json(); // This returns a Promise that resolves with the JSON data
    })

    .catch((error) => {
      console.error('Error:', error);
    });
};

export default getToken;