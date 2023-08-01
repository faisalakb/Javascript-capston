// addLikes.js
const addLikes = async (itemId) => {
  try {
    const response = await fetch(
      `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/fy6DJ86u1eQhR7jHzpFg/likes`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ item_id: itemId }),
      }
    );

    if (!response.ok) {
      throw new Error("Erreur lors de la requête API");
    }

    console.log("Like ajouté avec succès !");
  } catch (error) {
    console.log("Erreur lors de la requête API", error);
  }
};

export default addLikes;
