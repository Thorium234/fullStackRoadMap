// Creating a Promise
const myPromise = new Promise((resolve, reject) => {
    // Simulate an asynchronous operation
    setTimeout(() => {
        const success = true;

        if (success) {
            resolve("Operation completed successfully!");
        } else {
            reject("Operation failed!");
        }
    }, 2000);
});

// Using the Promise
myPromise
    .then((result) => {
        console.log(result); // "Operation completed successfully!"
    })
    .catch((error) => {
        console.log(error);
    });
