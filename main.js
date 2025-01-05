// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

document.addEventListener("DOMContentLoaded", () => {
  // Create the modal element
  const modal = document.createElement("div");
  modal.id = "modal"; // Ensure it matches the test's expectations
  modal.style.display = "none"; // Ensure it is hidden
  modal.textContent = "This is a hidden modal."; // Optional content

  // Append the modal to the body
  document.body.appendChild(modal);
});






//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
