// Tested code before going through the exercise with instructor:
// let inputBox = document.getElementById("message");
// let outputBox = document.querySelectorAll(".article-box");
// function displayInputMessage(event) {
//   console.log(event);
//   outputBox.textContent = event.target.value;
// }
// inputBox.addEventListener("keyup", displayInputMessage);

document.querySelector("#message").addEventListener("keyup", function (event) {
  let boxes = document.querySelectorAll(".article-box");
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].innerHTML = event.target.value;
  }
});
