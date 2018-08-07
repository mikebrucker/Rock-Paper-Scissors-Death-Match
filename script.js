var match = 1;
var playerWins = 0;
var computerWins = 0;
var ties = 0;
var browserHeight;
var playerInput;

function choose() { 
    document.querySelector('#choose').style = 'display: block';
    document.querySelector('#modalContent').innerHTML = "<img src='images/thumbsup.png' /><p>Enter your name to win fake money!</p><p><input type='text' id='inputEmail' /></p><p><input type='checkbox' name='checkbox' id='checkbox' /><label for='checkbox'>Agree to fake terms</label></p><p><button id='submit' type='submit' onclick='submitEmail()'>Enter Name</button></p>";
}

function closeModal() {
    document.querySelector('#choose').style.opacity = 0;
    document.querySelector('#choose').style.transition = 'opacity 1.5s';
    window.setTimeout(closeTransition, 2001);
}

function closeTransition() {
    document.querySelector('#choose').style = 'display: none';
}

function heightContainer() {
    browserHeight = parseInt(window.innerHeight);
    document.querySelector('.container').style.height = (browserHeight + 'px');
    document.querySelector('#choose').style.height = (browserHeight + 'px');
}

function rock() {
    document.querySelector('#rock').style.transform = 'scale(10)';
    document.querySelector('#rock').style.transition = 'transform 1.5s';
    closeModal();
    playerInput = 'rock';
    start();
}

function paper() {
    document.querySelector('#paper').style.transform = 'scale(10)';
    document.querySelector('#paper').style.transition = 'transform 1.5s';
    closeModal();
    playerInput = 'paper';
    start();
}

function scissors() {
    document.querySelector('#scissors').style.transform = 'scale(10)';
    document.querySelector('#scissors').style.transition = 'transform 1.5s';
    closeModal();
    playerInput = 'scissors';
    start();
}

function begin() {
    document.querySelector('#playerWeapon').innerHTML = '';
    document.querySelector('#computerWeapon').innerHTML = '';
    document.querySelector('#choose').style = 'display: block';
    var resetImages = document.querySelectorAll('.images img');
    for(var i = 0; i < resetImages.length; i++) {
        resetImages[i].style.transform = 'scale(1)';
    }
    document.images.style.width = '150px';
}

function quit() {
    closeModal();
    playerInput = 'quit';
    start();
}

document.addEventListener('keypress', function (event) {
    var keyName = event.key;
    if (keyName == 'g') {
        begin();
    } else if (keyName == 'q') {
        quit();
    } else if (keyName == 'r') {
        rock();
    } else if (keyName == 'p') {
        paper();
    } else if (keyName == 's') {
        scissors();
    }
});

function randomFrom(array) {
    return array[(Math.floor(Math.random() * 3))];
}

function checkInput(input, computerChoice) {
    if (input === "quit") {
        return false;
    } else if ((computerChoice === "rock") && (input === "scissors")) {
        document.querySelector('#playerWeapon').innerHTML = '<img src="images/scissors.png" />'
        document.querySelector('#computerWeapon').innerHTML = '<img src="images/rock.png" />'
        computerWins++;
        console.log('Match: ' + match + ' Scissors vs Rock, Computer Wins');
        return true;
    } else if ((computerChoice === "scissors") && (input === "paper")) {
        document.querySelector('#playerWeapon').innerHTML = '<img src="images/paper.png" />'
        document.querySelector('#computerWeapon').innerHTML = '<img src="images/scissors.png" />'
        computerWins++;
        console.log('Match: ' + match + ' Paper vs Scissors, Computer Wins');
        return true;
    } else if ((computerChoice === "paper") && (input === "rock")) {
        document.querySelector('#playerWeapon').innerHTML = '<img src="images/rock.png" />'
        document.querySelector('#computerWeapon').innerHTML = '<img src="images/paper.png" />'
        computerWins++;
        console.log('Match: ' + match + ' Rock vs Paper, Computer Wins');
        return true;
    } else if ((computerChoice === "paper") && (input === "scissors")) {
        document.querySelector('#playerWeapon').innerHTML = '<img src="images/scissors.png" />'
        document.querySelector('#computerWeapon').innerHTML = '<img src="images/paper.png" />'
        playerWins++;
        console.log('Match: ' + match + ' Scissors vs Paper, Player 1 Wins');
        return true;
    } else if ((computerChoice === "scissors") && (input === "rock")) {
        document.querySelector('#playerWeapon').innerHTML = '<img src="images/rock.png" />'
        document.querySelector('#computerWeapon').innerHTML = '<img src="images/scissors.png" />'
        playerWins++;
        console.log('Match: ' + match + ' Rock vs Scissors, Player 1 Wins');
        return true;
    } else if ((computerChoice === "rock") && (input === "paper")) {
        document.querySelector('#playerWeapon').innerHTML = '<img src="images/paper.png" />'
        document.querySelector('#computerWeapon').innerHTML = '<img src="images/rock.png" />'
        playerWins++;
        console.log('Match: ' + match + ' Paper vs Rock, Player 1 Wins');
        return true;
    } else if ((computerChoice === "paper") && (input === "paper")) {
        document.querySelector('#playerWeapon').innerHTML = '<img src="images/paper.png" />'
        document.querySelector('#computerWeapon').innerHTML = '<img src="images/paper.png" />'
        ties++;
        console.log('Match: ' + match + ' Both Used Paper');
        return true;
    } else if ((computerChoice === "scissors") && (input === "scissors")) {
        document.querySelector('#playerWeapon').innerHTML = '<img src="images/scissors.png" />'
        document.querySelector('#computerWeapon').innerHTML = '<img src="images/scissors.png" />'
        ties++;
        console.log('Match: ' + match + ' Both Used Scissors');
        return true;
    } else if ((computerChoice === "rock") && (input === "rock")) {
        document.querySelector('#playerWeapon').innerHTML = '<img src="images/rock.png" />'
        document.querySelector('#computerWeapon').innerHTML = '<img src="images/rock.png" />'
        ties++;
        console.log('Match: ' + match + ' Both Used Rock');
        return true;
    } 
}

function start() {
    gameOver = true;
    computerChoices = ["rock", "paper", "scissors"];
    computerChoice = randomFrom(computerChoices);
    if (computerChoices.includes(playerInput)) {
        gameOver = checkInput(playerInput, computerChoice);
        console.log('[Player Wins: ' + playerWins + '] [Computer Wins: ' + computerWins + '] [Ties: ' + ties + ']');
        match++;
    } else if (playerInput === 'quit') {
        gameOver = checkInput(playerInput, computerChoice);
        if (playerWins > computerWins) {
            console.log('Player 1 beat the Computer: ' + playerWins + ' to ' + computerWins);
        } else if (computerWins > playerWins) {
            console.log('The Computer beat Player 1: ' + computerWins + ' to ' + playerWins);
        } else if (playerWins == computerWins) {
            console.log('Player 1 tied the Computer: ' + playerWins + ' to ' + computerWins);
        }
        match = 1;
        playerWins = 0;
        computerWins = 0;
        ties = 0;
    } 
} 

heightContainer()