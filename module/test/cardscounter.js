const cardscounter = (cards) => {
  const cardNum = document.getElementById('cardNum');

  if (cards.length === 0) {
    cardNum.innerHTML = 'Shows(0)';
    return 0;
  }

  const num = cards.length;
  cardNum.innerHTML = `Shows(${num})`;
  return num;
};

module.exports = cardscounter;
