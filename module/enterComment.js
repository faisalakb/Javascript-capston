
const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/s1szyoelhRqTHhs2c19P/comments/';
const addComments = async (mId,uName,uComment) => {
  fetch(url, {
    method: 'POST',
    dataType: 'json',
    body: JSON.stringify({
      item_id: mId,
      username: uName,
      comment: uComment,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Error entering like');
      }

      return response.text();
    })
    .catch((error) => {
      console.error('Like Error:', error);
    });
};

export default addComments;
