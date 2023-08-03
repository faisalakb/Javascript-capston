import getComments from './getComment';

const comCount = async (mid) => {
  console.log('Getting from countComments');
  const commentData = await getComments(mid);
  let count = 0;
  if (Array.isArray(commentData)) {
    // Loop through each comment and create rows in the table

    commentData.forEach((element) => {
      const len = element.comment;
      if (len.length) {
        count += 1;
      } else {
        // do nothing
      }
    });
  }

  return count;
};

export default comCount;