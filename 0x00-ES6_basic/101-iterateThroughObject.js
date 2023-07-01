/**
 *
 * @param {*} reportWithIterator - [array of names]
 */
export default function iterateThroughObject(reportWithIterator) {
  // console.log(reportWithIterator);
  let myString = '';
  const mySeparator = ' | ';
  let condition = true;
  for (const item of reportWithIterator) {
    if (condition) {
      myString += item;
      condition = false;
    } else {
      myString += mySeparator + item;
    }
  }
  return myString;
}
