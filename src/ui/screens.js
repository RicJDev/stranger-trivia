const $startScreen = document.querySelector('.start')
const $quizScreen = document.querySelector('.quiz')
const $resultsScreen = document.getElementById('results-screen')

export function showStartScreen() {
  $startScreen.classList.remove('hidden')
  $quizScreen.classList.add('hidden')
  $resultsScreen.classList.add('hidden')
}

export function showQuizScreen() {
  $startScreen.classList.add('hidden')
  $resultsScreen.classList.add('hidden')
  $quizScreen.classList.remove('hidden')
}

export function showResultsScreen() {
  $quizScreen.classList.add('hidden')
  $resultsScreen.classList.remove('hidden')
}

export function hideAllScreens() {
  $startScreen.classList.add('hidden')
  $quizScreen.classList.add('hidden')
  $resultsScreen.classList.add('hidden')
}
