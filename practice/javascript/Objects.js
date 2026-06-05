//create object called person with one property set to false so we can change it later
const person = {
isHuman: false,
myDetais: function() {//myDetails is a function that will print all of the details
console.log(`My full name is ${this.name} ${this.lastName}. Am I human? ${this.isHuman}`);
}
};
//create a rick object using the Object.create but as an argument we pass the person object
const rick = Object.create(person);
rick.name = 'Rick'; // "name" is a property set on "rick", but not on "person" object
rick.lastName = 'Sekuloski'; // "lastName" is a property set on "rick", but not on "person" object
rick.isHuman = true; // Well isHuman is one inherited property from person object and can be overwritten by giving it new value
rick.myDetais();
// expected output: "My name is Rick Sekuloski. Am I human? true"
