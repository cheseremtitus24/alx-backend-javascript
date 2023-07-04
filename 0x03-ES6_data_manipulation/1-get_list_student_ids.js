export default function getListStudentIds(myArray) {
  if (Array.isArray(myArray)) {
    const result = myArray.map(
      (obj) => obj.id,
    );
    return result;
  }
  return [];
}
