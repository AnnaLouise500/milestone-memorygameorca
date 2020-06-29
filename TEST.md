![](/assets/img/orcaheader.PNG)
# Testing for Memory Game
![](/assets/img/linebreak.png)
## Tools Used
<ul>
  <li>W3C CSS Validation</li>
  <li>W3C HTML Validation</li>
  <li>User Test Group/s</li>
</ul>

![](/assets/img/linebreak.png)
## User Perspective Testing
#### 1) As a user of this site, it needs to be readable, intuitive and easy to use.
No matter which stage of the game the user in on, there are modals and traditional styling used to help the player understand either what is required of them or what stage they are at.<br><br>A few examples of this are listed below:
<ul>
  <li><b>Instructions</b> - These were read by a 3rd party and were easy to read and understand.</li>
  <li><b>Begin Button</b> - This is big and bold so easily noticeable and the text contained changes as the game progresses to help the user identify which stage they're at.</li>
  <li><b>Life Counter</b> - This is in a large font for the screen and has a dark background with white text for people with sight difficulties.</li>
  <li><b>Tiles</b> - The colour scheme used for correct/incorrect is traditional and easy to see.</li>
  <li><b>Next Level/Congratulations Modals</b> - These are big, bold and centered in the screen with clear instructions to help the user navigate the game.</li>
</ul>

#### 2) As a user, I want to be able to view each level without difficulty.
The styling used in this project have a lot of traditional roots (example: red for incorrect). The load times of each level are very short and any buttons or transitions, highly responsive. The tile grids have also been tested on all viewport sizes to ensure that they are legible, taking into account that this game is optimised for portrait viewing on larger screens.

#### 3) As a user, I want clear instructions on how to play the game before it starts.
These instructions were initially written in a bullet point list however, after an external review we decided to put them in seperate boxes to emphasise the seperation. They are also written from top to bottom so the user follows the flow of instructions like they would the flow of the page.

#### 4) As a user, I want the choice to be able to return to the homescreen at any point.
We included a "I do not want to enter the prize draw" link at the bottom of each page however, I noticed on shorter screens this can sometimes be hidden. Normally on websites if you click their logo you will be taken to the homepage so I also added this link to the logo which is clearly visible on all viewport sizes. This being said, I didn't want the option to return to the homepage to be too obvious as this may encourage users rather than getting them to complete the game.

#### 5) As a user, I want to see my life count at all times to see how close I am to passing/failing.
The life count background is a lot darker than the header to ensure it stands out, along with white font colour as it's been proven that people with sight difficulties find it easier to read light text on a darker background. The life count is clearly visible on all viewports, as a part of future development I may get the background colour to turn to red if the user has only 1 life remaining.

![](/assets/img/linebreak.png)
## Client Requirement Testing
#### 1) The pass rate of this game needs to be less than 85%<br><br>
<b>Client</b>: <i>We understand that the features needed to capture this information at this point were too complex to fit into the timeframe. We are happy to have this included in our future feature roadmap.</i><br><br>
<b>Developer</b>: <i>Unfortunately, the code needed to capture this information and feed it back to the client in a satisfactory format was too extensive to fit into our given timeframe. The client was happy to reduce this requirement from a priority to a future feature.</i>

#### 2) The game needs to be of a kind where the customer cannot Google the answer and cheat to pass<br><br>
<b>Client</b>: <i>By using a skill based game this removes the risk of our users being able to cheat and pass. We love the idea of having a memory game for our users to play.</i><br><br>
<b>Developer</b>: <i>We came up with the idea of having a skill based game in our initial discovery chats with James. Memory games are commonly played by a wide audience so are familiar to users and we don't need to reinvent the wheel!</i>

#### 3) The game needs to not exclude any customer demographic e.g. sound based game without visual guidance excludes people with hearing difficulties<br><br>
<b>Client</b>: <i>We understood that this was casting the net quite wide, after a conversation with Anna we knew it was going to be difficult to include absolutely everyone. We're really happy with the demographic that this game appeals to and have included all user groups which are feasibly possible.</i><br><br>
<b>Developer</b>: <i>This requirement did prove a little challenging as we wondered if there was a way to include people with sight difficulties. We mitigated most of the challenges we came up against by making the UI clear and easy to understand with a clearly contrasting colour scheme. We may add sounds to this game at a later stage.</i>

#### 4) The game needs to be fun and engaging to encourage customers to complete all levels<br><br>
<b>Client</b>: <i>By only having 3 levels in the game, we believe that it's quick enough to keep our users entertained whilst achieving our end goal of getting them to complete it. We have discussed making the patterns randomized in future as we believe this will take the game to the next level of UX.</i><br><br>
<b>Developer</b>: <i>By using a memory game we believe this appeals to a wide audience, making sure that they are all able to take part. Making the game easy to understand was important for this requirement as any user confusion would dramatically affect their experience.</i>

#### 5) Client branding needs to be present on the screen at all times<br><br>
<b>Client</b>: <i>We're really happy that the logo has been incorporated on each page. The thank you message on the instruction page also represents our brand well.</i><br><br>
<b>Developer</b>: <i>We ensured that even on the smaller screen that we incorporated the Orca logo, this was listed as one of the requirements at the beginning of the project so was treated as a priority.</i><br>

#### 6) The UI colour scheme needs to be obvious (red for wrong, tick for correct etc.)<br><br>
<b>Client</b>: <i>We initially discussed using symbols on the tiles however, for simplicity we came to a mutual agreement on a simple colour change. We really like the end result, especially using the same colour as our logo to indicate a correct tile.</i><br><br>
<b>Developer</b>: <i>From our testing with different users, I think this requirement has been well met. Everyone understands the game with little to no help and anything that may be different from traditional styles/colours is well explained.</i>

#### 7) The difficulty level of the game needs to be easily ammended (based off a trial to see what the initial pass rate is like)
<b>Client</b>: <i>From our perspective this need has been well as Anna has changed the combination for us a few times. It would be useful in future to have a dashboard (like the one for the pass rate) which allows us to change the combinations without needing to know how to code!</i><br><br>
<b>Developer</b>: <i>Currently this is a hard code change which needs to be completed by a developer however, I believe with the introduction of randomized tile combinations this will solve this requirement.</i>

#### 8) Game load time needs to be short and punchy so as not to put customers off with waiting to load
<b>Client</b>: <i>We have tested this and are very happy with the reliability and wait times.</i><br><br>
<b>Developer</b>: <i>Currently the game is very responsive. I think because of the simplicity of this game, this also wont be an issue moving forward.</i>

#### 9) The game needs to scale from mobile to desktop, whilst ensuring on a small mobile device that the memory tiles are still easy to click (the neighbouring one doesn't get clicked accidentally instead)
<b>Client</b>: <i>Most of our users are using their mobiles/tablets to access our site, therefore it's of paramount importance that the game is easy to use on these screen sizes. We've tested this on a few different screens and are happy that it scales well.</i><br><br>
<b>Developer</b>: <i>Due to the layout of this game we decided to optimise this game for use on phones around 350px wide and up. You can still play the game on devices like the iphone 5 however, it wont be as easy (this is consistent with other memory games found online). The game is also optimised for portrait viewing however, we may do some work on this in future to turn the grid sideways if people prefer to play in this view.</i>

#### 10) The game needs to be well explained on the Homepage to ensure customers know how to play before beginning
<b>Client</b>: <i>We find these instructions very easy to understand and the game provides helpful pointers throughout playing.</i><br><br>
<b>Developer</b>: <i>These instructions were initially written in a bullet point list however, after an external review we decided to put them in seperate boxes to emphasise the seperation. They are also written from top to bottom so the user follows the flow of instructions like they would the flow of the page.</i>

#### 11) The customer needs to be able to return to the main website at any point during the game
<b>Client</b>: <i>After testing we're happy this functionality exists and it isn't so obvious as to encourage the user to do so.</i><br><br>
<b>Developer</b>: <i>We included a "I do not want to enter the prize draw" link at the bottom of each page however, I noticed on shorter screens this can sometimes be hidden. Normally on websites if you click their logo you will be taken to the homepage so I also added this link to the logo which is clearly visible on all viewport sizes.</i>

![](/assets/img/linebreak.png)
## Functionality Testing
1) Viewport Scaling
- All working and tested <br>

2) Horizontal Viewing
- Horizontal viewing is possible on tablets and above but on mobiles needs to be disabled as half of the grid isn't on the screen.<br>

3) Return to Orca Raffle Homepage Links
- All working and tested <br>

4) Let's Do This Button
- All working and tested <br>

5) Begin Button Trigger
- All working and tested <br>

6) Internal HTML change on Begin Button
- All working and tested <br>

7) Tiles
- All working and tested <br>

8) Countdown modal
- All working and tested <br>

9) Life Counter
- All working and tested <br>

10) Gameover Modal
- All working and tested <br>

11) Congratulations Modal
- All working and tested <br>

12) Next Level Modal
- All working and tested <br>

![](/assets/img/linebreak.png)
## User Testing
The memory game was passed to a few family members and friends to have a play around with. I picked a group who had varying screen sizes and technical abilities.<br>
The main 2 points to target moving forwards which came from the group are listed below:<br>

1) Smaller Screens
The game does become harder to play on smaller screens, maybe change the grid size to be the same size, with larger tiles but a more complicated combination?

2) Horizontal Viewing
On a mobile phone, you can only see half the grid at any time. Is there a way to disable horizontal viewing?
