export default function appendToEachArrayValue(array, appendString) {
  let count = 0;
  /* eslint-disable no-param-reassign */
  for (const idx of array) {
    array[count] = appendString + idx;
    count += 1;
  }
  /* eslint-enable no-param-reassign */
  return array;
}
