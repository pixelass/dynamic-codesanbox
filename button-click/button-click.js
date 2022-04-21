const button1 = document.querySelector(".button-1");
// Something is not right in the next line:
const button2 = document.querySelector("button-2");

button1.addEventListener("click", logButton1Click);

// TODO: Add another click event listener for button-2

function logButton1Click() {
  console.log("Button 1 was clicked!");
}
