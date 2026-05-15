console.log("hello world");
//this is a comment
//
//exercise #1
//try to print your name,age and ocupation on the console
//
console.log("thorium234");
console.log(24);
console.log("student");

//javascript variables
//
let message = "hello world"
console.log(message)

//variables naming
//1. camelCase
//2. snake_case
//
//constant variables
//a constant is a variable that doesent change its value as long as  is runing
//
const FILE_SIZE_LIMIT= 5000
//
//
//Exercise #2
//write a program with three variables
//
let name="thorium234"
let age = 24
let occupation = "student"

console.log("my name is "+ name + "" +""+ age+""+ occupation);
//basic datatypes
//strings, numbers booleans null undefined
//
//1. Strings and joineries
//
let message_2 = "hello"+ "and" +"goodbye";
console.log(message_2)
//template strings
//
let name_2 = "thorium";
let topic = "javascript";

console.log(`${name_2}is learning ${topic} today`);
//
//numbers integers and floats
//
let x=1;
let y=2;
console.log(x+y);
//floats
//
let f=1.2;
let z=2.34;
console.log(f+z);

//booleans in javascript represents true and false values
//
let on = true;
let off = false;

//frequently used type conversions
//Number()
//String()
//Boolean()
//
let x_1= "7";
let y_1=5;
//convert x to integer
//
x_2 = Number(x_1);

console.log(x_2+y_1);

//
//operators in js as the name implies, operators are symbolys you can use to perform operations on your datatypes
//
console.log(10-3);//7
console.log(2+4);//6

//
//
//10_js_arrays
//an array is an object datatype that can be used to hold more that one value 
//
//to create an array you need to use that square brackets [] and separate the items using a comma.
//example of list of strings
let birds=["owl","egle","parrot"];
birds.push("falcon");
birds.pop();
console.log(birds);
