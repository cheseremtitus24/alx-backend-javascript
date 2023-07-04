/**
 *  returns an updated map for all items with initial quantity at 1.
 */
export default function updateUniqueItems(myMap) {
  // validate parameter input
  if (myMap instanceof Map) {
    for (const item of myMap) {
      if (item[1] === 1) {
        myMap.set(item[0], 100);
      }
    }
    return myMap;
  }

  throw TypeError('Parameter Input Must be a Map');
}
