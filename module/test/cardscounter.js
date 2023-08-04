const cardscounter = (cards) => {
  const cardNum = document.getElementById('cardNum');

  if (!Array.isArray(cards) || cards.length === 0) {
    cardNum.innerHTML = 'Shows(0)';
    return 0;
  }

  const uniqueCards = new Set(cards.map((card) => JSON.stringify(card)));
  const num = uniqueCards.size;
  cardNum.innerHTML = `Shows(${num})`;
  return num;
};

module.exports = cardscounter;
