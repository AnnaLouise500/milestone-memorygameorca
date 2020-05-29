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
            countdownModalStart()
        },2000); //2 seconds after the class is added
    
      })
}

//countdown modal start
function countdownModalStart() {

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
    lifeCounter();
    listenForClickTiles();
}


//BREAK

//get all tiles
var allTiles = document.getElementsByClassName('grid-item-lg');

//register tile click (add event listener to all grid-item-lg)
function listenForClickTiles() {
  $(".grid-item-lg").forEach(element => {
  element.addEventListener('click', tileClick); //if any tile is clicked run tileClick function
})
}

//background colour change on correct tiles
 function tileClick(){
   Array.from(allTiles).forEach(function(el) {
  if(testTile.classList.contains('correct')) {
    //the tile clicked had a class of 'correct
    testTile.classList.add('correct-color');
  }
  else {
    //if incorrect tile clicked
      testTile.classList.add('incorrect-colour');
  }
});
}



//life counter

var lifeCount = document.getElementById('life-count').value;

function lifeCounter() {
    if(lifeCount <= 0){
      //gameoverModalStart(); //tested by calling in closeModal function - this function works
    }
    else {
      lifeCount--;
    }
  }

//game over modal start - function tested and works perfectly
function gameoverModalStart() {

//gameover modal duration 

var gameoverModal = document.getElementById("gameover-modal");
gameoverModal.classList.add('gameover-modal-open');
gameoverModal.style.display="block";
document.getElementById('gameover-backdrop').style.display ="block";

var timeleft = 5;
  var downloadTimer = setInterval(function(){
  if(timeleft <= 0){ //when the timer hits 0
    clearInterval(downloadTimer);
    document.getElementById("gameover").innerHTML = "0s"; //show 0s seconds remaining
    window.location.replace("https://www.orcaraffle.com"); //redirect to url (replace means they cant hit back)
  } else {
    document.getElementById("gameover").innerHTML = timeleft + "s"; //show time remaining
  }
  timeleft -= 1;
}, 1000); // use seconds
}