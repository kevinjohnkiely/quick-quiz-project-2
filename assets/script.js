// Get username from localstorage, if no username then display "Guest"
let myName = localStorage.getItem("name");
if(myName) {
    document.getElementById("hello").innerText = myName;
} else {
    document.getElementById("hello").innerText = 'Guest';
}

// Register global variables accessible by all functions in game
let formattedQuestions = [];
let index = 0;
let correctAnswers = [];
let wrongAnswers = [];

/** This function loads all event listeners after the DOM content has loaded,
 *  and calls the initGame function to load the questions from the API.
 */
document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByClassName("question-button");

    for (let button of buttons) {
      button.addEventListener("click", function () {
        let answer = this.getAttribute("data-type");
        // check answers
      });
    }
})
