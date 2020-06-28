// GLOBAL VARIABLES

// get the begin button
let begin = document.getElementById('begin');
// listen for begin click
begin.addEventListener('click', showCorrect);

// get all tiles
let allTiles = $('.grid-item-lg');
// get all the correct tiles
let correctTiles = $('.grid-item-lg.correct');
// get all the incorrect tiles
let incorrectTiles = $('.grid-item-lg.incorrect');

// get the countdown modal backdrop
let countdown = document.getElementById('countdown-backdrop');



// function to display combination
/* After the begin button has been clicked, show the correct combination by lighting up the correct tiles. After these have faded, start the countdown modal.  */

function showCorrect(el) {
    Array.from(correctTiles).forEach(function(el) { // using the array from correctTiles - for each element...
        el.classList.add('active'); // add "active" animation class
        setTimeout(function() { // after adding the "active" class, remove after 2 seconds (line 30)
            el.classList.remove('active'); // remove "active" animation class
            begin.removeEventListener('click', showCorrect); // remove begin button event listener so user cannot repeat pattern show
            countdownModalStart() // begin the countdown modal before user repeats pattern
        }, 2000);

    })
}

// countdown modal start
/* After the correct combination has been displayed, show the countdown modal. This gives the user 3 seconds to get ready before repeating the pattern. */

function countdownModalStart() {

    // countdown modal duration
    
    let modal = document.getElementById('countdown-modal-div'); // get the countdown modal
    countdown.classList.add('countdown-modal-open'); // add countdown-modal-open as a class to fade in
    modal.style.display = 'block'; // change the display of the modal to block from none
    document.getElementById('countdown-backdrop').style.display = 'block'; // get the countdown modal backdrop and change display to block from none

    let timeleft = 3; // 3 seconds on the timer
    let downloadTimer = setInterval(function() {
        if (timeleft <= 0) { // when the timer hits 0 seconds
            clearInterval(downloadTimer);
            document.getElementById('countdown-modal').innerHTML = '0'; // show 0s seconds remaining on the modal
            setTimeout(function() {
                document.getElementById('countdown-backdrop').style.display = 'none'; // then hide content
            }, 900); // .9 seconds
            closeModal(); // call modal close function
        } else {
            document.getElementById('countdown-modal').innerHTML = timeleft; //show time remaining
        }
        timeleft -= 1; // take 1 second off the timer each second (line 60)
    }, 1000); // use seconds
}

//countdown modal close function
/* after the countdown modal has reached 0 seconds, close modal and change the BEGIN button to show GO!*/

function closeModal() {
    countdown.classList.remove('countdown-modal-open'); // remove open class from countdown-backdrop
    countdown.classList.add('countdown-modal-close'); // add close class to countdown-backdrop
    document.getElementById('begin').innerHTML = 'GO!'; // change the begin button to show go!
    listenForClickTiles(); // start listening for clicks on the tiles to see if they're correct or not
}

//register tile click (add event listener to all grid-item-lg)
/* after the modal has closed, start listening for clicks on each tile to see if they're correct or not*/

function listenForClickTiles() {
    Array.from(allTiles).forEach(function(element) { // use the allTiles array to add an event listener to each element within the array
        element.addEventListener('click', addClick); //if any tile is clicked run addClick function
    })
}

//tile has been clicked
/* addClick filters out whether the tile clicked is correct or not, calling the relevant function to each eventuality. */

function addClick() {
    $(this).addClass('clicked'); // add clicked to the tile so we can decipher which tiles have been clicked and which haven't
    if ($(this).hasClass('correct')) { // if the tile has a class 'correct' then call tileClickColorChangeCorrect
        tileClickColorChangeCorrect();
    } else {
        tileClickColorChangeIncorrect(); // otherwise call tileClickColorChangeIncorrect
    }
}

//background colour change on correct tiles
/* When the tile clicked is correct it should have 'correct clicked' as classes. If so then 'correct-color' class should be added and no life lost. When all correct tiles have been clicked, show next level modal */

function tileClickColorChangeCorrect() {
    correctTiles.each(function() { // for each correctTiles element clicked
        if ($(this).hasClass('correct clicked')) { // check if the tile has the required classes ('correct clicked')
            $(this).addClass('correct-color'); // if the tile does have the classes add 'correct-color' class
            $(this).removeClass('clicked'); // then remove the 'clicked' class to stop duplicates
            $(this).addClass('life-not-lost') // add 'life-not-lost' to create a tally to establish if all correct tiles have been clicked
        }
        if (!$('.correct').not('.life-not-lost').length) { // if the amount of elements containing 'life-not-lost' is equal to the amount of elements in correctTiles
            nextLevel() // then launch the next level modal
        }
    })
}

//background colour change on incorrect tiles
/* When the tile is clicked it should have 'incorrect clicked' as classes. If so then add 'incorrect-color' class. Then lose a life and update the life counter in the top right hand corner of the screen. */

function tileClickColorChangeIncorrect() {
    incorrectTiles.each(function() { // for each incorrectTiles element clicked
        let lifeCount = document.getElementById('life-count').value; { // get the value from the input element which represents the life counter
            if ($(this).hasClass('incorrect clicked')) { // check the tile has the required classes 'incorrect clicked'
                $(this).addClass('incorrect-color'); // if the tile does have the classes add 'incorrect-color' class
                lifeCount--; // then decrease life-count value by 1
                document.getElementById('life-count').value = lifeCount; // show the new value in the life counter HTML element
                $(this).removeClass('clicked'); // remove the 'clicked class to stop duplicates
                $(this).addClass('life-lost'); // add 'life-lost' to create a tally to help establish if all lives have been lost
                lifeCounter(); // check the life counter to see if all lives have been lost
            }
        }
    })
}

//life counter
/* Checking the number of lives in the HTML input element */

function lifeCounter() {
    let lifeCount = document.getElementById('life-count').value; // check the value in the life count HTML input element
    if (lifeCount == 0) { // if it's equal to 0
        gameoverModalStart(); // then launch the game over modal
    }
}

//game over modal start
/* If the number of lives was 0 then the game over modal should show up and after 5 seconds, redirect the user to the Orca Raffle Homepage */

function gameoverModalStart() {

    //gameover modal duration 

    let gameoverModal = document.getElementById('gameover-modal'); // get the gameover modal
    gameoverModal.classList.add('gameover-modal-open'); // add the 'gameover-modal-open' class
    gameoverModal.style.display = 'block'; // change the modal display to block from none
    document.getElementById('gameover-backdrop').style.display = 'block'; // change the modal backdrop display from none to block

    let timeleft = 5; // the countdown timer has 5 seconds before redirecting
    let downloadTimer = setInterval(function() {
        if (timeleft <= 0) { // when the timer hits 0
            clearInterval(downloadTimer);
            document.getElementById('gameover').innerHTML = '0s'; // show 0s seconds remaining in the modal
            window.location.replace('https://www.orcaraffle.com'); // redirect to url (replace means they cant hit back and return to the level they were on)
        } else {
            document.getElementById('gameover').innerHTML = timeleft + 's'; // show time remaining
        }
        timeleft -= 1; // take 1 off timeLeft every second (line 160) 
    }, 1000); // 1 second
}

//next level modal
/* If the user clicks all of the correct tiles then the nextLevel modal should appear with a button to proceed to the next level */

function nextLevel() {

    //next level modal duration

    let nextLevel = document.getElementById('next-level'); // get the next level modal
    countdown.classList.add('next-level-open'); // add the 'next-level-open' class to transition in
    nextLevel.style.display = 'block'; // change the display from none to block
    document.getElementById('next-level-backdrop').style.display = 'block'; // change the next-level-backdrop from none to block
}