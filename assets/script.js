// Get username from localstorage, if no username then display "Guest"
let myName = localStorage.getItem("name");
if (myName) {
    document.getElementById("hello").innerText = myName;
} else {
    document.getElementById("hello").innerText = 'Guest';
}

// Register global variables accessible by all functions in game

let index = 0;
let formattedQuestions = [{
    question: 'What is color of grass?',
    answers: ['green', 'blue', 'red', 'black'],
    correctAnswer: 0
}];
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
    displayQuestion(index);
    // Fetch 10 questions from API from general knowledge category
    fetch("https://opentdb.com/api.php?amount=10&category=9")
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            console.log('ind', index)
            // displayQuestion(index);
        }).catch(() => {
            alert('Error getting data from OpenTDB API...')
        });

}

/** This function displays the questions by loading the Opentdb API content into the DOM. 
 * The index that is initiallized globally determines which question from array will be loaded.
 */
function displayQuestion(index) {
    document.getElementById("question-question").innerText =
        formattedQuestions[index].question;

    document.getElementById("answer-1").innerHTML =
        formattedQuestions[index].answers[0];
    document.getElementById("answer-2").innerHTML =
        formattedQuestions[index].answers[1];
    document.getElementById("answer-3").innerHTML =
        formattedQuestions[index].answers[2];
    document.getElementById("answer-4").innerHTML =
        formattedQuestions[index].answers[3];
}

/** This function checks the selected answer against the correct answer from loaded array of questions */
function checkAnswer() {

}

/** This is a utility function to transform the structure of the data coming from the API. This organises
 * correct answer and 3 incorrect answers into a single array, thus easier to iterate through and specify
 * indexs on.
 */
function formatData(){
    
}