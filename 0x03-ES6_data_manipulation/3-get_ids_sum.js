import getListStudentIds from './1-get_list_student_ids';

function reducer(accumulator, currentValue) {
  const returns = accumulator + currentValue;
  return returns;
}
export default function getStudentIdsSum(students) {
  if (!Array.isArray(students)) {
    return 0;
  }
  const studIds = getListStudentIds(students);
  return studIds.reduce(reducer);
}
