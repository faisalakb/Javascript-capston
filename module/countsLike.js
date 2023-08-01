async function LikesAdd(id) {
    console.log("LikesAdd called with item ID:", id);
  
    await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/fy6DJ86u1eQhR7jHzpFg/likes/', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        item_id: id,
      }),
    });
  
    console.log("Like added for item ID:", id);
  
    getLikes();
  }
  