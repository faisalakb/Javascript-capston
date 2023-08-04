import comCount from '../countComments.js';

/* eslint-disable global-require */
jest.mock('../getComment', () => jest.fn());

const commentDataWithComments = [
  { comment: 'This is a comment' },
  { comment: 'Another comment' },
];
const commentDataWithoutComments = [{ comment: '' }];

describe('comCount', () => {
  it('should return 2 when there are comments', async () => {
    const getComments = require('../getComment.js');
    getComments.mockResolvedValue(commentDataWithComments);

    const result = await comCount('sampleMid');

    expect(result).toBe(2);
  });

  it('should return 0 when there are no comments', async () => {
    const getComments = require('../getComment.js');
    getComments.mockResolvedValue(commentDataWithoutComments);

    const result = await comCount('sampleMid');

    expect(result).toBe(0);
  });

  it('should return 0 when getComments returns an empty array', async () => {
    const getComments = require('../getComment.js');
    getComments.mockResolvedValue([]);

    const result = await comCount('sampleMid');

    expect(result).toBe(0);
  });

  it('should return 0 when getComments returns null', async () => {
    const getComments = require('../getComment.js');
    getComments.mockResolvedValue(null);

    const result = await comCount('sampleMid');

    expect(result).toBe(0);
  });
});
/* eslint-enable global-require */