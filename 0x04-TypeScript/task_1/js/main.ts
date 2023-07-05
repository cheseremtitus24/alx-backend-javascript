class Teacher {
    private firstName: string;
    private lastName: string;
    fullTimeEmployee: boolean;
    location: string;
    contract: boolean;
    yearsOfExperience: number;

    public constructor(firstName: string, fullTimeEmployee: boolean, lastName: string, location: string, contract?: boolean, yearsOfExperience?: number) {
        this.firstName = firstName;
        this.fullTimeEmployee = fullTimeEmployee;
        this.lastName = lastName;
        this.location = location;
        this.contract = contract;
        yearsOfExperience = yearsOfExperience;

    }

}

interface Directors extends Teacher {
    numberOfReports: number
}


const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
};
console.log(teacher3);

const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};

console.log(director1);

function printTeacher(  firstName: string, lastName: string):string{

    return `${firstName.at(0)}. ${lastName}`

}
console.log(printTeacher("John", "Doe"))