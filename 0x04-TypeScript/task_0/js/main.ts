interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string
}

const student: Student = {
    firstName:  "Tom",
    lastName: "Sawyer",
    age: 22,
    location: "Marina Bay" 
  };

const student2: Student = {
    firstName:  "Jane",
    lastName: "Summer",
    age: 24,
    location: "Georgia" 
  };

  let StudentList: Array<Student> = [student, student2]
let row;
let cell1;
let cell2;
let cell3;
let counter: number = 0
const table = document.createElement('table')
for (let arr of StudentList) {
  row = table.insertRow(counter++);
  cell1 = row.insertCell(0);
  cell2 = row.insertCell(1);
  cell3 = row.insertCell(2);
  cell1.innerHTML = arr.firstName;
  cell2.innerHTML = arr.lastName ;
  cell3.innerHTML = arr.location;


}

document.body.appendChild(table)
  console.log(StudentList)
  
