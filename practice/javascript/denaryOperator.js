let age = 20;

let message = age < 18 
   ? "You are a minor." 
   : age >= 18 && age < 65 
   ? "You are an adult." 
   : "You are a senior citizen.";

console.log(message);
