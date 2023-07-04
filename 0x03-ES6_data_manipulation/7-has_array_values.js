/**
 *
 * @param {*} mySet
 * @param {*} myArray
 * @returns: boolean (true/false)
 */
export default function hasValuesFromArray(mySet, myArray) {
  // validate user input
  if (!Array.isArray(myArray)) {
    throw TypeError('Param2 must be an Array');
  }

  const result = myArray.map((arrItem) => {
    if (!mySet.has(arrItem)) {
      return false;
    }
    return true;
  });
  const finalResult = new Set(result);
  if (finalResult.has(false)) {
    return false;
  }

  return true;
}
