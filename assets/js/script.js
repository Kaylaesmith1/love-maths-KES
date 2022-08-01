// Wait for DOM to finsih loading before running the game--otherwise maybe it loads before everything is ready //
// Get button elements and add event listeners to them //

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    //instead of the below, a cleaner version can be used: "let button of buttons"//
    // for (let i=0; i < buttons.length; i++){}   
    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type")==="submit") {
                alert("You clicked submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);

            }

        })
    }
    

})

/**
 * The main game "loop", called when the script is first loaded and after the user's answer has been processed.  
 */
function runGame() {
// These two variables generate random numbers betwen 1 and 25 //
    let num1 = Math.floor(Math.random()*25) + 1;
    let num2 = Math.floor(Math.random()*25) + 1;

}

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function checkAnswer() {

}

function displayAdditionQuestion() {

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}

