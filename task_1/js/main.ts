interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
  }
  
  const teacher1: Teacher = {
    firstName: "John",
    lastName: "Doe",
    fullTimeEmployee: true,
    location: "New York",
    contract: false,
  };

const teacher2: Teacher = {
    firstName: "Jane",
    lastName: "Smith",
    fullTimeEmployee: false,
    location: "Los Angeles",
    yearsOfExperience: 5,
    contract: true,
};
interface Directors extends Teacher {
    numberOfReports: number;
}

const director: Directors = {
    firstName: "Alice",
    lastName: "Johnson",
    fullTimeEmployee: true,
    location: "San Francisco",
    numberOfReports: 10,
    contract: true,
};

console.log(director);
console.log(teacher1);
console.log(teacher2);

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
    return `${firstName.charAt(0)}. ${lastName}`;
};

console.log(printTeacher("John", "Doe"));
console.log(printTeacher("Alice", "Smith"));


//Student Class
interface StudentConstructor {
    new (firstName: string, lastName: string): StudentInterface;
}

interface StudentInterface {
    firstName: string;
    lastName: string;
    workOnHomework(): string;
    displayName(): string;
}

class StudentClass implements StudentInterface {
    firstName: string;
    lastName: string;

constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
}

workOnHomework(): string {
    return "Currently working";
}

displayName(): string {
    return this.firstName;
}
}

const student = new StudentClass("John", "Doe");
console.log(student.displayName()); 
console.log(student.workOnHomework());


// Extending the teacher class
