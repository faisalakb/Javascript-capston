const cardscounter = require('./cardscounter');

test('should update the innerHTML of #cardNum with the correct number of cards', () => {
  // Arrange
  document.body.innerHTML = '<div id="cardNum"></div>';
  const cards = [
    { title: 'Card 1' },
    { title: 'Card 2' },
    { title: 'Card 3' },
  ];

  // Act
  cardscounter(cards);

  // Assert
  expect(document.querySelector('#cardNum').innerHTML).toBe('Shows(3)');
});

test('should return 0 when there are 0 items on the page', () => {
  // Arrange
  document.body.innerHTML = '<div id="cardNum"></div>';
  const cards = [];

  // Act
  const result = cardscounter(cards);

  // Assert
  expect(result).toBe(0);
  expect(document.querySelector('#cardNum').innerHTML).toBe('Shows(0)');
});
