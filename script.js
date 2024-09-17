let text = document.getElementById("quote")
text.innerText = "it's very intrested"


//const BackgroundColor = 'red';
const infoBoxes = document.querySelectorAll(".info-box");
infoBoxes.forEach(function(element) {
    element.style.backgroundColor = `red`;
});
let liitem = document.getElementsByTagName("li")
liitem[2].innerText = "Apple"

const footerSpan = document.querySelector('footer span');

// Check if the span exists to avoid errors
if (footerSpan) {
    // Append the message to the existing content of the span
    footerSpan.textContent += ' Have a great day';
} else {
    console.error('Span element inside footer not found.');
}