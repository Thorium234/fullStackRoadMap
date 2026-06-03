const person = {
   name: "Kelly Hu",
   age: 27,
   display: function() {
      console.log("Hello, " + this.name);
   }
};

console.log(person.name);  // Access property
person.display();    
