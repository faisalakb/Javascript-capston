// Import the necessary functions
import enterComments from './enterComment.js';
import getComments from './getComment.js';

const container = document.getElementById('container');

// Function to display the comments popup
const popup = async (mId, image, name, genre, language) => {
  // Get the comments data for the given mId
  const commentData = await getComments(mId);

  const commentContainer = document.createElement('div');
  const commentItems = document.createElement('div');
  const dynCom = document.createElement('div');
  const tbl = document.createElement('table');
  dynCom.classList.add('dynCom');
  commentContainer.classList.add('model');
  commentItems.classList.add('cItems');
  const cross = document.createElement('i');
  cross.classList.add('close', 'fa', 'fa-close');
  commentItems.appendChild(cross);
  commentContainer.setAttribute('id', 'myModal');
  commentContainer.style.display = 'block';
  container.appendChild(commentContainer);
  const trH = document.createElement('tr');
  const th1 = document.createElement('th');
  th1.textContent = 'Date';
  const th2 = document.createElement('th');
  th2.textContent = 'User';
  const th3 = document.createElement('th');
  th3.textContent = 'Comment';
  trH.appendChild(th1);
  trH.appendChild(th2);
  trH.appendChild(th3);

  tbl.appendChild(trH);

  if (Array.isArray(commentData)) {
    // Loop through each comment and create rows in the table
    commentData.forEach((element) => {
      const tr = document.createElement('tr');
      const dat = document.createElement('td');
      const usr = document.createElement('td');
      const com = document.createElement('td');
      dat.textContent = element.creation_date;
      usr.textContent = element.username;
      com.textContent = element.comment;
      tr.appendChild(dat);
      tr.appendChild(usr);
      tr.appendChild(com);
      tbl.appendChild(tr);
    });

    // Append the table to the dynamic comment container
    dynCom.appendChild(tbl);
  } else {
    // No comments available, show a message
    const noCommentsMsg = document.createElement('p');
    noCommentsMsg.textContent = 'No comments available.';
    dynCom.appendChild(noCommentsMsg);
  }

  // Close the popup when the close button is clicked
  cross.onclick = function () {
    commentContainer.style.display = 'none';
  };

  // Create elements to display movie information and review input fields
  const img = document.createElement('img');
  const nameTag = document.createElement('h4');
  const languageTag = document.createElement('h4');
  const genreTag = document.createElement('h4');
  const brTag = document.createElement('br');
  nameTag.textContent = `MovieName: ${name}`;
  languageTag.textContent = `Language: ${language}`;
  const content = `Genre: ${genre.join(', ')}`;
  genreTag.textContent = content;

  const itemsSection = document.createElement('section');
  itemsSection.classList.add('itemSection');

  img.classList.add('commentImg');
  img.src = image;
  img.alt = 'no img found';
  const inpSect = document.createElement('section');
  inpSect.innerHTML = `<section class="inpSect"><br><br><h4>Your Review</h4><br><input type="text" class="inptxt" id="inpIdName" placeholder="Your Name"  maxlength="15"><br><br>
  <input type="text" class="inptxt" id="revId" placeholder="Your Comment" maxlength="30"><br><br>
  <input id="submitBtn"class="subBtn"type="submit" value="Submit"></section>`;

  // Append all elements to the comment container
  commentItems.appendChild(img);
  itemsSection.appendChild(nameTag);
  itemsSection.appendChild(languageTag);
  itemsSection.appendChild(brTag);
  itemsSection.appendChild(genreTag);
  commentItems.appendChild(inpSect);
  commentItems.appendChild(itemsSection);
  commentItems.appendChild(dynCom);
  commentContainer.appendChild(commentItems);

  // Add event listener to the submit button to handle comment submission

  // Add event listener to the submit button using event delegation
  commentContainer.addEventListener('click', async (event) => {
    const subId = event.target;
    if (subId.id === 'submitBtn') {
      const userName = commentContainer.querySelector('#inpIdName');
      const userReview = commentContainer.querySelector('#revId');
      // Call the function to submit the comment
      await enterComments(mId, userName.value, userReview.value);
      userName.value = '';
      userReview.value = '';

      // Update the comment section dynamically with the newly entered comment
      const newCommentData = await getComments(mId);
      const newComment = newCommentData[newCommentData.length - 1];

      const tr = document.createElement('tr');
      const dat = document.createElement('td');
      const usr = document.createElement('td');
      const com = document.createElement('td');
      dat.textContent = newComment.creation_date;
      usr.textContent = newComment.username;
      com.textContent = newComment.comment;
      tr.appendChild(dat);
      tr.appendChild(usr);
      tr.appendChild(com);
      tbl.appendChild(tr);
    }
  });
};

// Function to show comments popup for a movie
const comments = (id, image, name, genre, language) => {
  popup(id, image, name, genre, language);
};

export default comments;
