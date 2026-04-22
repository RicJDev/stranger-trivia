const $questionNumber = document.getElementById('question-number')
const $progressFill = document.getElementById('progress-fill')
const $questionText = document.getElementById('question-text')
const $questionCard = document.getElementById('question-card')
const $options = document.getElementById('options')
const $feedback = document.getElementById('feedback')
const $feedbackText = document.getElementById('feedback-text')
const $soundCorrect = document.getElementById('sounds-correct')
const $soundWrong = document.getElementById('sounds-wrong')
$soundWrong.volume = 0.5

const correctMessages = [
  '¡Correcto! Los amigos no mienten.',
  '¡Bien! Eres un crack.',
  '¡Exacto! Eres uno de los nuestros.',
  '¡Correcto! En Hawkins lo sabíamos.',
  '¡Acertado! Eleven aprobaría esto.',
  '¡Tiro perfecto!',
  '¡Correcto! Sin demogorgon cerca.',
]

const incorrectMessages = [
  'Incorrecto... Vecna te encontró.',
  '¡No! El Azotamentes te ha visto.',
  '¡No! El Mundo Invertido te-tragó.',
  '¡Errado! Intenta escapar de Vecna.',
  '¡Incorrecto! Solo Eleven puede salvarte.',
  '¡Fallaste! El silencio te delató.',
  '¡Incorrecto! Demobat anda cerca.',
]

function getRandomMessage(messages) {
  return messages[Math.floor(Math.random() * messages.length)]
}

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
    $feedbackText.textContent = getRandomMessage(correctMessages)
    $feedbackText.style.color = '#4ade80'
    $soundCorrect.currentTime = 0
    $soundCorrect.play()
  } else {
    buttons[selectedIndex].classList.add('incorrect')
    buttons[correctIndex].classList.add('correct')
    $feedbackText.textContent = getRandomMessage(incorrectMessages)
    $feedbackText.style.color = 'var(--st-red-bright)'
    $soundWrong.currentTime = 0
    $soundWrong.play()
  }

  $feedback.classList.remove('hidden')

  setTimeout(() => {
    $feedback.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }, 100)
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
