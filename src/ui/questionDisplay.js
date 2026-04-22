const $questionNumber = document.getElementById('question-number')
const $progressFill = document.getElementById('progress-fill')
const $questionText = document.getElementById('question-text')
const $questionCard = document.getElementById('question-card')
const $options = document.getElementById('options')
const $feedback = document.getElementById('feedback')
const $feedbackText = document.getElementById('feedback-text')

export function renderQuestion(question, currentIndex, total) {
  $questionNumber.textContent = `Pregunta ${currentIndex + 1}/${total}`
  $progressFill.style.width = `${((currentIndex + 1) / total) * 100}%`
  $questionText.textContent = question.text

  $options.innerHTML = ''
  question.options.forEach((option, index) => {
    const button = document.createElement('button')
    button.className = 'quiz--option'
    button.textContent = option
    button.dataset.index = index
    button.addEventListener('click', () => handleOptionClick(index))
    $options.appendChild(button)
  })

  $feedback.classList.add('hidden')
  $questionCard.classList.remove('hidden')
}

export function showFeedback(isCorrect, selectedIndex, correctIndex) {
  const buttons = $options.querySelectorAll('.quiz--option')
  buttons.forEach((btn) => (btn.disabled = true))

  if (isCorrect) {
    buttons[selectedIndex].classList.add('correct')
    $feedbackText.textContent = '¡Correcto! Los amigos no mienten.'
    $feedbackText.style.color = '#4ade80'
  } else {
    buttons[selectedIndex].classList.add('incorrect')
    buttons[correctIndex].classList.add('correct')
    $feedbackText.textContent = 'Incorrecto... Vecna strike.'
    $feedbackText.style.color = 'var(--st-red-bright)'
  }

  $feedback.classList.remove('hidden')
}

export function enableOptions() {
  const buttons = $options.querySelectorAll('.quiz--option')
  buttons.forEach((btn) => (btn.disabled = false))
}

export function clearOptions() {
  $options.innerHTML = ''
}

let optionCallback = null

export function onOptionSelect(callback) {
  optionCallback = callback
}

function handleOptionClick(index) {
  if (optionCallback) {
    optionCallback(index)
  }
}
