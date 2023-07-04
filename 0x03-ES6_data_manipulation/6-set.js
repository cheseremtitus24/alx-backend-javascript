export default function setFromArray(myArray) {
  if (Array.isArray(myArray)) {
    return new Set(myArray);
  }

  throw TypeError('Parameter must be an Array of Any Type');
}
