const cardscounter = (cards) => {
    const cardNum = document.querySelector('#cardNum');
    cardNum.innerHTML = `Shows(${cards.length})`;
  };
  
  module.exports = cardscounter;
  