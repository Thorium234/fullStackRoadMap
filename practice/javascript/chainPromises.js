function fetchUserData(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ id: userId, name: "John Doe" });
        }, 1000);
    });
}

function fetchUserPosts(user) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                { title: "Post 1", author: user.name },
                { title: "Post 2", author: user.name }
            ]);
        }, 1000);
    });
}

// Chaining Promises
fetchUserData(123)
    .then((user) => {
        console.log("User:", user);
        return fetchUserPosts(user);
    })
    .then((posts) => {
        console.log("Posts:", posts);
    })
    .catch((error) => {
        console.log("Error:", error);
    });
