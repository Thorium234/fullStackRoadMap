First of all, I want to give some information about the game.

What is tic-tac-toe? What are the rules of the game?
It is a game for two players.
It is usually played on a 3x3 board, but it can be wider. I will take the 3x3 board as a basis.
The player who started first fills in the empty squares by typing ‘X’ and the other player ‘O’.
A player wins the game when they X-X-X or O-O-O in rows, columns, or diagonals.
Press enter or click to view image in full size

some examples of winning situations
If all squares filled and were provided one from the above conditions be the game is tied.

an example of a draw
Before I start coding, I generally want to tell you what I did. At first, for game-essential things, I coded with HTML. To make it more aesthetic, I created styles with CSS. The game to be functional, I used JavaScript. Now let’s examine them.

HTML:
I added an h1 tag in div whose id is the title

To create the 3*3 board required for the game, I created a div whose id is the board.

I created each square on the board in a div whose class is square. I created an id for each square.

To be able to start the game again, I added an input whose type value is a button. I created this inside div whose id is endGame. The game screen should reset when the button is clicked. So I added the function to the onclick event to call the function I created in javascript.

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tic Tac Toe</title>
    <link rel="stylesheet" href="styles.css">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200&family=Roboto+Serif&display=swap" rel="stylesheet">
</head>
<body>
    <div id="title">
        <h1>Tic Tac Toe</h1>
    </div>
    <div id="board">
        <div class="square" id="square0"></div>
        <div class="square" id="square1"></div>
        <div class="square" id="square2"></div>
        <div class="square" id="square3"></div>
        <div class="square" id="square4"></div>
        <div class="square" id="square5"></div>
        <div class="square" id="square6"></div>
        <div class="square" id="square7"></div>
        <div class="square" id="square8"></div>
    </div>  
    <div id="endGame">
        <input type="button" value="Restart" id="restartButton" onclick="restartButton()"/>
    </div>
    <script src="game.js"></script>
</body>
</html>
CSS:
I put the title in the center of the page.

I put the div whose id is board in the center of the page. I set the margin properties for this.

I set the width and height properties of the div whose id is board.

The board consists of 9 squares, I made the display property grid to create it. I created 9 frames with Grid template columns settings. I set the spacing between the grids with the grid-gap property.

Write on Medium
I set the width and height properties for each square. I added the border property to these squares. I added a background color to the squares. I set its position using the display property. I created the color change when hovering over the squares. I used the hover feature for this.

I set the display properties and other styles to the one whose id is restartButton. Additionally, I used the hover feature.

body {  
    font-family: 'Poppins', sans-serif;
    color: #000000;
}

h1 {
    text-align: center;
}

#board {
    margin-left: auto;
    margin-right: auto;
    width: 375px;
    height: 375px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 5px;
}

.square {
    width: 120px;
    height: 120px;
    border: 1px solid #D3D3D3;
    background-color: #F5F5F5;
    font-size: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.square:hover {
    background-color: #FFFFE0;
}

#restartButton {
    display: block;
    margin-left: auto;
    margin-right: auto;
    height: 40px;
    width: 150px;
    background-color: #FFFFFF;
    border: 1px solid #000000;
    border-radius: 40px;
    font-size: 18px;
}

#restartButton:hover {
    background-color: #000000;
    color: #FFFFFF;
}
JavaScript:
I used HTML DOM features to process the elements I use in HTML via JavaScript.

To get to the div with the id of board and the div with the class square in the HTML file, I got them by assigning them to the variables with the corresponding DOM tags.

I created a series called “players” for the game. The elements of the array are X and O.

Since X was the first to start the game, I assigned players[0] to the currentPlayer variable.

const board = document.getElementById('board')
const squares = document.getElementsByClassName('square')
const players = ['X', 'O']
let currentPlayer = players[0]
To see the end of the game, a message must be printed on the screen when the necessary conditions are met. For this reason, I assigned the h2 tag to the endMessage variable so that it can be seen in the HTML document. It will print the message as a result of the operations performed on the div whose id is board using the after function. We can print text to the variable with the help of textContent. ‘X’s turn!’ I printed it. I added styles to the tag I created.

const endMessage = document.createElement('h2')
endMessage.textContent = `X's turn!`
endMessage.style.marginTop = '30px'
endMessage.style.textAlign='center'
board.after(endMessage)
I have defined the win states of the game in an array.

const winning_combinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
I’ve created functions to provide the necessary controls. I created a function called checkWin to check the win status of the game. When one of the states in the array is satisfied, the relevant player will win the game.

function checkWin(currentPlayer) {
    for(let i = 0; i < winning_combinations.length; i++){
        const [a, b, c] = winning_combinations[i]
        if(squares[a].textContent === currentPlayer && squares[b].textContent === currentPlayer && squares[c].textContent === currentPlayer){
            return true
        }
    }
    return false
}
I created a function called checkTie to check the draw status. I controlled the texts in all the created frames through the for loop. This way, the function returns true when all are full and no winning status is met.

function checkTie(){
    for(let i = 0; i < squares.length; i++) {
        if(squares[i].textContent === '') {
            return false;
        }
    }
    return true
}
I created a function called “restartButton” to reset the actions when the game is restarted. We assign the values in the square to “”. Then I assigned the message that the game will show at the beginning to endMessage.textContent. I have assigned the default player to X again.

function restartButton() {
    for(let i = 0; i < squares.length; i++) {
        squares[i].textContent = ""
    }
    endMessage.textContent=`X's turn!`
    currentPlayer = players[0]
}
I used it in the for loop to check the generated functions in the game. In this loop, when each frame is clicked, the game state will be printed on the screen with the endMessage variable, provided that certain conditions are met. I did this using the addEventListener method.

for(let i = 0; i < squares.length; i++){
    squares[i].addEventListener('click', () => {
        if(squares[i].textContent !== ''){
            return
        }
        squares[i].textContent = currentPlayer
        if(checkWin(currentPlayer)) {
            endMessage.textContent=`Game over! ${currentPlayer} wins!`
            return
        }
        if(checkTie()) {
            endMessage.textContent= `Game is tied!`
            return
        }
        currentPlayer = (currentPlayer === players[0]) ? players[1] : players[0] 
        if(currentPlayer == players[0]) {
            endMessage.textContent= `X's turn!`
        } else {
            endMessage.textContent= `O's turn!`
        }     
    })   
}
