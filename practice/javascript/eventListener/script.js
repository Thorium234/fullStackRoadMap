let username = document.getElementById('username').toLowercase();
let password = document.getElementById('password').toLowercase();
const value = input.value.trim(); // Reads value and removes whitespace
const btn = document.getElementById('Login');
        btn.addEventListener('click', function() {
            if (value === "" || value === null) {
        alert("This field is required!");
        input.focus(); // Sends the user back to the field
        return false;  // Prevents form submission
        }
            else if (username.value === 'admin' && password.value === 'admin') {
                alert('Login successful!');
            } else {
                alert('Invalid username or password. Please try again.');
            }
        });

        

