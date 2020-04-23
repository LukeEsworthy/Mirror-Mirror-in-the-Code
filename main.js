let inputBox = document.getElementById("message");
let outputBox = document.getElementById("articleTwo");
function displayInputMessage(event) {
  console.log(event);
  outputBox.textContent = event.target.value;
}
inputBox.addEventListener("keyup", displayInputMessage);
