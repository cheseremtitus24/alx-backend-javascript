export default function createReportObject(employeesList) {
  return {
    allEmployees: employeesList,
    getNumberOfDepartments(value) {
      return Object.keys(value).length;
    },
  };
}
