/**
 *
 * @param {*} getListStudents
 * [
  { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
  { id: 2, firstName: 'James', location: 'Columbia' },
  { id: 5, firstName: 'Serena', location: 'San Francisco' }
* ]
 * @param {*} city
 */
export default function getStudentsByLocation(getListStudents, city) {
  if (!Array.isArray(getListStudents || typeof city !== 'string')) {
    return [];
  }
  const result = getListStudents.filter((obj) => {
    if (obj.location === city) {
      return true;
    }
    return false;
  });

  return result;
}
