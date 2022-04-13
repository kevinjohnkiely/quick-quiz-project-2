// Get username from localstorage, if no username then display "Guest"
let myName = localStorage.getItem("name");
if (myName) {
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

    // Initialize game call
    initGame()
})

/** This function initializes the game and populates the 10 questions from the Opentdb API */
function initGame() {
    // Pre populates DOM with loading message while waiting for data from API
    document.getElementById("question-question").innerText = 'Loading Question 1...';

    // Fetch 10 questions from API from general knowledge category
    fetch("https://opentdb.com/api.php?amount=10&category=9")
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
        }).catch(() => {
            alert('Error getting data from OpenTDB API...')
        });

}

/** This function displays the questions by loading the Opentdb API content into the DOM */
function displayQuestion() {

}

/** This function checks the selected answer against the correct answer from loaded array of questions */
function checkAnswer() {

}