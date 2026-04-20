import './reset.css'
import './style.css'
import './utility.css'

const $startScreen = document.querySelector('.start')
const $startButton = document.querySelector('.start button')
const $quizScreen = document.querySelector('.quiz')

$startButton.addEventListener('click', () => {
  $startScreen.classList.add('hidden')
  $quizScreen.classList.remove('hidden')
})

