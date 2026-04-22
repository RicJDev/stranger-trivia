import './reset.css'
import './style.css'
import './utility.css'
import {
  getState,
  setState,
  incrementScore,
  nextQuestionIndex,
  nextLevel,
  resetGame,
  getCurrentLevelKey,
  getLevelName,
} from './game/state.js'
import {
  getAllQuestions,
  getCurrentQuestion,
  getTotalQuestions,
  getLevelMessage,
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
$bgMusic.volume = 0.3

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
  if (state.currentQuestionIndex >= total) {
    showResults()
    return
  }

  const easyCount = getQuestionCountAtLevel(1)
  const mediumCount = getQuestionCountAtLevel(2)

  if (state.currentQuestionIndex === easyCount) {
    nextLevel()
    const newState2 = getState()
    updateLevelName(getLevelName())
    showModal('Nivel Medio', levels.medium.message, showCurrentQuestion)
  } else if (state.currentQuestionIndex === easyCount + mediumCount) {
    nextLevel()
    const newState3 = getState()
    updateLevelName(getLevelName())
    showModal('Nivel Dificil', levels.hard.message, showCurrentQuestion)
  } else {
    showCurrentQuestion()
  }
}

function showResults() {
  $bgMusic.pause()
  showResultsScreen()
  const state = getState()
  const total = getTotalQuestions()
  const percentage = updateResults(state.score, total)
  setResultsMessage(percentage)
}

function startGame() {
  resetGame()
  const state = getState()
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
  showStartScreen()
})
$restartBtn.addEventListener('click', startGame)

onOptionSelect(handleAnswer)

