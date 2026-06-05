function validateAge(age) {
  if (typeof age !== "number" || age <= 0 || age > 120) {
    return "Invalid age";
  } else {
    return age; //  Age is good to go!
  }
}

console.log(validateAge(25)); //  Output: 25 (valid!)
console.log(validateAge("twenty")); //  Output: Invalid age (not a number)
console.log(validateAge(-5)); //  Output: Invalid age (negative)
