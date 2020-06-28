![](/assets/img/orcaheader.PNG)
# Memory Game - Orca Raffle

## Who are Orca Raffle?
Orca Raffle is the brain child of James and Piers, childhood school friends who wanted to create a platform which contributes to generating revenue for a number of different charities. The site works by procuring donated prizes such as iPhones, Xbox consoles etc and allowing their customers to buy tickets in the 
chance of winning. They draw the winner by picking a number at random, live on their website. To limit the amount of people entering the raffle they have come up with the idea of creating a game which will load just after a customer has paid for their tickets. If the customer does not pass the game, they will not be entered into the prize draw.

## Requirements
<li><b>PRIORITY</b> - The pass rate of this game needs to be less than 85%</li>
<li><b>PRIORITY</b> - The game needs to be of a kind where the customer cannot Google the answer and cheat to pass</li>
<li><b>PRIORITY</b> - The game needs to not exclude any customer demographic e.g. sound based game without visual guidance excludes people with hearing difficulties </li>
<li><b>PRIORITY</b> - The game needs to be fun and engaging to encourage customers to complete all levels</li>
<li><b>PRIORITY</b> - Client branding needs to be present on the screen at all times</li>
<li><b>PRIORITY</b> - The UI colour scheme needs to be obvious (red for wrong, tick for correct etc.)</li>
<li><b>PRIORITY</b> - The difficulty level of the game needs to be easily ammended (based off a trial to see what the initial pass rate is like)</li>
<li><b>PRIORITY</b> - Game load time needs to be short and punchy so as not to put customers off with waiting to load</li>
<li><b>PRIORITY</b> - The game needs to scale from mobile to desktop, whilst ensuring on a small mobile device that the memory tiles are still easy to click (the neighbouring one doesn't get clicked accidentally instead)</li>
<li><b>PRIORITY</b> - The game needs to be well explained on the Homepage to ensure customers know how to play before beginning</li>
<li><b>PRIORITY</b> - The customer needs to be able to return to the main website at any point during the game</li>
<li>FUTURE - We need to look at making the memory combinations different everytime a customer attempts to pass. Otherwise they can just repeat the same combination until they pass</li>
<li>FUTURE - The owners need to be able to capture the number of poeple clicking "Begin" vs the number of people clicking "Enter Into Draw" to ensure the 85% pass rate is adhered to as they can be audited</li>
<li>FUTURE - Prompt to show that the game is loading when customer has bad connectivity</li>

## Mapping
I spent some time with the client to clearly map out their process flow to guide the user through the game.<br>
Everything with a thick black border already exists, the game will plug into these points.<br>
![](/assets/img/orcaflow.PNG)<br>

# UX

## Ideal Client
Orca Raffle is designed to appeal to many demographics so our ideal client will be between the ages of 18 to 60. <br>
They don't need to be technically savvy to use this site or game. <br>
As this service is currently only available in the UK the will need to based in country.<br>
The users will also need to have disposable income. <br>
English speaking as this site and game instructions are only available in English. <br>

### What's the user/client goal?
This game has been designed to ensure only 85% of people using Orca Raffle have their tickets entered into the live draw. This is to both increase revenue for the client and
to ensure that the service is not classed as gambling. The game needs to be skill based so the user cannot find the answer by other means to pass when they shouldn't.<br>
<br>
The user goal is to pass all 3 levels of this skill based game to get their tickets entered into the live draw and be in with a chance of winning the prize!<br>

### How does this project best help them achieve this goal?
The game has been designed to be challenging, engaging and most of all - fun! This is to ensure that the user enjoys their complete experience when using Orca Raffle.
The UX has been designed to be user friendly and scales to all screen sizes so no one is left out.<br>

<b>It has however been optimised for portrait viewing on larger screens.</b>
  
### Client Stories
1) As a client, I want my branding to be visible in all possible scenarios.<br>
2) As a client, I want the experience to be fluid to retain all clients.<br>
3) As a client, I want to make the game skill based to eradicate the possibility of users cheating to pass.<br>
4) As a client, I want a clean, efficient process which is clearly explained to my users.<br>
5) As a client, I want a reliable service which doesn't break.<br>
6) As a user of this site, it needs to be readable, intuitive and easy to use.<br>
7) As a user, I want to be able to view each level without difficulty.<br>
8) As a user, I want clear instructions on how to play the game before it starts.<br>
9) As a user, I want the choice to be able to return to the homescreen at any point.<br>
10) As a user, I want to see my life count at all times to see how close I am to passing/failing.<br>

### Wireframe mockups
https://xd.adobe.com/view/38d54322-fe73-4d8e-5337-7159aeb45447-4ee4/

# Features

### Homepage (index.html)
### Level 1 (level1.html)
### Level 2 (level2.html)
### Level 3 (level3.html)

## Existing Features
<ul>
  <li>List all functionality within the project at submission</li>
</ul>

## Features for future
### Randomized Tile Combinations
Currently users will only encounter the same combination when accessing each level (example; Level 1's tiles will always show the same combination). 
Moving forward I would like to create a randomized pattern by making my JS level sensitive (unfortunately I ran out of time to demonstrate this in this project).
#### Thought Process
I would implement a "Load Level" step in my JS to specify which actions are to be completed within that level.
I would then generate an array of random true or false arguments which would be used to randomize the pattern within that level.
I would then need to research how to use my new array/s to target the tiles using DOM manipulation to make them show in a random order.
I believe each tile would need to have it's own specific class to 

### Entry vs Completion Counter
Currently there is no way of knowing how many people have clicked "Begin" on Level 1 compared to how many people have been entered into the raffle after completing level 3.
#### Thought Process
I would need to put a counter on the "Begin" button on level 1 which is stored in an "Admin" type dashboard.
I would need to create a login page for the Orca Raffle owners so they could log in and see the count.
The owners would also use this login page to view the sheet which contains all users who have been successfully entered into the raffle.

### Removing the browser refresh functionality
Currently because the tile combinations are not random the user can view the combination and then click refresh (or use F5) to restart the combination display process.
#### Thought Process
The refresh functionality could be made redundant by using randomized tile combinations due to the difficulty in removing the refresh ability.

### Combining all JS files
Currently each level has it's own JS file. This is due to the different class names needed for the different tile sizes as you progress through the levels. 
For example; Level 1 has the largest tiles and is styled using the "grid-item-lg" class. This class is used to gather the var allTiles in memorygame-leve1.js.
#### Thought Process
Again, going back to the randomized tile combinations future development - we will need to target the tiles using DOM manipulation, rather than class names.
This would remove the need for seperate JS files.

# Technologies Used
<ul>
  <li>HTML and CSS</li>
  <li>jQuery</li>
  <li>JavaScript</li>
  <li>VS Code - Source code editor (IDE)</li>
  <li>GitHub Desktop - To review and push all commits to github.com</li>
  <li>W3Schools - The loader wheel on the congratulations modal on completion of Level 3</li>
  <li>https://validator.w3.org/ - For HTML validation</li>
  <li>https://jigsaw.w3.org/css-validator/ - For CSS validation</li>
  <li>https://beautifier.io/ - For JS beautifier</li>
  <li>GitHub Pages - To display the completed project</li>
</ul>

# Testing
testing.md file to be created once project complete

# Deployment
This project was developed using MS Visual Studio Code and committed to my GitHub repository using GitHub Desktop.

It was then deployed to GitHub Pages from the GitHub repository using the following steps:
<ol>
  <li>All up to date files were commited to the repository using GitHub Desktop</li>
  <li>Go into the GitHub repo which you would like to deploy</li>
  <li>Click Settings icon at the top</li>
  <li>Scroll down to the GitHub Pages section</li>
  <li>Under "Source" click the drop-down menu labelled None and select " master branch /docs folder</li>
  <li>The page will refresh</li>
</ol>

# Running the project locally

## To make a local copy of this repository from GitHub:
### 1) Access the GitHub repository <a href="https://github.com/AnnaLouise500/milestone-memorygameorca">here</a><br>
![](/assets/img/repo.PNG)<br>
### 2) Under the repository name, click "clone or download"<br>
![](/assets/img/clonedownload.PNG)<br>
### 3) Click Download Zip - This will create a local copy of all the repo files.<br>
![](/assets/img/downloadzip.PNG)<br>
### 4) In your Downloads folder, right click on the file with the zipped icon.<br>
![](/assets/img/downloadunzip.PNG)<br>
### 5) Choose extract all and pick the location you want the local files to be located<br>
![](/assets/img/extractto.PNG)<br>
### 6) You can now open this folder using VS Code by clicking File > Open Folder<br>
![](/assets/img/openfolder2.PNG)<br>

