export const isEmpty = (stringArrayOrObject) => {
  const type = typeof stringArrayOrObject

  if (type === 'string') {
    return stringArrayOrObject === ''
  }

  if (type === 'object' && Array.isArray(stringArrayOrObject) === false) {
    return Object.keys(stringArrayOrObject).length === 0
  }

  if (Array.isArray(stringArrayOrObject) === true) {
    return stringArrayOrObject.length === 0;
  }

  return false
}
