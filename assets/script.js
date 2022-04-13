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
