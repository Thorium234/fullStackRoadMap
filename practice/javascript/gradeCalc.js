function getGrade(score) {
  if (score >= 90) return "A";
  else if (score >= 75) return "B";
  else if (score >= 60) return "C";
  else if (score >= 40) return "D";
  else return "F";
}
console.log("Grade:", getGrade(72));
