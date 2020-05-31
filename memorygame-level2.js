//GLOBAL VARIABLES

//get the begin button
var begin = document.getElementById('begin');

//listen for begin click
begin.addEventListener('click', showCorrect);

//get all tiles
var allTiles = $('.grid-item-md');
//get the correct tiles
var correctTiles = $('.grid-item-md.correct');
//get the incorrect tiles
var incorrectTiles = $('.grid-item-md.incorrect');

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
    
    listenForClickTiles();
}

//register tile click
function listenForClickTiles() {
  Array.from(allTiles).forEach(function(element){
  element.addEventListener('click', addClick); //if any tile is clicked run addClick function
})
}

//tile has been clicked
function addClick(){
    $(this).addClass('clicked');
    if($(this).hasClass('correct')){
      tileClickColorChangeCorrect();
    }
    else {
    tileClickColorChangeIncorrect();
    }
  }

//background colour change on correct tiles
function tileClickColorChangeCorrect() {
    correctTiles.each(function(){
   if ($(this).hasClass('correct clicked')){
      $(this).addClass('correct-color');
      console.log("correct color class added");
      
   }
  })
}

//background colour change on correct tiles

function tileClickColorChangeIncorrect() {
  incorrectTiles.each(function(){
    var lifeCount = document.getElementById('life-count').value;{
    if ($(this).hasClass('incorrect clicked')){
      $(this).addClass('incorrect-color');
      lifeCount--; //decrease life-count value by 1
      document.getElementById('life-count').value = lifeCount; //return the new value
      $(this).removeClass('clicked');
      $(this).addClass('life-lost');
      lifeCounter();
    } 
    }
  })
}

//life counter

function lifeCounter() {
  var lifeCount = document.getElementById('life-count').value;
    if(lifeCount == 0){
     gameoverModalStart(); //tested by calling in closeModal function - this function works
    }
  }

//game over modal start

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