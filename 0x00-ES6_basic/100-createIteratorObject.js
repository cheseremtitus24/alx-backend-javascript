export default function createIteratorObject(report) {
  const empArray = Object.values(report.allEmployees);

  return [].concat(...empArray);
}
