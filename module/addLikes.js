async function addLikes(itemId) {
  try {
    await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/fy6DJ86u1eQhR7jHzpFg/likes/', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        item_id: itemId,
      }),
    });
    throw new Error('Like ajouté avec succès !');
  } catch (error) {
    throw new Error('Erreur lors de la requête API.', error);
  }
}

export default addLikes;
