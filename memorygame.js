//GLOBAL VARIABLES

//get the begin button
var begin = document.getElementById('begin');

//listen for begin click
begin.addEventListener('click', showCorrect);

//get all tiles
var allTiles = document.getElementsByClassName('grid-item-lg');
//get the correct tiles
var correctTiles = document.getElementsByClassName('grid-item-lg correct');
//get the incorrect tiles
var incorrectTiles = document.getElementsByClassName('grid-item-lg incorrect');

//countdown variable
var countdown = document.getElementById("countdown-backdrop");



//function to display combination
function showCorrect(el) {
    Array.from(correctTiles).forEach(function(el) {
        el.classList.add("active"); //add "ative" animation class
        setTimeout(function(){
            el.classList.remove('active'); //remove "active" animation class
            begin.removeEventListener('click', showCorrect); //remove begin button event listener
            modalStart()
        },2000); //2 seconds after the class is added
    
      })
}

//countdown modal start
function modalStart() {

//countdown modal duration

var modal = document.getElementById("countdown-modal-div");
countdown.classList.add('countdown-modal-open');
modal.style.display="block";
document.getElementById('countdown-backdrop').style.display ="block";

var timeleft = 3;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){ //when the timer hits 0
    clearInterval(downloadTimer);
    document.getElementById("countdown-modal").innerHTML = "0"; //show 0s seconds remaining
      setTimeout(function(){
        document.getElementById('countdown-backdrop').style.display = "none"; //hide content
      },900);
    closeModal(); //call modal close function
  } else {
    document.getElementById("countdown-modal").innerHTML = timeleft; //show time remaining
  }
  timeleft -= 1;
}, 1000); // use seconds
}

//countdown modal close function
function closeModal(){
    countdown.classList.remove('countdown-modal-open'); //remove open class from countdown-backdrop
    countdown.classList.add('countdown-modal-close'); //add close class to countdown-backdrop
    document.getElementById("begin").innerHTML = "GO!";
    tileClick();
}

//register tile click


//background colour change on correct tiles
 function tileClick(){
   Array.from.allTiles.forEach(function(el) {
  if(el.classList.contains('correct')) {
    //the tile clicked had a class of 'correct
    el.classList.add('correct-color');
  }
  else {
    //if incorrect tile clicked
      incorrectTiles.classList.add('incorrect-colour');
      lifeCounter();
  }
})
}


//life counter
var lifeCount = 1;

function lifeCounter() {
    if(lifeCount <= -1){
      //game over modal pop up
    }
    else {
      //remove a life off of life counter
    }
  }







/*
1) Click begin
2) "Correct" tiles fadein and fade out (3s total)
3) Count down modal appears
4) Count down modal disappears

--

5) User clicks correct tile
6) Tile changes to blue

OR

7) User clicks incorrect tile
8) Life counter decreases by one
9) Tile turns red

--

10) User passes 
11) Congratulations click to continue modal appears
12) User clicks continue
13) Level 2 loads

OR

14) User does not pass level 
15) Oh no modal appears
16) Modal counts down from 5s and redirects to homepage
*/