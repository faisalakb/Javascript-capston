/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./module/comments.js":
/*!****************************!*\
  !*** ./module/comments.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _enterComment_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enterComment.js */ \"./module/enterComment.js\");\n/* harmony import */ var _getComment_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getComment.js */ \"./module/getComment.js\");\n/* harmony import */ var _countComments_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./countComments.js */ \"./module/countComments.js\");\n\n\n\n\nconst container = document.getElementById('container');\n\n// Function to display the comments popup\nconst popup = async (mId, image, name, genre, language) => {\n  // Get the comments data for the given mId\n  const commentData = await (0,_getComment_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(mId);\n\n  const commentContainer = document.createElement('div');\n  const commentItems = document.createElement('div');\n  const cCount = document.createElement('h3');\n  cCount.classList.add('cCount');\n\n  const comCount = await (0,_countComments_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(mId);\n\n  const dynCom = document.createElement('div');\n  const tbl = document.createElement('table');\n  dynCom.classList.add('dynCom');\n  commentContainer.classList.add('model');\n  commentItems.classList.add('cItems');\n  const cross = document.createElement('i');\n  cross.classList.add('close', 'fa', 'fa-close');\n  commentItems.appendChild(cross);\n  commentContainer.setAttribute('id', 'myModal');\n  commentContainer.style.display = 'block';\n  container.appendChild(commentContainer);\n  const trH = document.createElement('tr');\n  const th1 = document.createElement('th');\n  th1.textContent = 'Date';\n  const th2 = document.createElement('th');\n  th2.textContent = 'User';\n  const th3 = document.createElement('th');\n  th3.textContent = 'Comment';\n  trH.appendChild(th1);\n  trH.appendChild(th2);\n  trH.appendChild(th3);\n\n  tbl.appendChild(trH);\n  if (Array.isArray(commentData)) {\n    commentData.forEach((element) => {\n      const tr = document.createElement('tr');\n      const dat = document.createElement('td');\n      const usr = document.createElement('td');\n      const com = document.createElement('td');\n      dat.textContent = element.creation_date;\n      usr.textContent = element.username;\n      com.textContent = element.comment;\n      tr.appendChild(dat);\n      tr.appendChild(usr);\n      tr.appendChild(com);\n      tbl.appendChild(tr);\n    });\n    cCount.textContent = `Total Comments :${comCount}`;\n    dynCom.appendChild(tbl);\n  } else {\n    const noCommentsMsg = document.createElement('p');\n    noCommentsMsg.textContent = 'No comments available.';\n    dynCom.appendChild(noCommentsMsg);\n  }\n\n  cross.onclick = function () {\n    commentContainer.style.display = 'none';\n  };\n\n  const img = document.createElement('img');\n  const nameTag = document.createElement('h4');\n  const languageTag = document.createElement('h4');\n  const genreTag = document.createElement('h4');\n  const brTag = document.createElement('br');\n  nameTag.textContent = `MovieName: ${name}`;\n  languageTag.textContent = `Language: ${language}`;\n  const content = `Genre: ${genre.join(', ')}`;\n  genreTag.textContent = content;\n\n  const itemsSection = document.createElement('section');\n  itemsSection.classList.add('itemSection');\n\n  img.classList.add('commentImg');\n  img.src = image;\n  img.alt = 'no img found';\n  const inpSect = document.createElement('section');\n  inpSect.innerHTML = `<section class=\"inpSect\"><br><br><h4>Your Review</h4><br><input type=\"text\" class=\"inptxt\" id=\"inpIdName\" placeholder=\"Your Name\"  maxlength=\"15\"><br><br>\n  <input type=\"text\" class=\"inptxt\" id=\"revId\" placeholder=\"Your Comment\" maxlength=\"30\"><br><br>\n  <input id=\"submitBtn\"class=\"subBtn\"type=\"submit\" value=\"Submit\"></section>`;\n\n  // Add event listener to the submit button to handle comment submission\n\n  // Add event listener to the submit button using event delegation\n  commentContainer.addEventListener('click', async (event) => {\n    const subId = event.target;\n    if (subId.id === 'submitBtn') {\n      const userName = commentContainer.querySelector('#inpIdName');\n      const userReview = commentContainer.querySelector('#revId');\n      // Call the function to submit the comment\n      await (0,_enterComment_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(mId, userName.value, userReview.value);\n      userName.value = '';\n      userReview.value = '';\n      const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));\n      await delay(500);\n      // Update the comment section dynamically with the newly entered comment\n      const newCommentData = await (0,_getComment_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(mId);\n      cCount.textContent = `Total Comments :${await (0,_countComments_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(mId)}`;\n\n      while (tbl.lastElementChild) {\n        tbl.removeChild(tbl.lastElementChild);\n      }\n      tbl.appendChild(trH);\n      newCommentData.forEach((newComment) => {\n        const tr = document.createElement('tr');\n        const dat = document.createElement('td');\n        const usr = document.createElement('td');\n        const com = document.createElement('td');\n        dat.textContent = newComment.creation_date;\n        usr.textContent = newComment.username;\n        com.textContent = newComment.comment;\n        tr.appendChild(dat);\n        tr.appendChild(usr);\n        tr.appendChild(com);\n        tbl.appendChild(tr);\n      });\n    }\n  });\n  // Append all elements to the comment container\n  commentItems.appendChild(img);\n  itemsSection.appendChild(nameTag);\n  itemsSection.appendChild(languageTag);\n  itemsSection.appendChild(brTag);\n  itemsSection.appendChild(genreTag);\n  commentItems.appendChild(inpSect);\n  commentItems.appendChild(itemsSection);\n  commentItems.appendChild(cCount);\n\n  commentContainer.appendChild(commentItems);\n  commentItems.appendChild(dynCom);\n};\n\nconst comments = (id, image, name, genre, language) => {\n  popup(id, image, name, genre, language);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (comments);\n\n\n//# sourceURL=webpack://javascript-capston/./module/comments.js?");

/***/ }),

/***/ "./module/countComments.js":
/*!*********************************!*\
  !*** ./module/countComments.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getComment_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getComment.js */ \"./module/getComment.js\");\n\n\nconst comCount = async (mid) => {\n  console.log('Getting from countComments');\n  const commentData = await (0,_getComment_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(mid);\n  let count = 0;\n  if (Array.isArray(commentData)) {\n    // Loop through each comment and create rows in the table\n\n    commentData.forEach((element) => {\n      const len = element.comment;\n      if (len.length) {\n        count += 1;\n      } else {\n        // do nothing\n      }\n    });\n  }\n\n  return count;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (comCount);\n\n//# sourceURL=webpack://javascript-capston/./module/countComments.js?");

/***/ }),

/***/ "./module/countsLike.js":
/*!******************************!*\
  !*** ./module/countsLike.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   countLikes: () => (/* binding */ countLikes),\n/* harmony export */   updateLikesCount: () => (/* binding */ updateLikesCount)\n/* harmony export */ });\nconst url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/s1szyoelhRqTHhs2c19P/likes/';\n\nconst countLikes = async (itemId, newLikesCount) => {\n  try {\n    const response = await fetch(url, {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json; charset=UTF-8',\n      },\n      body: JSON.stringify({\n        item_id: itemId,\n        likes: newLikesCount,\n      }),\n    });\n\n    if (!response.ok) {\n      throw new Error('Error counting likes');\n    }\n  } catch (error) {\n    console.error('Error counting likes:', error.message);\n  }\n};\n\nconst updateLikesCount = (itemId, newLikesCount) => {\n  const countsLike = document.querySelector(`[data-item-id=\"${itemId}\"] + .add`);\n  if (countsLike) {\n    countsLike.textContent = newLikesCount;\n  }\n};\n\n\n\n\n//# sourceURL=webpack://javascript-capston/./module/countsLike.js?");

/***/ }),

/***/ "./module/display.js":
/*!***************************!*\
  !*** ./module/display.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getMovie_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getMovie.js */ \"./module/getMovie.js\");\n/* harmony import */ var _countsLike_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./countsLike.js */ \"./module/countsLike.js\");\n/* harmony import */ var _comments_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comments.js */ \"./module/comments.js\");\n/* harmony import */ var _getLikes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getLikes.js */ \"./module/getLikes.js\");\n\n\n\n\n\nconst container = document.getElementById('container');\n\nconst display = async () => {\n  try {\n    const likesData = await (0,_getLikes_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    const getMovieData = await (0,_getMovie_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    container.classList.add('movies-container');\n\n    const totalLikesPerMovie = likesData.reduce((acc, likes) => {\n      acc[likes.item_id] = (acc[likes.item_id] || 0) + likes.likes;\n      return acc;\n    }, {});\n\n    const cardscounter = () => {\n      const cardNum = document.querySelector('#cardNum');\n      const cards = document.querySelectorAll('.movie');\n      cardNum.innerHTML = `Shows(${cards.length})`;\n    };\n\n    container.innerHTML = ''; // Clear the container before adding new elements\n\n    getMovieData.forEach((element) => {\n      const movieDiv = document.createElement('div');\n      movieDiv.classList.add('movie');\n\n      const img = document.createElement('img');\n      const p = document.createElement('p');\n      const a = document.createElement('a');\n      const heartIcon = document.createElement('i');\n      const countsLike = document.createElement('span');\n      const heartCount = document.createElement('section');\n\n      a.classList.add('anc');\n      p.textContent = element.name;\n      a.textContent = 'comments';\n      a.href = '#';\n      img.src = element.image.original;\n      img.alt = 'No image found';\n      img.width = 200;\n      img.height = 300;\n\n      heartIcon.classList.add('far', 'fa-heart');\n      heartIcon.setAttribute('data-item-id', element.id);\n\n      heartIcon.addEventListener('click', async (event) => {\n        const itemId = event.target.getAttribute('data-item-id'); // Get the item_id from the custom attribute\n\n        let likesInfo = likesData.find((likes) => likes.item_id === itemId);\n\n        if (!likesInfo) {\n          likesInfo = { item_id: itemId, likes: 0 };\n        }\n\n        const newLikesCount = likesInfo.likes + 1;\n\n        await (0,_countsLike_js__WEBPACK_IMPORTED_MODULE_1__.countLikes)(itemId, newLikesCount);\n        (0,_countsLike_js__WEBPACK_IMPORTED_MODULE_1__.updateLikesCount)(itemId, newLikesCount);\n\n        totalLikesPerMovie[itemId] = newLikesCount;\n        display();\n      });\n\n      countsLike.classList.add('add');\n      countsLike.textContent = totalLikesPerMovie[element.id] || 0;\n      movieDiv.appendChild(img);\n\n      const sect = document.createElement('section');\n      sect.appendChild(p);\n      sect.appendChild(a);\n      movieDiv.appendChild(sect);\n\n      heartCount.appendChild(countsLike);\n      heartCount.appendChild(heartIcon);\n      movieDiv.appendChild(heartCount);\n\n      sect.classList.add('sect');\n      container.appendChild(movieDiv);\n\n      a.addEventListener('click', () => {\n        (0,_comments_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(element.id, element.image.original, element.name,\n          element.genres, element.language);\n      });\n    });\n    cardscounter();\n  } catch (error) {\n    console.log('Une erreur s\\'est produite lors de l\\'affichage des films', error);\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (display);\n\n\n//# sourceURL=webpack://javascript-capston/./module/display.js?");

/***/ }),

/***/ "./module/enterComment.js":
/*!********************************!*\
  !*** ./module/enterComment.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/s1szyoelhRqTHhs2c19P/comments/';\nconst addComments = async (mId, uName, uComment) => {\n  fetch(url, {\n    method: 'POST',\n    dataType: 'json',\n    body: JSON.stringify({\n      item_id: mId,\n      username: uName,\n      comment: uComment,\n    }),\n    headers: {\n      'Content-type': 'application/json; charset=UTF-8',\n    },\n  })\n    .then((response) => {\n      if (!response.ok) {\n        throw new Error('Error entering like');\n      }\n\n      return response.text();\n    });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addComments);\n\n\n//# sourceURL=webpack://javascript-capston/./module/enterComment.js?");

/***/ }),

/***/ "./module/getComment.js":
/*!******************************!*\
  !*** ./module/getComment.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getComments = async (itemId) => {\n  const options = {\n    method: 'GET',\n    headers: {\n      'Content-Type': 'application/json',\n    },\n  };\n\n  const response = await fetch(\n    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/s1szyoelhRqTHhs2c19P/comments?item_id=${itemId}`,\n    options,\n  );\n\n  const data = await response.json();\n  return data;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getComments);\n\n//# sourceURL=webpack://javascript-capston/./module/getComment.js?");

/***/ }),

/***/ "./module/getLikes.js":
/*!****************************!*\
  !*** ./module/getLikes.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/s1szyoelhRqTHhs2c19P/likes/';\nconst getLikes = async () => {\n  try {\n    const response = await fetch(url, {\n      method: 'GET',\n      dataType: 'json',\n      headers: {\n        'Content-type': 'application/json; charset=UTF-8',\n      },\n    });\n\n    if (!response.ok) {\n      throw new Error('Error getting like');\n    }\n\n    const data = await response.json();\n    return data;\n  } catch (error) {\n    console.error('Getting Like Error:', error);\n    throw error;\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getLikes);\n\n\n//# sourceURL=webpack://javascript-capston/./module/getLikes.js?");

/***/ }),

/***/ "./module/getMovie.js":
/*!****************************!*\
  !*** ./module/getMovie.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getMovie = async () => {\n  try {\n    const response = await fetch('https://api.tvmaze.com/shows');\n    if (response.status === 200) {\n      const data = await response.json();\n      const limitedData = data.slice(0, 16);\n      return limitedData;\n    }\n    throw new Error('Error while retrieving movies');\n  } catch (error) {\n    throw new Error('Error while retrieving movies', error);\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getMovie);\n\n\n//# sourceURL=webpack://javascript-capston/./module/getMovie.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/images.png */ \"./src/assets/images.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n  font-family: \"Courier New\", serif;\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  font-family: \"Courier New\", serif;\n  background-color: #3f2e3e;\n  color: white;\n}\n\nheader {\n  display: flex;\n  flex-direction: row;\n  padding: 35px 50px;\n  justify-content: center;\n  background-color: white;\n  border: 3px solid black;\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n  background-repeat: no-repeat;\n  background-size: 85px 85px;\n  background-position: 20% center;\n}\n\nheader span {\n  border: 2px solid yellowgreen;\n  padding: 6px 6px;\n  margin-right: auto;\n}\n\nheader span a {\n  text-decoration: none;\n  color: white;\n  font-family: \"Courier New\", Courier, monospace;\n}\n\nheader nav ul {\n  list-style: none;\n  display: flex;\n  flex-direction: row;\n  padding: 11px 0;\n  margin-left: 10%;\n}\n\nheader nav ul li {\n  padding: 0 40px;\n  margin-left: 20px;\n}\n\nheader nav ul li a {\n  text-decoration: none;\n  color: black;\n  font-family: \"Courier New\", Courier, monospace;\n  transition: 0.5s;\n}\n\nheader nav ul li a:hover {\n  color: rgb(84, 255, 5);\n}\n\nheader nav ul li:first-child a {\n  text-decoration: underline;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 600;\n}\n\nfooter {\n  margin-top: auto;\n  padding: 15px 15px;\n  color: black;\n  background-color: white;\n  text-align: center;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.movies-container {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-template-rows: repeat(4, 1fr);\n  gap: 20px;\n  justify-items: flex-start;\n}\n\n.model {\n  position: fixed;\n  top: 0;\n  left: 0;\n  opacity: 0.9;\n  z-index: 9999; /* Set a high z-index value to ensure it appears above everything */\n  width: 100vw;\n  height: 100vh;\n  background: #c1c7d0;\n}\n\n.cItems {\n  display: flex;\n  opacity: 1;\n  z-index: 1;\n  width: 40%;\n  height: 90%;\n  background: white;\n  border: 2px solid yellow;\n  justify-content: center;\n  align-items: center;\n  margin: auto;\n}\n\n.commentImg {\n  position: absolute;\n  width: 250px;\n  height: 300px;\n  margin-top: -30%;\n}\n\n.close {\n  position: absolute;\n  font-weight: bold;\n  z-index: 1;\n  font-size: 48px;\n  color: red;\n  margin-top: -43%;\n  margin-left: 37%;\n}\n\n.close:hover,\n.close:focus {\n  color: #000;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.itemSection {\n  display: flex;\n  flex-direction: column;\n  column-gap: 10px;\n  position: absolute;\n  width: auto;\n  color: #000;\n  margin-top: -7%;\n}\n\n.inptxt {\n  font-size: 20px;\n  width: 300px;\n  height: 25px;\n  border: 2px solid black;\n}\n\n.inpSect {\n  position: absolute;\n  margin-top: 12%;\n  margin-left: -8%;\n}\n\n.subBtn {\n  margin-left: 35%;\n  margin-top: 1%;\n  font-size: 20px;\n  width: 100px;\n  height: 30px;\n  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.5);\n}\n\n.movie {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n}\n\n.movie img {\n  width: 200px;\n  height: 300px;\n  max-width: 100%;\n}\n\n.heartCount {\n  display: flex;\n  justify-content: center;\n  column-gap: 5px;\n}\n\n.anc {\n  text-decoration: none;\n  font-size: large;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  color: black;\n}\n\n.dynCom {\n  position: absolute;\n  border: 2px solid blue;\n  max-height: 200px; /* Set the maximum height to control the visible area */\n  max-width: 500px;\n  overflow-y: auto; /* Add vertical scrollbar when content exceeds max-height */\n  margin-top: 10%;\n  color: black;\n}\n\ntable,\nth,\ntd {\n  border: 1px solid;\n}\n\n.sect {\n  display: flex;\n  flex-direction: column;\n  width: 45%;\n  height: 70px;\n  background-color: #8f658c;\n  border: 2px solid black;\n}\n\n.cards-con {\n  padding-top: 2%;\n  margin-bottom: 4%;\n}\n\n.cCount {\n  position: absolute;\n  max-width: 500px;\n  margin-bottom: 2%;\n  color: #000;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://javascript-capston/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://javascript-capston/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://javascript-capston/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://javascript-capston/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://javascript-capston/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://javascript-capston/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://javascript-capston/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://javascript-capston/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://javascript-capston/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://javascript-capston/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://javascript-capston/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _module_display_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../module/display.js */ \"./module/display.js\");\n\n\n\n(0,_module_display_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n\n//# sourceURL=webpack://javascript-capston/./src/index.js?");

/***/ }),

/***/ "./src/assets/images.png":
/*!*******************************!*\
  !*** ./src/assets/images.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"db3512b2a54687d55a16.png\";\n\n//# sourceURL=webpack://javascript-capston/./src/assets/images.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;