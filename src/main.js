import './reset.css'
import './style.css'
import './utility.css'
import {
  getState,
  setState,
  incrementScore,
  nextLevel,
  resetGame,
  getLevelName,
} from './game/state.js'
import {
  getCurrentQuestion,
  getTotalQuestions,
  getQuestionCountAtLevel,
} from './game/questions.js'
import { levels } from './game/levels.js'
import {
  showStartScreen,
  showQuizScreen,
  showResultsScreen,
} from './ui/screens.js'
import {
  renderQuestion,
  showFeedback,
  onOptionSelect,
} from './ui/questionDisplay.js'
import { showModal } from './ui/modal.js'
import {
  updateLevelName,
  updateScore,
  updateResults,
  setResultsMessage,
} from './ui/header.js'

const $bgMusic = document.getElementById('bg-music')
$bgMusic.volume = 0.2

const $soundFinish = document.getElementById('sounds-finish')
$soundFinish.volume = 0.5

function fadeOutMusic(duration = 1000) {
  const startVolume = $bgMusic.volume
  const startTime = performance.now()

  function fade(currentTime) {
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / duration, 1)
    $bgMusic.volume = startVolume * (1 - progress)

    if (progress < 1) {
      requestAnimationFrame(fade)
    } else {
      $bgMusic.pause()
      $bgMusic.volume = startVolume
    }
  }

  requestAnimationFrame(fade)
}

document.addEventListener(
  'click',
  () => {
    if ($bgMusic.paused) {
      $bgMusic.play()
    }
  },
  { once: true },
)

const $startButton = document.querySelector('.start--btn')
const $nextBtn = document.getElementById('next-btn')
const $backBtn = document.getElementById('back-btn')
const $restartBtn = document.getElementById('restart-btn')

function showCurrentQuestion() {
  const state = getState()
  const question = getCurrentQuestion(state.currentQuestionIndex)
  const total = getTotalQuestions()
  renderQuestion(question, state.currentQuestionIndex, total)
}

function handleAnswer(selectedIndex) {
  const state = getState()
  const question = getCurrentQuestion(state.currentQuestionIndex)
  const isCorrect = selectedIndex === question.correct

  if (isCorrect) {
    incrementScore()
    const newState = getState()
    updateScore(newState.score)
  }

  showFeedback(isCorrect, selectedIndex, question.correct)
}

function nextQuestion() {
  const state = getState()
  const newState = getState()
  newState.currentQuestionIndex++
  setState(newState)

  const total = getTotalQuestions()
  if (newState.currentQuestionIndex >= total) {
    showResults()
    return
  }

  const easyCount = getQuestionCountAtLevel(1)
  const mediumQuestions = levels.medium.questions.length

  if (newState.currentQuestionIndex === easyCount) {
    nextLevel()
    updateLevelName(getLevelName())
    showModal('Nivel Medio', levels.medium.message, showCurrentQuestion)
  } else if (newState.currentQuestionIndex === easyCount + mediumQuestions) {
    nextLevel()
    updateLevelName(getLevelName())
    showModal('Nivel Difícil', levels.hard.message, showCurrentQuestion)
  } else {
    showCurrentQuestion()
  }
}

function showResults() {
  showResultsScreen()
  const state = getState()
  const total = getTotalQuestions()
  const percentage = updateResults(state.score, total)
  setResultsMessage(percentage)
  $soundFinish.currentTime = 0
  $soundFinish.play()
}

function startGame() {
  resetGame()
  updateLevelName(getLevelName())
  updateScore(0)

  $bgMusic.play()
  showQuizScreen()
  showCurrentQuestion()
}

$startButton.addEventListener('click', startGame)
$nextBtn.addEventListener('click', nextQuestion)
$backBtn.addEventListener('click', () => {
  $bgMusic.pause()
  $bgMusic.currentTime = 0
  showStartScreen()
})
$restartBtn.addEventListener('click', startGame)

onOptionSelect(handleAnswer)
