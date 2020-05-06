//begin button clicked - display correct combination

//get the correct tiles
var correct = document.getElementsByClassName('correct');

//get the begin button
var begin = document.getElementById('begin');

//listen for begin click
begin.addEventListener('click', showCorrect);

//function to display combination
function showCorrect() {
    Array.from(correct).forEach((element) => {
        console.log("hello");
    })
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