# Quick Quiz - Project 1

<!-- SCREENGRAB IMAGES TO GO HERE! -->

This is a browser based quiz game constructed with JavaScript, CSS3 and HTML5. It allows the user to answer 10 randomly chosen questions and obtain their score at the games end, and receive a report on what questions they answered incorrectly.

The main aim of this project is to construct and visually appealing, responsive and accessible browser game that ticks all the boxes of a modern user experience.

[Live link to website](https://kevinjohnkiely.github.io/quick-quiz-project-2/)

<hr>

# UX (User Experience)

## Wireframes
The following images show wireframes of each of the 3 pages of the site. These wireframes were created using [Balsamiq Wireframes](https://balsamiq.com/).

### Intro Page
This is the landing page that first appears when the user loads the website. Some introductory text appears and also a text box underneath that allows the user to enter a username to continue the game, as a personal touch to keep the user engaged. If this box is left blank the user will be assigned the name "Guest".

<img src="https://github.com/kevinjohnkiely/quick-quiz-project-2/blob/main/screenshotsWireframes/Intro%20Page.png">

Click on the Start Quiz button will load the main game page which follows at game.html

### Game Page
This is the main page of the game that holds all relevant HTML structure and linked JavaScript code that operates the game functionality. The user is welcomed to this page by way of their username appearing at the top bar, and they can begin answering the questions one by one. A right answer results in the clicked answer button turning green, a wrong answer turns the button red. After answering, all buttons will be disabled so that the user can't re-answer the question, but the "Next Question" button remains to allow the user to continue. Also provided is a "Start Over" button if the user wants to begin the game again. 

<img src="https://github.com/kevinjohnkiely/quick-quiz-project-2/blob/main/screenshotsWireframes/Game%20Page.png">

The user continues looping through the questions in this format, until the 10th question. After the final question has been answered, the user is forwarded automatically to a "Quiz Report" pop-up window.

### Result Pop-up Window

This window shows the final score achieved, and a breakdown of the correct and incorrect answers. The user has the option of clicking "Play Again" button to try another quiz.

<img src="https://github.com/kevinjohnkiely/quick-quiz-project-2/blob/main/screenshotsWireframes/Result%20Page.png">
