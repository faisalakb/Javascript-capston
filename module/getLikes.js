const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/s1szyoelhRqTHhs2c19P/likes/';
const getLikes = async () => {
  try {
    const response = await fetch(url, {
      method: 'GET',
      dataType: 'json',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    if (!response.ok) {
      throw new Error('Error getting like');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Getting Like Error:', error);
    throw error;
  }
};

export default getLikes;
