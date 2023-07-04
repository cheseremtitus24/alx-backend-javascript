import getStudentsByLocation from './2-get_students_by_loc';
// utilizes filter function
import getListStudentIds from './1-get_list_student_ids';
// utilizes map to get list of student ids.

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
    const cityStudents = getStudentsByLocation(studentsListObj, city);
    const cityStudIds = getListStudentIds(cityStudents);
    // filter by grade student ID
    let count = 0;
    for (const stud of cityStudIds) {
      for (const sGrade of newGrades) {
        if (sGrade.studentId === stud) {
          cityStudents[count].grade = sGrade.grade;
        } else {
          cityStudents[count].grade = defaultGrade;
        }
      }
      count += 1;
    }
    return cityStudents;
  }
  return [];
}
