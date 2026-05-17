// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get references to DOM elements
    const changeColorBtn = document.getElementById('changeColorBtn');
    const counterText = document.getElementById('counter');
    let clickCount = 0;
    
    // Add click event listener to the button
    changeColorBtn.addEventListener('click', function() {
        // Generate a random background color
        const randomColor = getRandomColor();
        document.body.style.backgroundColor = randomColor;
        
        // Update the click counter
        clickCount++;
        counterText.textContent = `You've clicked the button ${clickCount} times.`;
    });
    
    // Function to generate a random hex color
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
