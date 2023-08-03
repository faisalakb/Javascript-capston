import getMovie from './getMovie.js';
import { countLikes, updateLikesCount } from './countsLike.js';
import comments from './comments.js';
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
      const heartCount = document.createElement('section');
      movieDiv.classList.add('movie');
      heartCount.classList.add('heartCount');
      const img = document.createElement('img');
      const p = document.createElement('p');
      const heartIcon = document.createElement('i');
      const countsLike = document.createElement('span');
      const a = document.createElement('a');
      a.classList.add('anc');
      p.textContent = element.name;

      a.textContent = 'comments';
      a.href = '#';
      img.src = element.image.original;
      img.alt = 'No image found';
      img.width = 200;
      img.height = 300;
      container.appendChild(img);
      heartIcon.classList.add('far', 'fa-heart');
      heartIcon.setAttribute('data-item-id', element.id);

      heartIcon.addEventListener('click', async (event) => {
        const itemId = event.target.getAttribute('data-item-id'); // Get the item_id from the custom attribute
        

        let likesInfo = likesData.find((likes) => likes.item_id === itemId);
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

      sect.appendChild(a);
      movieDiv.appendChild(sect);
      heartCount.appendChild(countsLike);
      heartCount.appendChild(heartIcon);
      container.appendChild(movieDiv);
      container.appendChild(heartCount);
      sect.classList.add('sect');
      container.appendChild(sect);

      a.addEventListener('click', (e) => {
        comments(element.id, element.image.original, element.name, element.genres, element.language);
        
      });
    });
  } catch (error) {
    console.log('getting error finding movie', error);
  }
};
export default display;
