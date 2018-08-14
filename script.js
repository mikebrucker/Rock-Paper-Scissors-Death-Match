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

function closeModal() {
    choose.style.opacity = 0;
    choose.style.transition = 'opacity 1.5s';
    window.setTimeout(closeTransition, 1501);
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
    matchInfo.style = 'display: none';
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
    playerWeapon.style = 'display: none'; 
    computerWeapon.style = 'display: none'; 
    matchInfo.style = 'display: none'; 
    playerWeapon.style = 'display: block'; 
    computerWeapon.style = 'display: block'; 
    matchInfo.style = 'display: block'; 
    playerWeapon.style.opacity = 0;
    computerWeapon.style.opacity = 0;
    matchInfo.style.opacity = 0;
    setTimeout(battleFadeIn2, 1600);
}

function battleFadeIn2() {
    playerWeapon.style.opacity = 1;
    computerWeapon.style.opacity = 1;
    matchInfo.style.opacity = 1;
    playerWeapon.style.transition = 'opacity 1s';
    computerWeapon.style.transition = 'opacity 1s';
    matchInfo.style.transition = 'opacity 1s';
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
    if ((computerChoice === "rock") && (input === "scissors")) {
        battleFadeIn();
        playerWeapon.innerHTML = '<img src="images/scissors.png" />'
        computerWeapon.innerHTML = '<img src="images/rock.png" />'
        matchInfo.innerHTML = 'Match ' + match + ': Scissors vs Rock, Computer Wins';
        setTimeout(function(){computerWins++}, 2400);
        return true;
    } else if ((computerChoice === "scissors") && (input === "paper")) {
        battleFadeIn();
        playerWeapon.innerHTML = '<img src="images/paper.png" />'
        computerWeapon.innerHTML = '<img src="images/scissors.png" />'
        matchInfo.innerHTML = 'Match ' + match + ': Paper vs Scissors, Computer Wins';
        setTimeout(function(){computerWins++}, 2400);        
        return true;
    } else if ((computerChoice === "paper") && (input === "rock")) {
        battleFadeIn();
        playerWeapon.innerHTML = '<img src="images/rock.png" />'
        computerWeapon.innerHTML = '<img src="images/paper.png" />'
        matchInfo.innerHTML = 'Match ' + match + ': Rock vs Paper, Computer Wins';
        setTimeout(function(){computerWins++}, 2400);        
        return true;
    } else if ((computerChoice === "paper") && (input === "scissors")) {
        battleFadeIn();
        playerWeapon.innerHTML = '<img src="images/scissors.png" />'
        computerWeapon.innerHTML = '<img src="images/paper.png" />'
        matchInfo.innerHTML = 'Match ' + match + ': Scissors vs Paper, Player 1 Wins';
        setTimeout(function(){playerWins++}, 2400);        
        return true;
    } else if ((computerChoice === "scissors") && (input === "rock")) {
        battleFadeIn();
        playerWeapon.innerHTML = '<img src="images/rock.png" />'
        computerWeapon.innerHTML = '<img src="images/scissors.png" />'
        matchInfo.innerHTML = 'Match ' + match + ': Rock vs Scissors, Player 1 Wins';
        setTimeout(function(){playerWins++}, 2400);        
        return true;
    } else if ((computerChoice === "rock") && (input === "paper")) {
        battleFadeIn();
        playerWeapon.innerHTML = '<img src="images/paper.png" />'
        computerWeapon.innerHTML = '<img src="images/rock.png" />'
        matchInfo.innerHTML = 'Match ' + match + ': Paper vs Rock, Player 1 Wins';
        setTimeout(function(){playerWins++}, 2400);        
        return true;
    } else if ((computerChoice === "paper") && (input === "paper")) {
        battleFadeIn();
        playerWeapon.innerHTML = '<img src="images/paper.png" />'
        computerWeapon.innerHTML = '<img src="images/paper.png" />'
        matchInfo.innerHTML = 'Match ' + match + ': Both Used Paper';
        setTimeout(function(){ties++;}, 2400);
        return true;
    } else if ((computerChoice === "scissors") && (input === "scissors")) {
        battleFadeIn();
        playerWeapon.innerHTML = '<img src="images/scissors.png" />'
        computerWeapon.innerHTML = '<img src="images/scissors.png" />'
        matchInfo.innerHTML = 'Match ' + match + ': Both Used Scissors';
        setTimeout(function(){ties++;}, 2400);        
        return true;
    } else if ((computerChoice === "rock") && (input === "rock")) {
        battleFadeIn();
        playerWeapon.innerHTML = '<img src="images/rock.png" />'
        computerWeapon.innerHTML = '<img src="images/rock.png" />'
        matchInfo.innerHTML = 'Match ' + match + ': Both Used Rock';
        setTimeout(function(){ties++;}, 2400);        
        return true;
    } 
}

function start() {
    gameOver = true;
    computerChoices = ["rock", "paper", "scissors"];
    computerChoice = randomFrom(computerChoices);
    if (computerChoices.includes(playerInput)) {
        gameOver = checkInput(playerInput, computerChoice);
        setTimeout(function() {
        pWins.innerHTML = '&nbsp;&nbsp;Wins: ' + playerWins;
        cWins.innerHTML = '&nbsp;&nbsp;Losses: ' + computerWins;
        tiess.innerHTML = '&nbsp;&nbsp;Ties: ' + ties;}, 2500);
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
            pWins.innerHTML = '&nbsp;&nbsp;Wins: ' + playerWins;
            cWins.innerHTML = '&nbsp;&nbsp;Losses: ' + computerWins;
            tiess.innerHTML = '&nbsp;&nbsp;Ties: ' + ties;
    } 
} 

heightContainer()