/**
 *  returns a string of all the
 * set values that start with a specific string (startString).
 * @param {*} set
 * @param {*} startString
 */
export default function cleanSet(set, startString) {
  let loopFlag = true;
  let retString = String();
  for (const item of set) {
    if (item.startsWith(startString) && startString.length > 0) {
      if (loopFlag) {
        // console.log(item.replace(startString, ''));
        loopFlag = false;
        retString += item.replace(startString, '');
      } else {
        // console.log(item.replace(startString, 'ferret'));
        retString += item.replace(startString, '-');
      }
    }
  }
  return retString;
}
