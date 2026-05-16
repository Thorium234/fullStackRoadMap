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
console.log(birds[1] );
//
//arrays canalso have mix of values like this 
//
let mixedArray=['books','toilet',10,20.56];
//you can also assign new value to a specific index using the assignment operators
mixedArray[3]=56;
console.log(mixedArray[3]);
//
//special methods for array manipulation
//use push() method to add an item to the end of the arrays
//
let materials=['ugenya','ugunja'];
materials.push('ekero');
console.log(materials);
//
//use pop() to remove an item from the end of an array:
//
materials.pop();
console.log(materials);
//
//
//the unshift() method can be used to add an item from the front of index 0:
//
let fishes=['salmon','goldfish','tuna'];
fishes.unshift('sardine');
console.log(fishes);
//
// the shift() method is used to find or return the index of an item in the array
    //
let fashon=['tetema','daymond','rayvan'];
fashon.shift();
console.log(fashon)//[daymond,rayvan]
//
//
//the indexOf() method can be used to find and return the index of an item in the array.
//the method returns -1 when an item isnt found inside the array
////
//
let pos= fashon.indexOf('daymond');
console.log(pos);
//
//to get the size of an array you access the length property 
//
console.log(fashon.length)//2

//Exercise #4
//create an array named colors that includes a red,green and blue colors 
//first add a black color after the last index of the array then print the array
//next move the value of red and swap the position of greem and blue print the array.
//finally add the co;or yellow on the first index of the array then print the array 
//
//the result output is as follows:
//[red,green, blue, black]
//[blue,green,black]
//[yellow,blue,green,black]
//
//attempts
//
let colors=['red','green','blue'];
colors.push('black');
console.log(colors);
colors.shift();
console.log(colors);
colors.unshift('yellow');
console.log(colors);

//
//control flows(if-else,switch,loops)
//
// if else statements
//
let age1 = 85;
if (age1 >= 90){
console.log("you are an adult");
}
else if(age1 <=80){
console.log("you are a minor junior");
}

else{
console.log("you can grow");
}
//
//switch statements 
//
let day = 9;
switch(day){
    case 1:
        console.log("monday");
        break;
    case 2:
        console.log("tuesday");
        break;
    case 3:
        console.log("wensday");
        break;
    case 4:
        console.log("thursday");
        break;
    case 5 :
        console.log("friday");
        break;
    case 6:
        console.log("saturday");
        break;
    case 7:
        console.log("sunday");
        break;

    default:
        console.log("enjoy the day");
}

//
//Loops
//
//for loops
//
for (let i=0;i<5;i++){
    console.log(i)//output: 0,1,2,3,4
}

//
//while loops
//
let count = 0;
while(count <3){
console.log(count);
    count++;
}//output:0,1,2,3

//
//do-while loops
//
let v = 0;
do{
console.log(v);
    v++
}while(v<3);//output: 0,1,2

//
//while loop 
//
let i = 0;
while (i<5){
console.log("iteration",i);
    i++;
}

//
//for loop 
//
for (let j = 1; j<=3;j++){
console.log("looping",j);
}

//
//
//functions
//are reusable block of code designed to perform specific tast
//
function greet(name){
// name is a parameter
console.log("hello"+name);

}
greet("thorium");
//
//parametr is a placeholder inside a function
//argument is a real value given at call time
//
function add(a,b){
return a+b; // returns the sum 
}
let result = add(5, 9);
console.log(result);
//
//
//arrow function
//=> they are shoter and do have their own binding which makes the useful for some cases
//
const square = n => n*n;
console.log(square(4));
//
//
//constructor function 
//a special type of function used to create multiple objects with the same structure
//
function Person(Name1, Age1){
this.Name1;
    this.Age1;
}
const user = new Person("thor", 32);
console.log(user.Name1);

//
//
//Async function
//they return a promise and you can use await inside them to paise until another promise resolves
//
async function fetchData(){
return "data fetched";
}
fetchData().then(console.log);
