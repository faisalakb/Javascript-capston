// itemsCounter.js

const countItems = (arr) => {
    if (!Array.isArray(arr)) {
      throw new Error('Input should be an array.');
    }
  
    return arr.length;
  };
  
  module.exports = countItems;
  