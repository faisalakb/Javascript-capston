// itemsCounter.test.js

const countItems = require('./itemsCounter');

describe('countItems function', () => {
  // Test case for an empty array
  it('should return 0 for an empty array', () => {
    const arr = [];
    const result = countItems(arr);
    expect(result).toBe(0);
  });

  // Test case for an array with elements
  it('should return the correct number of elements for a non-empty array', () => {
    const arr = [1, 2, 3, 4, 5];
    const result = countItems(arr);
    expect(result).toBe(arr.length);
  });

  // Test case for invalid input
  it('should throw an error if input is not an array', () => {
    const input = 'not_an_array';
    expect(() => countItems(input)).toThrow('Input should be an array.');
  });

  // Test case for edge case with a large array
  it('should handle edge case with a large array', () => {
    const largeArray = new Array(1000000).fill(0);
    const result = countItems(largeArray);
    expect(result).toBe(largeArray.length);
  });
});
