console.log("First");

setTimeout(() => {
    console.log("Second (after 2 seconds)");
}, 2000);

console.log("Third");

// Output:
// First
// Third
// Second (after 2 seconds)
