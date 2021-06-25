'use strict';
// const randomDice = Math.floor(Math.random() * 6) + 1;
// let imgSrc = dice + randomDice + '.png';
// let scoreA = 0;
// let scoreB = 0
// let totalScoreA = 0;
// let totalScoreB = 0;



// const scoreGen = function (score) {
//     if (imgSrc === 1) {
//         score = 0;
        
//     } else {
//         score += randomDice;
//     }
//     return score;
// }

// const scoreRecord = function (totalScore) {
//     scoreGen();
//     if (totalScore < 100) {
//         totalScore += score;
//     } else {
//         console.log("You win!")
//     }
// }

// const rollDice = document.querySelector('rollDice');
// rollDice.addEventListener('click', scoreGen(score));

// if (imgSrc === 1) {
//     rollDice;
//     scoreGen(score)
// }

// const holdScore = document.querySelector('holdScore');
// holdScore.addEventListener('click', scoreRecord);


// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;

const gameStart = function () {
    // Starting conditions
    scores = [0, 0];
currentScore = 0;
activePlayer = 0;
playing = true;

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
current0El.textContent = 0;
current1El.textContent = 0;

player0El.classList.remove('player--winner');
player1El.classList.remove('player--winner');
player0El.classList.add('player--active');
player1El.classList.remove('player--active');
}

gameStart();

const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
        currentScore = 0;
        activePlayer = activePlayer === 0 ? 1 : 0;
        player0El.classList.toggle('player--active');
        player1El.classList.toggle('player--active');
}



// Rolling dice functionality
btnRoll.addEventListener('click', function () {
    if (playing) {
        // Generate a random dice roll
        const dice = Math.trunc(Math.random() * 6) + 1;
    
        // Display dice
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`;

        // check for rolled 1: if true, switch to next player
        if (dice !== 1 ) {
            // Add dice to current score
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } else {
            // switch to the next player
            switchPlayer();
        }
    }
});

btnHold.addEventListener('click', function() {
    
    if (playing) {
            // Add current to active player's score
            scores[activePlayer] += currentScore;

            // check if player's >= 100
            // if true, finish the game
            document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
    
        if (scores[activePlayer] >= 100) {
            playing = false;
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
            diceEl.classList.add('hidden');
        } else {
            // switch player
            switchPlayer()
        }
    }
});

btnNew.addEventListener('click', gameStart)



document.querySelector('li a').style.color = "red";

document.querySelector('.pre').classList.add('huge');

let info = document.querySelector('h1');

const scores = [0, 0];

let activePlayer = 0;

const player0El = document.querySelector('.player0');
const player1El = document.querySelector('.player1');

//Generate random numbers 
const getScore = function () {
    let random1 = Math.trunc(Math.random() * 6) + 1;
    let random2 = Math.trunc(Math.random() * 6) + 1; 
    return random1 + random2;
} 

let dice1 = `dice${random1}.png`;
let dice2 = 'dice' + random2 + '.png';
let imageSource2 = 'images/' + dice2;

document.querySelectorAll('img')[0].setAttribute('src', `images/${dice1}`);
document.querySelectorAll('img')[1].setAttribute('src', imageSource2);

let score0 = getScore();
let score1 = getScore();



if (score1 === score2) {
    info.textContent = "Draw";
} else {
    if (score1 > score2) {
        info.textContent = "Player 1 Wins!";
    } else {
        info.textContent = "Player 2 Wins!";
    }
}