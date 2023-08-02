const container = document.getElementById('container');

const popup = (image, name, genre, language) => {
  const commentContainer = document.createElement('div');
  const commentItems = document.createElement('div');
  commentContainer.classList.add('model');
  commentItems.classList.add('cItems');
  const cross = document.createElement('i');
  cross.classList.add('close', 'fa', 'fa-close');
  commentItems.appendChild(cross);
  commentContainer.setAttribute('id', 'myModal');
  commentContainer.style.display = 'block';
  container.appendChild(commentContainer);
  cross.onclick = function () {
    commentContainer.style.display = 'none';
  };

  const img = document.createElement('img');
  const nameTag = document.createElement('h4');
  const languageTag = document.createElement('h4');
  const genreTag = document.createElement('h4');
  const brTag = document.createElement('br');
  nameTag.textContent = `MovieName :${name}`;
  languageTag.textContent = `Language :${language}`;
  const content = `Genre : ${genre.join(', ')}`;
  genreTag.textContent = content;

  const itemsSection = document.createElement('section');
  itemsSection.classList.add('itemSection');

  img.classList.add('commentImg');
  img.src = image;
  img.alt = 'no img found';
  const inpSect = document.createElement('section');
  inpSect.innerHTML = `<section class="inpSect"><br><br><h4>Your Review</h4><br><input type="text" class="inptxt" id="inpIdName" placeholder="Your Name"  maxlength="15"><br><br>
  <input type="text" class="inptxt" id="inpIdScore" placeholder="Your Comment" maxlength="30"><br><br>
  <input id="submitBtn"class="subBtn"type="submit" value="Submit"></section>`;
  commentItems.appendChild(img);
  itemsSection.appendChild(nameTag);
  itemsSection.appendChild(languageTag);
  itemsSection.appendChild(brTag);
  itemsSection.appendChild(genreTag);
  commentItems.appendChild(inpSect);
  commentItems.appendChild(itemsSection);
  commentContainer.appendChild(commentItems);
};

const comments = (e, image, name, genre, language) => {
  popup(image, name, genre, language);
};

export default comments;