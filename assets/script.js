// Get username from localstorage, if no username (user navigates directly to game.html page) then display "Guest"
let myName = localStorage.getItem("name");
if (myName) {
  document.getElementById("hello").innerText = myName;
} else {
  document.getElementById("hello").innerText = "Guest";
}

// Register global variables accessible by all functions in game, index controls the game iteration
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
      checkAnswer(answer);
    });
  }

  // EventListener for restart game button
  document.getElementById("start-over").addEventListener("click", function () {
    window.location.href = "index.html";
  });

  // EventListener for retry game button (same username)
  document.getElementById("play-again").addEventListener("click", function () {
    window.location.href = "game.html";
  });

  // EventListener for load next question button
  document.getElementById("next").addEventListener("click", function () {
    enableButtons();
    if (index < 9) {
      index++;
      displayQuestion(index);
    } else {
      displayReportModal();
    }
  });

  // Initialize game call
  initGame();
});

/** This function initializes the game and populates the 10 questions from the Opentdb API */
function initGame() {
  // Pre populates DOM with loading message while waiting for data from API
  document.getElementById("question-question").innerText =
    "Loading Question 1...";
  // Fetch 10 questions from API from general knowledge category
  fetch("https://opentdb.com/api.php?amount=10&category=9&type=multiple")
    .then((response) => response.json())
    .then((data) => {
      formatData(data.results);
      displayQuestion(index);
    })
    .catch(() => {
      alert("Error getting data from OpenTDB API...");
    });
}

/** This function displays the questions by loading the Opentdb API content into the DOM.
 * The index that is initiallized globally and passed in, determines which question from array will be loaded.
 */
function displayQuestion(index) {
  document.getElementById("question-number").innerText = index + 1;
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
    document.getElementById("next").innerHTML = "Get Result";
  }
}

/** This function checks the selected answer against the correct answer from loaded array of questions.
 *  The answer variable is passed in from the event listener on the buttons, coming from the data-type attribute.
 *  It also changes the button styles to display the correct answer (green) and incorrect (red)
 */
function checkAnswer(ans) {
  if (parseInt(ans) === formattedQuestions[index].correctAnswer) {
    disableButtons(formattedQuestions[index].correctAnswer);
    correctAnswers.push(index);
  } else {
    disableButtons(formattedQuestions[index].correctAnswer);
    wrongAnswers.push(index);
  }
  // re-enable button to click next question
  document.getElementById("next").removeAttribute("disabled");
}

/** This is a utility function to transform the structure of the data coming from the API. This organises
 * correct answer and 3 incorrect answers into a single array, thus easier to iterate through and specify
 * indexs on them.
 */
function formatData(data) {

  for (let question of data) {
    // format the question to remove special character codes
    let formattedQuestion = question.question.replaceAll("&quot;", "'");
    formattedQuestion = formattedQuestion.replaceAll("&#039;", "'");
    formattedQuestion = formattedQuestion.replaceAll("&rsquo;", "'");
    formattedQuestion = formattedQuestion.replaceAll("&lsquo;", "'");
    formattedQuestion = formattedQuestion.replaceAll("&ldquo;", "'");
    formattedQuestion = formattedQuestion.replaceAll("&rdquo;", "'");
    formattedQuestion = formattedQuestion.replaceAll("&amp;", "&");

    // Truncate extremely long words from question (e.g. Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch)
    let slicedQuestion = formattedQuestion.split(" ")
    let slicedArray = []

    for (let x = 0; x < slicedQuestion.length; x++) {
      if (slicedQuestion[x].length > 15) {
        let slicedWord = slicedQuestion[x].slice(0, 15) + "(...)'"
        slicedArray.push(slicedWord)
      } else {
        slicedArray.push(slicedQuestion[x])
      }
    }

    let newFormattedQuestion = slicedArray.join(" ")

    let newQuestionObject = {
      question: newFormattedQuestion,
      answers: question.incorrect_answers,
    };

    // Randomly set index position of correct answer in answers array which matches to correctAnswer property in same object
    let rand = Math.floor(Math.random() * 4);
    newQuestionObject.answers.splice(rand, 0, question.correct_answer);
    newQuestionObject.correctAnswer = rand;

    formattedQuestions.push(newQuestionObject);
  }
}

/** This function disables the answers after the user has clicked their answer
 * so they cannot keep choosing buttons to find the right answer. It takes in the
 * index number of the question button that was chosen.
 */
function disableButtons(num) {
  let buttons = document.getElementsByClassName("question-button");
  for (let button of buttons) {
    button.disabled = true;
  }
  buttons[num].removeAttribute("disabled");
  buttons[num].classList.add("correctAnswer");
}

/** This function re-enables the previously disabled answer buttons
 * so to be ready for the next question in the loop of 10
 */
function enableButtons() {
  let buttons = document.getElementsByClassName("question-button");
  // re-enable button to click next question
  document.getElementById("next").disabled = true;

  for (let button of buttons) {
    button.removeAttribute("disabled");
    button.classList.remove("correctAnswer");
  }
}

/** This function displays a report of the correct and incorrect answers achieved by the user */
function displayReportModal() {
  var modal = document.getElementById("results-modal");

  modal.style.display = "block";
  document.getElementById("score").innerText = correctAnswers.length;

  var modalText = document.getElementById("modal-text");
  let resultString = `<table>`;
  for (let x = 0; x < formattedQuestions.length; x++) {
    resultString += `<tr><td>${formattedQuestions[x].question} 
        <strong>${
          formattedQuestions[x].answers[formattedQuestions[x].correctAnswer]
        }</strong></td><td>
        ${
          correctAnswers.includes(x) ? '<i class="fa-solid fa-circle-check">' : '<i class="fa-solid fa-circle-xmark"></i>'
        } </i></td></tr>`;
  }
  resultString += `</table>`;
  modalText.innerHTML = resultString;
}