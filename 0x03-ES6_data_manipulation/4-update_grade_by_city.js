/**
 studentsListObj:
 [
  { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
  { id: 2, firstName: 'James', location: 'Columbia' },
  { id: 5, firstName: 'Serena', location: 'San Francisco' }
]
newGrade:
  {
    studentId: 31,
    grade: 78,
  }
  city:
  "string"

  If a student doesn’t have grade in newGrades, the final grade should be N/A.
 */
export default function updateStudentGradeByCity(studentsListObj, city, newGrades) {
  const defaultGrade = 'N/A';
  // Validate the input parameters of the accepted types
  if (Array.isArray(studentsListObj) && typeof city === 'string' && typeof newGrades === 'object') {
    // get all the object filtered by the city
    // [
    //   { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    //   { id: 5, firstName: 'Serena', location: 'San Francisco' }
    // ]
    const cityStudents = studentsListObj.filter((obj) => {
      if (obj.location === city) {
        return true;
      }
      return false;
    });
    /* eslint-disable no-param-reassign */
    const result = cityStudents.map((cobj) => {
      for (const newGObj of newGrades) {
        if (cobj.id === newGObj.studentId) {
          cobj.grade = newGObj.grade;
        } else {
          cobj.grade = defaultGrade;
        }
      }
      return cobj;
    });
    /* eslint-enable no-param-reassign */
    return result;
  }
  return [];
}
