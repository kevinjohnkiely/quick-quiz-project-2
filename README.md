# Quick Quiz - Project 1

<img src="https://github.com/kevinjohnkiely/quick-quiz-project-2/blob/main/screenshotsWireframes/Screenshot.png">

This is a browser based quiz game constructed with JavaScript, CSS3 and HTML5. It allows the user to answer 10 randomly chosen questions and obtain their score at the games end, and receive a report on what questions they answered incorrectly. The game is targeted towards a broad section of people who are interested in general knowledge quizzes.

The main aim of this project is to construct and visually appealing, responsive and accessible browser game that ticks all the boxes of a modern user experience, and display how such an application can be constructed using JavaScript.

[Live link to website](https://kevinjohnkiely.github.io/quick-quiz-project-2/)

<hr>

# UX (User Experience)

## User Story
The main user journey through this game is identical for all users - The user visits the intro or landing page, quickly reads the introductory instructions and enters their username to begin the quiz. The user then loops through each question, and receives visual feedback after clicking on their answer as to whether they answered correctly or not. On completing the 10 questions, a pop window is displayed showing their final score and a report showing the questions, the correct answer and a visual indicator of which questions were answered correctly.

## Wireframes
The following images show wireframes of each of the 3 pages of the site. These wireframes were created using [Balsamiq Wireframes](https://balsamiq.com/).

### Intro Page
This is a wireframe showing the intended design layout for the landing/intro page of the game app.

<img src="https://github.com/kevinjohnkiely/quick-quiz-project-2/blob/main/screenshotsWireframes/Intro%20Page.png">

### Game Page
This wireframe shows the intended design layout for the main game page of the quiz.

<img src="https://github.com/kevinjohnkiely/quick-quiz-project-2/blob/main/screenshotsWireframes/Game%20Page.png">

### Result Pop-up Window

This window shows the final score achieved, and a breakdown of the correct and incorrect answers. The user has the option of clicking "Play Again" button to try another quiz.

<img src="https://github.com/kevinjohnkiely/quick-quiz-project-2/blob/main/screenshotsWireframes/Result%20Page.png">

# Features

## The Intro Page
This is the landing page that first appears when the user loads the website. Some introductory text appears and also a text box underneath that allows the user to enter a username to continue the game, as a personal touch to keep the user engaged. Some form validation is added here to ensure that the user enters a username.

<img src="https://github.com/kevinjohnkiely/quick-quiz-project-2/blob/main/screenshotsWireframes/Intro.png">

Clicking on the Start Quiz button will load the main game page which follows at game.html

## The Game Page
This is the main page of the game that holds all relevant HTML structure and linked JavaScript code that operates the game functionality. The page is composed of the following elements:

### The Header
This appears at the top of the page and has the game name and logo on the left, and on the right the users entered username appears, welcoming them to the game.
<img src="https://github.com/kevinjohnkiely/quick-quiz-project-2/blob/main/screenshotsWireframes/Header.png">

### The Game Panel
This panel displays the questions for the quiz and what number that question is out of the total of 10. The 4 possible answers are displayed as buttons underneath, and as shown in the below image, clicking on a button displays the correct answer in green and all other answers in red. After answering, all buttons will be disabled so that the user can't re-answer the question, but the "Next Question" button remains to allow the user to continue.

<img src="https://github.com/kevinjohnkiely/quick-quiz-project-2/blob/main/screenshotsWireframes/GamePanel.png">

The user continues looping through the questions in this format, until the 10th question. After the final question has been answered, the "Next Question" button changes to a "Get Result" button and clicking on this forwards the user to a "Quiz Report" pop-up window.
