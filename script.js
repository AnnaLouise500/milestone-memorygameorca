var timeleft = 5;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("countdown").innerHTML = "0s";
  } else {
    document.getElementById("countdown").innerHTML = timeleft + "s";
  }
  timeleft -= 1;
}, 1000);