//getElementById

// HTML: <h1 id="main-heading">Welcome to My Page</h1>
const headingElement = document.getElementById("main-heading");
console.log(headingElement.textContent); // Output: "Welcome to My Page"

//2. getElementsByClassName
// HTML: <span class="highlight">simple</span>
const highlightElements = document.getElementsByClassName("highlight");
console.log(highlightElements.length); // Output: 1
console.log(highlightElements[0].textContent); // Output: "simple"

//getElementsByTagName
// HTML: <p>This is a <span class="highlight">simple</span> paragraph.</p>
const paragraphs = document.getElementsByTagName("p");
console.log(paragraphs.length); // Output: 1
console.log(paragraphs[0].textContent); // Output: "This is a simple paragraph."
//
//querySelector
// HTML: <span class="highlight">simple</span>
const highlightElement = document.querySelector(".highlight");
console.log(highlightElement.textContent); // Output: "simple"

//querySelectorAll

// HTML: <span class="highlight">simple</span>
const elements = document.querySelectorAll(".highlight");
console.log(elements.length); // Output: 1
