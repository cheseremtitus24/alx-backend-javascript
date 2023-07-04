export default function getListStudentIds(myArray) {
  const myMap = new Map();
  if (Array.isArray(myArray)) {
    // iterate over the list of objects and set the id as
    // key for the map
    for (const obj of myArray) {
      myMap.set(obj.id, obj);
    }
    // use of the splice operator
    return myMap.keys();
    // return Array.from(myMap.keys())
  }
  return [];
}
