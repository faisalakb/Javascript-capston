// addLikes.js
const addLikes = async (itemId) => {
  try {
    const response = await fetch(
      'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/fy6DJ86u1eQhR7jHzpFg/likes/',
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          item_id: itemId,
        }),
      },
    );

    if (response.status !== 201) {
      throw new Error('Erreur lors de la requête API.');
    }
  } catch (error) {
    const errorMessageElement = document.getElementById('error-message');
    errorMessageElement.textContent = `Erreur lors de la requête API : ${error.message}`;
    throw new Error();
  }
};

export default addLikes;
