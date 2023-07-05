/**
 *  returns a string of all the
 * set values that start with a specific string (startString).
 * @param {*} set
 * @param {*} startString
 */
/* eslint-disable */
export default function cleanSet(set, startString) {
  let loopFlag = true;
  const toArray = [...set];
  const result = toArray.filter((obj) => {
    if (obj.startsWith(startString)) {
      return true;
    }
    return false;
  });
  const revString = result.map((item) => {
    if (item.startsWith(startString) && startString.length > 0) {
      if (loopFlag) {
        // console.log(item.replace(startString, ''));
        loopFlag = false;
        return item.replace(startString, '');
      }
      // console.log(item.replace(startString, 'ferret'));
      return item.replace(startString, '-');
    }
  });
let tmp = new Set(revString)
let final = []
for (let item of Array.from(tmp))
{
  try{
     if (item.length > 0){
final.push(item)
  }
  }
  catch (e){
    
  }
 
}
  
  return final.join('');
}
