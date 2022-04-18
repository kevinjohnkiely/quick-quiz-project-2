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

This wireframe is a mockup of the result modal popup window that appears after the user has answered the 10 questions.

<img src="https://github.com/kevinjohnkiely/quick-quiz-project-2/blob/main/screenshotsWireframes/Result%20Page.png">

<hr>

# Features

## The Intro Page
This is the landing page that first appears when the user loads the website. Some introductory text appears and also a text box underneath that allows the user to enter a username to continue the game, as a personal touch to keep the user engaged. Some form validation is added here to ensure that the user enters a username.
The username is saved in the web browser using JavaScript local storage, so it can be retrieved later by the next page.

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

### Game Controls
This section holds the 2 game control buttons, a button to restart the game and one to continue onto the next question. The user continues looping through the questions in this format, until the 10th question. After the final question has been answered, the "Next Question" button changes to a "Get Result" button and clicking on this forwards the user to a "Quiz Report" pop-up window.

<img src="https://github.com/kevinjohnkiely/quick-quiz-project-2/blob/main/screenshotsWireframes/GameControls.png">

## The Quiz Result Popup Window
This window shows the final score achieved, and a breakdown of the correct and incorrect answers. The user has the option of clicking "Play Again" button to try another quiz.

<img src="https://github.com/kevinjohnkiely/quick-quiz-project-2/blob/main/screenshotsWireframes/ResultModal.png">

<hr>

# Technologies Used
The following is a list of the various technologies employed to build this project
+ HTML5 - Hypertext markup language used to give the website its overall structure and semantic value.
+ CSS3 - Cascading Style Sheets used to apply consistent styles across all sections of the application.
+ Google Fonts - Font is embedded into the website by way of importing the correct google font link into the linked CSS file.
+ Font Awesome - Fontawesome toolkit imported into HTML files and its icons used to show social media links.
+ Git, Github & Gitpod - Used to continuously develop and deploy the incremental versions of the application.
+ Balsamiq Wireframes - Downloadable software to create the wireframe mockups.
+ GIMP - GNU Image Manipulation Program, used to resize, crop & optimize the image content for embedding on the website.
+ Local Storage - A JavaScript utility that allows key-value pairs of data to be stored for later use in a web browser.

<hr>

# Testing

## Cross-Browser Testing
The application was functionally tested across the 3 web browsers, Google Chrome, Microsoft Edge & Mozilla Firefox. The site loaded consistently across all 3 and no issues were detected on any browser.

## Compatibility Testing
I tested the site across differing devices, such as the Nokia 4.2 smartphone with Android 11, Lenovo Ideapad 3 laptop with different browsers on Windows 11, and on a Dell Studio laptop with different browsers on a Linux Mint operating system. No issues were reported between these devices.

## Responsiveness Testing
During development of this application, I regularly tested the responsiveness of the site using Google Chromes Developer tools. In my CSS media query rules, I used 2 separate break points to design the site for different screen sizes.
+ 800px width and below (medium screen size)
+ 600px width and below (small screen size)

### The Intro Page
The intro page was laid out using full width divs and containers, so the app displays identically across all screen sizes, the only difference being the paddings adjusted and also the label and input box stack on top of each other.

<img src="https://github.com/kevinjohnkiely/quick-quiz-project-2/blob/main/screenshotsWireframes/IntroResponsive.png">

### Game Page - Header
The header section of the game page changes from a 2 column layout to 1 column on smaller screens, the name and logo stacking on top of the welcome username text.

<img src="https://github.com/kevinjohnkiely/quick-quiz-project-2/blob/main/screenshotsWireframes/HeaderResponsive.png">

### Game Page - Question Panel
The game panel section changes from a 4 column layout to just 1 column on the smaller screen sizes, the question boxes stacking on top of each other, with some necessary padding/margin/font-size adjustments to suit the viewport.

<img src="https://github.com/kevinjohnkiely/quick-quiz-project-2/blob/main/screenshotsWireframes/GamePanelResponsive.png">

### Game Page - Game Controls
Similar to the previous sections the game controls change from multiple columns to a one column layout on smaller devices. Also, the order of the buttons are reversed, to give a better user experience it was decided that the "Next Question" button should appear above the "Restart" option.

<img src="https://github.com/kevinjohnkiely/quick-quiz-project-2/blob/main/screenshotsWireframes/GameControlsResponsive.png">

### The Quiz Result Popup Window
The modal window appears identically to the large screen versions, with the results in a table format. Some scrolling has to be undertaken to see all results and access the "New Game" button, but this was unavoidable due to the amount of information needed to be displayed on the modal.

<img src="https://github.com/kevinjohnkiely/quick-quiz-project-2/blob/main/screenshotsWireframes/ResultModalResponsive.png">

## User Testing
The quiz app website was tested by another person and they found it a pleasant user experience, reporting no usability issues and found it an easy user journey through the game. They reported the question buttons being clearly available to click when they wanted to answer, and quickly found the "Get Result" button when the 10th question was answered.

### Input Validation
On the intro page, the input box where the user enters their chosen username is required so that the game can commence. A message appears as follows using HTML5 validation, prompting the user for a username if the button is clicked with an empty text box:

<img src="https://github.com/kevinjohnkiely/quick-quiz-project-2/blob/main/screenshotsWireframes/InputValidation.png">

### Button Enabling/Disabling
In order to effectively control the game functions, certain buttons have to be enabled or disabled depending on user interaction. When a question has loaded, the "next question" button is disabled until the user has clicked an answer. When an answer is clicked the "next question" button is re-enabled, but the question buttons are disabled to disallow the user from having a second chance to answer the question. This process is repeated for all 10 questions.

## Validator Testing
The HTML of the website was tested using the validator at https://validator.w3.org/. The following bug was discovered:
+ Section content with no Heading(h1 - h6) markup. Advised to change section semantic tags to div tags, as the section elements were just effectively placeholders for other content and did not require heading tags.

All of these errors were corrected and now the application passes the validator.

The CSS was tested using the validator at https://jigsaw.w3.org/css-validator/ and no errors were reported.