export const hashtags = (text) => {
  let resultArr = [];
  let wordArr = text.split(' ');
  for (let entry of wordArr) {
    if (entry.includes('#')) {
      resultArr.push(entry);
    }
  }
  return resultArr;
}
