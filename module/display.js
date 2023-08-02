import getMovie from './getMovie.js';
import { countLikes, updateLikesCount } from './countsLike.js';
import getLikes from './getLikes.js';

const container = document.getElementById('container');

const display = async () => {
  try {
    const likesData = await getLikes();
    const getMovieData = await getMovie();

    container.classList.add('movies-container');

    container.innerHTML = '';
    const totalLikesPerMovie = likesData.reduce((acc, likes) => {
      acc[likes.item_id] = (acc[likes.item_id] || 0) + likes.likes;
      return acc;
    }, {});

    getMovieData.forEach((element) => {
      const movieDiv = document.createElement('div');
      movieDiv.classList.add('movie');

      const img = document.createElement('img');
      const p = document.createElement('p');
      const aComments = document.createElement('a');
      const heartIcon = document.createElement('i');
      const countsLike = document.createElement('span');

      aComments.classList.add('anc');
      p.textContent = element.name;
      aComments.textContent = 'comments';
      aComments.href = '';

      img.src = element.image.original;
      img.alt = 'No image found';
      img.width = 200;
      img.height = 300;

      heartIcon.classList.add('far', 'fa-heart');
      heartIcon.setAttribute('data-item-id', element.id);

      heartIcon.addEventListener('click', async (event) => {
        const itemId = event.target.getAttribute('data-item-id'); // Get the item_id from the custom attribute
        console.log(likesData);

        let likesInfo = likesData.find((likes) => likes.item_id === itemId);
        console.log(likesInfo);
        if (!likesInfo) {
          likesInfo = { item_id: itemId, likes: 0 };
        }

        const newLikesCount = likesInfo.likes + 1;

        await countLikes(itemId, newLikesCount);

        updateLikesCount(itemId, newLikesCount);

        totalLikesPerMovie[itemId] = newLikesCount;
        display();
      });

      countsLike.classList.add('add');
      countsLike.textContent = totalLikesPerMovie[element.id] || 0;
      movieDiv.appendChild(img);
      const sect = document.createElement('section');
      sect.appendChild(p);
      sect.appendChild(aComments);
      sect.appendChild(countsLike);
      movieDiv.appendChild(sect);
      movieDiv.appendChild(heartIcon);

      container.appendChild(movieDiv);
    });
  } catch (error) {
    throw new Error('Error when viewing movies', error);
  }
};

export default display;
