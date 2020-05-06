//Countdown timer for "Oh No" pop up
var timeleft = 5;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){ //when the timer hits 0
    clearInterval(downloadTimer);
    document.getElementById("countdown").innerHTML = "0s"; //show 0s seconds remaining
    window.location.replace("/homepage.html"); //redirect to url (replace means they cant hit back)
  } else {
    document.getElementById("countdown").innerHTML = timeleft + "s"; //show time remaining
  }
  timeleft -= 1;
}, 1000); // use seconds






