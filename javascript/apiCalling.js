function fetchDataWithPromises() {
    fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(user => {
            console.log('User data:', user);
            return fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`);
        })
        .then(response => response.json())
        .then(posts => {
            console.log('User posts:', posts);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}
