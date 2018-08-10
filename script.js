var match = 1;
var playerWins = 0;
var computerWins = 0;
var ties = 0;
var browserHeight;
var playerInput;
var rock = document.querySelector('#rock');
var paper = document.querySelector('#paper');
var scissors = document.querySelector('#scissors');
var choose = document.querySelector('#choose');
var playerWeapon = document.querySelector('#playerWeapon');
var computerWeapon = document.querySelector('#computerWeapon');
var matchInfo = document.querySelector('#matchInfo');
var pWins = document.querySelector('#pWins');
var cWins = document.querySelector('#cWins');
var tiess = document.querySelector('#tiess');

function choose() { 
    choose.style = 'display: block';
    document.querySelector('#modalContent').innerHTML = 'asdf'
}

function closeModal() {
    choose.style.opacity = 0;
    choose.style.transition = 'opacity 1.5s';
    window.setTimeout(closeTransition, 2001);
}

function closeTransition() {
    choose.style = 'display: none';
}

function heightContainer() {
    browserHeight = parseInt(window.innerHeight);
    document.querySelector('.container').style.height = (browserHeight + 'px');
    choose.style.height = (browserHeight + 'px');
}

function rockPick() {
    rock.style.transform = 'scale(10)';
    rock.style.transition = 'transform 1.5s';
    closeModal();
    playerInput = 'rock';
    start();
}

function paperPick() {
    paper.style.transform = 'scale(10)';
    paper.style.transition = 'transform 1.5s';
    closeModal();
    playerInput = 'paper';
    start();
}

function scissorsPick() {
    scissors.style.transform = 'scale(10)';
    scissors.style.transition = 'transform 1.5s';
    closeModal();
    playerInput = 'scissors';
    start();
}

function begin() {
    playerWeapon.innerHTML = '';
    computerWeapon.innerHTML = '';
    choose.style = 'display: block';
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

function battleFadeIn() { 
    playerWeapon.style.opacity = 0;
    computerWeapon.style.opacity = 0;
    setTimeout(battleFadeIn2, 1501);
}
function battleFadeIn2() {
    playerWeapon.style.opacity = 1;
    computerWeapon.style.opacity = 1;
    playerWeapon.style.transition = 'opacity 2s';
    computerWeapon.style.transition = 'opacity 2s';
}

document.addEventListener('keypress', function (event) {
    var keyName = event.key;
    if (keyName == 'g') {
        begin();
    } else if (keyName == 'q') {
        quit();
    } else if (keyName == 'r') {
        rockClick();
    } else if (keyName == 'p') {
        paperPick();
    } else if (keyName == 's') {
        scissorsPick();
    }
});

function randomFrom(array) {
    return array[(Math.floor(Math.random() * 3))];
}

function checkInput(input, computerChoice) {
    if (input === "quit") {
        return false;
    } else if ((computerChoice === "rock") && (input === "scissors")) {
        playerWeapon.innerHTML = '<img src="images/scissors.png" />'
        computerWeapon.innerHTML = '<img src="images/rock.png" />'
        playerWeapon.style.opacity = 0;
        computerWeapon.style.opacity = 0;
        battleFadeIn();
        computerWins++;
        matchInfo.innerHTML = 'Match ' + match + ': Scissors vs Rock, Computer Wins';
        return true;
    } else if ((computerChoice === "scissors") && (input === "paper")) {
        playerWeapon.innerHTML = '<img src="images/paper.png" />'
        computerWeapon.innerHTML = '<img src="images/scissors.png" />'
        playerWeapon.style.opacity = 0;
        computerWeapon.style.opacity = 0;
        battleFadeIn();
        computerWins++;
        matchInfo.innerHTML = 'Match ' + match + ': Paper vs Scissors, Computer Wins';
        return true;
    } else if ((computerChoice === "paper") && (input === "rock")) {
        playerWeapon.innerHTML = '<img src="images/rock.png" />'
        computerWeapon.innerHTML = '<img src="images/paper.png" />'
        playerWeapon.style.opacity = 0;
        computerWeapon.style.opacity = 0;
        battleFadeIn();
        computerWins++;
        matchInfo.innerHTML = 'Match ' + match + ': Rock vs Paper, Computer Wins';
        return true;
    } else if ((computerChoice === "paper") && (input === "scissors")) {
        playerWeapon.innerHTML = '<img src="images/scissors.png" />'
        computerWeapon.innerHTML = '<img src="images/paper.png" />'
        playerWeapon.style.opacity = 0;
        computerWeapon.style.opacity = 0;
        battleFadeIn();
        playerWins++;
        matchInfo.innerHTML = 'Match ' + match + ': Scissors vs Paper, Player 1 Wins';
        return true;
    } else if ((computerChoice === "scissors") && (input === "rock")) {
        playerWeapon.innerHTML = '<img src="images/rock.png" />'
        computerWeapon.innerHTML = '<img src="images/scissors.png" />'
        playerWeapon.style.opacity = 0;
        computerWeapon.style.opacity = 0;
        battleFadeIn();
        playerWins++;
        matchInfo.innerHTML = 'Match ' + match + ': Rock vs Scissors, Player 1 Wins';
        return true;
    } else if ((computerChoice === "rock") && (input === "paper")) {
        playerWeapon.style.opacity = 0;
        computerWeapon.style.opacity = 0;
        playerWeapon.innerHTML = '<img src="images/paper.png" />'
        computerWeapon.innerHTML = '<img src="images/rock.png" />'
        battleFadeIn();
        playerWins++;
        matchInfo.innerHTML = 'Match ' + match + ': Paper vs Rock, Player 1 Wins';
        return true;
    } else if ((computerChoice === "paper") && (input === "paper")) {
        playerWeapon.innerHTML = '<img src="images/paper.png" />'
        computerWeapon.innerHTML = '<img src="images/paper.png" />'
        playerWeapon.style.opacity = 0;
        computerWeapon.style.opacity = 0;
        battleFadeIn();
        ties++;
        matchInfo.innerHTML = 'Match ' + match + ': Both Used Paper';
        return true;
    } else if ((computerChoice === "scissors") && (input === "scissors")) {
        playerWeapon.innerHTML = '<img src="images/scissors.png" />'
        computerWeapon.innerHTML = '<img src="images/scissors.png" />'
        playerWeapon.style.opacity = 0;
        computerWeapon.style.opacity = 0;
        battleFadeIn();
        ties++;
        matchInfo.innerHTML = 'Match ' + match + ': Both Used Scissors';
        return true;
    } else if ((computerChoice === "rock") && (input === "rock")) {
        playerWeapon.innerHTML = '<img src="images/rock.png" />'
        computerWeapon.innerHTML = '<img src="images/rock.png" />'
        playerWeapon.style.opacity = 0;
        computerWeapon.style.opacity = 0;
        battleFadeIn();
        ties++;
        matchInfo.innerHTML = 'Match ' + match + ': Both Used Rock';
        return true;
    } 
}

function start() {
    gameOver = true;
    computerChoices = ["rock", "paper", "scissors"];
    computerChoice = randomFrom(computerChoices);
    if (computerChoices.includes(playerInput)) {
        gameOver = checkInput(playerInput, computerChoice);
        pWins.innerHTML = ' Wins: ' + playerWins;
        cWins.innerHTML = ' Losses: ' + computerWins;
        tiess.innerHTML = ' Ties: ' + ties;
        match++;
    } else if (playerInput === 'quit') {
        gameOver = checkInput(playerInput, computerChoice);
        if (playerWins > computerWins) {
            matchInfo.innerHTML = 'Player 1 beat the Computer: ' + playerWins + ' to ' + computerWins;
        } else if (computerWins > playerWins) {
            matchInfo.innerHTML = 'The Computer beat Player 1: ' + computerWins + ' to ' + playerWins;
        } else if (playerWins == computerWins) {
            matchInfo.innerHTML = 'Player 1 tied the Computer: ' + playerWins + ' to ' + computerWins;
        }
        match = 1;
        playerWins = 0;
        computerWins = 0;
        ties = 0;
    } 
} 

heightContainer()