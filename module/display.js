import getMovie from "./getMovie.js";
const container = document.getElementById("container");
const count = 0;
const display = async () => {
  try {
    const getMovieData = await getMovie();
    getMovieData.forEach((element) => {
      const img = document.createElement("img");
      const p = document.createElement("p");
      const a = document.createElement("a");
      a.classList.add("anc");
      p.textContent = element.name;
      a.textContent = "comments";
      a.href = "";
      img.src = element.image.original;
      img.alt = "no img found";
      img.width = 200;
      img.height = 300;
      container.appendChild(img);
      const sect = document.createElement("section");
      sect.appendChild(p);
      sect.classList.add("sect");
      container.appendChild(sect);
      container.appendChild(a);
    });
  } catch (error) {
    console.log("getting error finding movie", error);
  }
};
export default display;
