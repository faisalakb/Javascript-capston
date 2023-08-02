const getComments = async (itemId) => {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };
  
    const response = await fetch(
      `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/s1szyoelhRqTHhs2c19P/comments?item_id=${itemId}`,
      options,
    );
  
    const data = await response.json();
    console.log(data);
    return data;
  };
  
  export default getComments;