// Visit counter
let visits = localStorage.getItem("visits");

if (!visits) {
  visits = 1;
} else {
  visits = parseInt(visits) + 1;
}

localStorage.setItem("visits", visits);

document.getElementById("visit-counter").innerHTML = 
  ` visited this site ${visits} time(s).`;

