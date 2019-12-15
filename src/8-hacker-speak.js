
export const hackerSpeak = (words) => {
  let replacerObject = {
    4: /a/gi,
    3: /e/gi,
    1: /i/gi,
    0: /o/gi,
    5: /s/gi
  }
  for (let [key, value] of Object.entries(replacerObject)) {
    words = words.replace(value, key);
  }

  return words
}