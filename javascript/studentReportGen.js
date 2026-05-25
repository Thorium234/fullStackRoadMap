const students = [
  { name: "Ali", score: 85 },
  { name: "Sara", score: 42 },
  { name: "John", score: 67 }
];
function generateReport(list) {
  list.forEach(student => {
    const result = student.score >= 50 ? "Pass" : "Fail";
    console.log(`${student.name} - ${result}`);
  });
}
generateReport(students);
