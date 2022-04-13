// Get username from localstorage, if no username then display "Guest"
let myName = localStorage.getItem("name");
if (myName) {
    document.getElementById("hello").innerText = myName;
} else {
    document.getElementById("hello").innerText = 'Guest';
}

// Register global variables accessible by all functions in game

let index = 0;
let formattedQuestions = [];
let correctAnswers = [];
let wrongAnswers = [];

/** This function loads all event listeners after the DOM content has loaded,
 *  and calls the initGame function to load the questions from the API.
 */
document.addEventListener("DOMContentLoaded", function () {
    // EventListeners for question buttons
    let buttons = document.getElementsByClassName("question-button");
    for (let button of buttons) {
        button.addEventListener("click", function () {
            let answer = this.getAttribute("data-type");
            checkAnswer(answer)
        });
    }

    // EventListener for restart game button
    document.getElementById("start-over").addEventListener('click', function () {
        window.location.href = 'index.html'
    })

    // EventListener for load next question button
    document.getElementById("next").addEventListener("click", function () {
        if (index < 9) {
            index++;
            displayQuestion(index);
        } else {
            alert('game finished!')
        }
    });

    // Initialize game call
    initGame()
})

/** This function initializes the game and populates the 10 questions from the Opentdb API */
function initGame() {
    // Pre populates DOM with loading message while waiting for data from API
    document.getElementById("question-question").innerText = 'Loading Question 1...';
    // displayQuestion(index);
    // Fetch 10 questions from API from general knowledge category
    fetch("https://opentdb.com/api.php?amount=10&category=9&type=multiple")
        .then((response) => response.json())
        .then((data) => {
            formatData(data.results)

            console.log(formattedQuestions)

            displayQuestion(index);

        }).catch(() => {
            alert('Error getting data from OpenTDB API...')
        });

}

/** This function displays the questions by loading the Opentdb API content into the DOM. 
 * The index that is initiallized globally determines which question from array will be loaded.
 */
function displayQuestion(index) {
    document.getElementById("question-number").innerText = index + 1
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

    if (index === 9) {
        document.getElementById("next").innerHTML = 'Get Result'
    }
}

/** This function checks the selected answer against the correct answer from loaded array of questions */
function checkAnswer(ans) {
    if (parseInt(ans) === formattedQuestions[index].correctAnswer) {
        alert("YESSSS!");
    } else {
        alert("Wrong answer!")
    }
}

/** This is a utility function to transform the structure of the data coming from the API. This organises
 * correct answer and 3 incorrect answers into a single array, thus easier to iterate through and specify
 * indexs on.
 */
function formatData(data) {
    for (let question of data) {
        let rand = Math.floor(Math.random() * 4);
        // console.log(rand)
        let newObj = {
            question: question.question,
            answers: question.incorrect_answers,
        };

        // insert correct answer in answers array at correct index
        newObj.answers.splice(rand, 0, question.correct_answer);

        newObj.correctAnswer = rand;
        // console.log("objjj", newObj);
        formattedQuestions.push(newObj);

    }
}