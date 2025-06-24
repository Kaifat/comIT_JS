// ==============================
// JavaScript Homework: Student Data Processor
// ==============================

// Starter data: list of students and their grades
const students = [
  { name: "Alice", grade: 85 },
  { name: "Bob", grade: 58 },
  { name: "Charlie", grade: 95 },
  { name: "David", grade: 45 },
  { name: "Eva", grade: 72 },
];



// =========================================
// Task 1: Create a new array of strings in this format:
// "Alice: 85", "Bob: 58", etc.
// Display the result in the console
// =========================================

const task1Result = students.map(student => student.name + ": " + student.grade);
console.log(task1Result);



// =========================================
// Task 2: Create a new array that only includes the students
// who passed (grade is 60 or higher)
// Display the result in the console
// =========================================

const task2Result =
  students
    .filter(student => student.grade >= 60)
    .map(student => student.name + ": " + student.grade);
console.log(task2Result);



// =========================================
// Task 3: Calculate the average grade of the class
// Round the result to 2 decimal places
// Display the result in the console
// =========================================

const total = students.reduce((sum, student) => sum + student.grade, 0);
const average = (total / students.length).toFixed(2);
console.log("Average grade: " + average);



// =========================================
// Task 4: Loop through the students and log:
// "<name> passed" if grade >= 60
// "<name> failed" if grade < 60
// Display the result in the console
// =========================================

for (const student of students) {
  if (student.grade >= 60) {
    console.log(student.name + " passed");
  } else {
    console.log(student.name + " failed");
  }
}



// =========================================
// Task 5: Print each student’s name one by one using a loop
// Display the result in the console
// =========================================

let studentsNames = "";

for (let i = 0; i < students.length; i++) {
  studentsNames += students[i].name;
  if (i < students.length - 1) {
    studentsNames += ", ";
  }
}

console.log("All students' names: " + studentsNames);



// =========================================
// Bonus Task: Create a function that returns the student
// with the highest grade
// Display the result in the console
// =========================================

function getTopStudent(students) {
  let topStudent = students[0];

  for (const student of students) {
    if (student.grade > topStudent.grade) {
      topStudent = student;
    }
  }

  return topStudent;
}

const bestStudent = getTopStudent(students);
console.log(`Top student is ${bestStudent.name} with grade ${bestStudent.grade}`);



// =========================================
// In-Place Task 1: Add a new property to each student called "status"
// It should be set to "pass" or "fail" based on the grade
// Modify the original students array directly
// Display the modified students array in the console
// =========================================

let inPlaceTask1Students = students.map(student => ({ ...student }));

for (const student of inPlaceTask1Students) {
  student.status = student.grade >= 60 ? "pass" : "fail";
}

console.log(inPlaceTask1Students);



// =========================================
// In-Place Task 2: Curve the grades by adding 5 points to each student's grade
// Make sure no grade goes over 100
// Modify the original students array directly
// Display the modified students array in the console
// =========================================

let inPlaceTask2Students = students.map(student => ({ ...student }));

for (const student of inPlaceTask2Students) {
  student.grade = Math.min(student.grade + 5, 100);
}

console.log(inPlaceTask2Students);