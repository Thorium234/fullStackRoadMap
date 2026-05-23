//the map method
var myArray = [1, 2, 3, 4, 5];
var multipliedArray = myArray.map(function(element) {
    return element * 2;
});
console.log(multipliedArray); // [2, 4, 6, 8, 10]
//real world example
let users = [
  { name: "Abhinav", age: 22 },
  { name: "Priya", age: 25 },
  { name: "Rahul", age: 28 }
];

let names = users.map(user => user.name);
console.log(names); // ["Abhinav", "Priya", "Rahul"]
/*
The filter() Method

The filter method is used to filter an array based on a certain condition. The filter method takes a callback function as its argument, which is called on each element in the array. If the function returns true, the element is included in the new filtered array.

For example, the following code will return an array of all even numbers in the original array:*/
var myArray = [1, 2, 3, 4, 5];
var evenNumbers = myArray.filter(function(element) {
    return element % 2 === 0;
});
console.log(evenNumbers); // [2, 4]

//Real-World Example Suppose you want to filter users who are adults (age 18 and above):

let users1 = [
  { name: "Abhinav", age: 17 },
  { name: "Riya", age: 20 },
  { name: "Karan", age: 25 }
];

let adults = users.filter(user => user.age >= 18);
console.log(adults);
// Output: [{ name: "Riya", age: 20 }, { name: "Karan", age: 25 }]
/*
The reduce() Method

The reduce method is used to reduce an array to a single value. The reduce method takes a callback function as its argument, which is called on each element in the array. The callback function takes two arguments, the accumulator and the current element, and returns the new value for the accumulator.

For example, the following code will return the sum of all elements in the array:
*/

var myArray = [1, 2, 3, 4, 5];
var sum = myArray.reduce(function(acc, cur) {
    return acc + cur;
}, 0);
console.log(sum); // 15

/*
Chaining map(), filter(), and reduce()

The real magic happens when you combine these methods together — they can be chained for concise and powerful transformations.

Example: Process Data in One Go
*/

let numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// Step 1: Double each number
// Step 2: Keep only numbers greater than 10
// Step 3: Find the total sum
let result = numbers
  .map(num => num * 2)
  .filter(num => num > 10)
  .reduce((sum, num) => sum + num, 0);

console.log(result); // 54
