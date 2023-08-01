// import addLikes from "./addLikes.js";
// import getMovie from "./getMovie.js";

// const container = document.getElementById("container");

// const getLikes = async () => {
//   try {
//     const response = await fetch(
//       "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/fy6DJ86u1eQhR7jHzpFg/likes"
//     );
//     if (response.status === 200) {
//       const data = await response.json();
//       return data;
//     } else {
//       console.log("Erreur lors de la récupération des likes");
//       return [];
//     }
//   } catch (error) {
//     console.log("Erreur lors de la récupération des likes", error);
//     return [];
//   }
// };

// const display = async () => {
//   try {
//     const likesData = await getLikes();
//     const getMovieData = await getMovie();

//     // Add a "movies-container" class for the main container
//     container.classList.add("movies-container");

//     // Replace the contents of the main container with an empty string
//     container.innerHTML = "";

//     getMovieData.forEach((element) => {
//       const movieDiv = document.createElement("div");
//       movieDiv.classList.add("movie");

//       const img = document.createElement("img");
//       const p = document.createElement("p");
//       const aComments = document.createElement("a");
//       const heartIcon = document.createElement("i");
//       const countsLike = document.createElement("span");

//       aComments.classList.add("anc");
//       p.textContent = element.name;
//       aComments.textContent = "comments";
//       aComments.href = "";

//       img.src = element.image.original;
//       img.alt = "No image found";
//       img.width = 200;
//       img.height = 300;

//       // Font Awesome "heart" icon
//       heartIcon.classList.add("far", "fa-heart");
//       heartIcon.setAttribute("data-id", element.id);
//       // Add an event listener to manage the click on the "heart" icon
//       heartIcon.addEventListener("click", (event) => {
//         const itemId = event.target.getAttribute("data-id");
//         (async () => {
//           await addLikes(itemId);
//           await display();
//         })();
//       });

//       countsLike.classList.add("add");
//       const likesInfo = likesData.find((likes) => likes.item_id === element.id);
//       countsLike.textContent = likesInfo ? likesInfo.likes : 0;

//       movieDiv.appendChild(img);
//       const sect = document.createElement("section");
//       sect.appendChild(p);
//       sect.appendChild(aComments);
//       movieDiv.appendChild(sect);
//       movieDiv.appendChild(heartIcon);
//       sect.appendChild(countsLike);

//       container.appendChild(movieDiv);
//     });
//   } catch (error) {
//     console.log("Error when displaying film", error);
//   }
// };

// export default display;
// // Call the display function to display the movies when the page loads
// display();

// display.js
import addLikes from "./addLikes.js";
import getMovie from "./getMovie.js";

const container = document.getElementById("container");

const getLikes = async () => {
  try {
    const response = await fetch(
      "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/fy6DJ86u1eQhR7jHzpFg/likes"
    );
    if (response.status === 200) {
      const data = await response.json();
      return data;
    } else {
      console.log("Erreur lors de la récupération des likes");
      return [];
    }
  } catch (error) {
    console.log("Erreur lors de la récupération des likes", error);
    return [];
  }
};

const display = async () => {
  try {
    const likesData = await getLikes();
    const getMovieData = await getMovie();

    // Ajouter une classe "movies-container" pour le conteneur principal
    container.classList.add("movies-container");

    // Remplacer le contenu du conteneur principal par une chaîne vide
    container.innerHTML = "";

    getMovieData.forEach((element) => {
      const movieDiv = document.createElement("div");
      movieDiv.classList.add("movie");

      const img = document.createElement("img");
      const p = document.createElement("p");
      const aComments = document.createElement("a");
      const heartIcon = document.createElement("i");
      const countsLike = document.createElement("span");

      aComments.classList.add("anc");
      p.textContent = element.name;
      aComments.textContent = "comments";
      aComments.href = "";

      img.src = element.image.original;
      img.alt = "No image found";
      img.width = 200;
      img.height = 300;

      // Icône "heart" de Font Awesome
      heartIcon.classList.add("far", "fa-heart");
      heartIcon.setAttribute("data-id", element.id);
      
      // Ajouter un gestionnaire d'événement pour gérer le clic sur l'icône "heart"
      heartIcon.addEventListener("click", async (event) => {
        const itemId = event.target.getAttribute("data-id");
        await addLikes(itemId);
        // Après avoir ajouté un like, récupérer et réafficher les films avec les compteurs de likes mis à jour
        await display();
      });

      countsLike.classList.add("add");
      const likesInfo = likesData.find((likes) => likes.item_id === element.id);
      countsLike.textContent = likesInfo ? likesInfo.likes : 0;

      movieDiv.appendChild(img);
      const sect = document.createElement("section");
      sect.appendChild(p);
      sect.appendChild(aComments);
      sect.appendChild(countsLike);
      movieDiv.appendChild(sect);
      movieDiv.appendChild(heartIcon);

      container.appendChild(movieDiv);
    });
  } catch (error) {
    console.log("Erreur lors de l'affichage des films", error);
  }
};

export default display;
// Appeler la fonction display pour afficher les films lorsque la page se charge
display();

