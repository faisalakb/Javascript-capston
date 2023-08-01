const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/s1szyoelhRqTHhs2c19P/likes/';

const countLikes = async (itemId, newLikesCount) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify({
        item_id: itemId,
        likes: newLikesCount,
      }),
    });

    if (!response.ok) {
      throw new Error('Error counting likes');
    }
  } catch (error) {
    console.error('Error counting likes:', error.message);
  }
};

const updateLikesCount = (itemId, newLikesCount) => {
  const countsLike = document.querySelector(`[data-item-id="${itemId}"] + .add`);
  if (countsLike) {
    countsLike.textContent = newLikesCount;
  }
};

export { countLikes, updateLikesCount };
