function divideNumbers(num1, num2) {
   try {
      if (num2 === 0) {
         throw new Error("Cannot divide by zero!");
      }
      const result = num1 / num2;
      console.log(`Result: ${result}`);
   } catch (error) {
      console.error("Error:", error.message);
   } finally {
      console.log("Execution completed.");
   }
}

// Calling 
divideNumbers(10, 2);
divideNumbers(10, 0);
