const LEVEL_ORDER = ['easy', 'medium', 'hard']
const LEVEL_NAMES = { easy: 'Facil', medium: 'Medio', hard: 'Dificil' }

let state = {
  currentLevelIndex: 0,
  currentQuestionIndex: 0,
  score: 0,
  isPaused: false,
}

export function getState() {
  return { ...state }
}

export function setState(newState) {
  state = { ...state, ...newState }
}

export function getCurrentLevelKey() {
  return LEVEL_ORDER[state.currentLevelIndex]
}

export function getLevelName() {
  return LEVEL_NAMES[getCurrentLevelKey()]
}

export function getLevelOrder() {
  return LEVEL_ORDER
}

export function getLevelNames() {
  return LEVEL_NAMES
}

export function incrementScore() {
  state.score++
}

export function nextQuestionIndex() {
  state.currentQuestionIndex++
}

export function setPaused(paused) {
  state.isPaused = paused
}

export function nextLevel() {
  if (state.currentLevelIndex < LEVEL_ORDER.length - 1) {
    state.currentLevelIndex++
  }
}

export function resetGame() {
  state = {
    currentLevelIndex: 0,
    currentQuestionIndex: 0,
    score: 0,
    isPaused: false,
  }
}
