const squares = document.querySelectorAll('.square')
const mole = document.querySelectorAll('.mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')
const playAgainButton = document.body.querySelector('#playAgain')
const stopGameButton = document.body.querySelector('#stopGame')
const difficulty = document.querySelector('#difficulty')

let result = 0
let currentTime = timeLeft.textContent
let hitPosition;
let countDownTimerId
let moveMoleTimerId
let velocity = 500 // medium

function randomSquare() {
  squares.forEach(className => {
    className.classList.remove('mole')
  })
  let randomPosition = squares[Math.floor(Math.random() * 9)]
  randomPosition.classList.add('mole')

  //assign the id of the randomPosition to hitPosition for us to use later
  hitPosition = randomPosition.id
}

const moveMole = () => {
  return setInterval(randomSquare, velocity)
}

squares.forEach(square => {
  square.addEventListener('mouseup', () => {
    if(square.id === hitPosition){
      square.classList.add('catched')
      setTimeout(() => {
        square.classList.remove('catched')
      }, velocity - 100);
      result = result + 1
      score.textContent = result
      hitPosition = null
    }
  })
})


const stopGame = () => {
  timeLeft.textContent = 0
  clearInterval(countDownTimerId)
  clearInterval(moveMoleTimerId)
  stopGameButton.classList.add('hidden')
  playAgainButton.classList.remove('hidden')
  difficulty.classList.remove('hidden')
}

const countDown = () => {
  currentTime--
  timeLeft.textContent = currentTime

  if(currentTime === 0 ) {
    stopGame()
    alert(`Round finished! Your final score is ${result}`)
  }
}

const startCountDown = () => (setInterval(countDown, 1000))

const setDifficulty = () => {
  const radios = document.getElementsByName('difficulty');

  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      velocity = parseInt(radios[i].value);
      break;
    }
  }
}

// moveMoleTimerId = moveMole()
// countDownTimerId = startCountDown()



const restartGame = () => {
  setDifficulty();
  // restart timer
  currentTime = 60;
  timeLeft.textContent = currentTime;
  // restart results
  result = 0
  score.textContent = result
  // restart game
  moveMoleTimerId = moveMole()
  countDownTimerId = startCountDown()
}

stopGameButton.addEventListener('click', () => {
  stopGame();
})

playAgainButton.addEventListener('click', () => {
  stopGameButton.classList.remove('hidden');
  playAgainButton.classList.add('hidden');
  playAgainButton.textContent = 'Play Again!';
  difficulty.classList.add('hidden');
  restartGame();
})