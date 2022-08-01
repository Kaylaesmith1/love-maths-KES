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
                //include the alert right off the bat to show the function is working //
                // alert(`You clicked ${gameType}`);
                runGame(gameType);

            }

        })
    }
    runGame("addition");
    

})

/**
 * The main game "loop", called when the script is first loaded and after the user's answer has been processed.  
 */

//using docstrings will show the sentence of what your code does if your function is located somewhere else in the code too //
function runGame(gameType) {
// These two variables generate random numbers betwen 1 and 25 //
    let num1 = Math.floor(Math.random()*25) + 1;
    let num2 = Math.floor(Math.random()*25) + 1;

    if (gameType === "addition") {
        displayAdditionQuestion (num1, num2);
    } else {
        alert(`Unknown game type: ${gameType}`);
        // the 'throw' will send this message to the console >> open it and you can see the error //
        throw `Unknown game type: ${gameType}. Aborting.`;
    }

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

function displayAdditionQuestion(operand1, operand2) {

    document.getElementById('operand1').textContent=operand1;
    document.getElementById('operand2').textContent=operand2;
    document.getElementById('operator').textContent= "+";



}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}

