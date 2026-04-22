const $levelName = document.getElementById('level-name')
const $score = document.getElementById('score')

export function updateLevelName(name) {
  $levelName.textContent = name
}

export function updateScore(score) {
  $score.textContent = score
}

export function updateResults(score, total) {
  const percentage = Math.round((score / total) * 100)
  document.getElementById('final-score').textContent = `${score}/${total} (${percentage}%)`
  return percentage
}

export function setResultsMessage(percentage) {
  const $resultsMessage = document.getElementById('results-message')
  
  if (percentage === 100) {
    $resultsMessage.textContent = '¡Increíble! Eres un verdadero fan de Stranger Things. Has sobrevivido al Upside Down.'
  } else if (percentage >= 70) {
    $resultsMessage.textContent = '¡Muy bien! Conoces Hawkins mejor que la mayoría. Pero ten cuidado con Vecna.'
  } else if (percentage >= 40) {
    $resultsMessage.textContent = 'No está mal... Pero necesitas volver a Hawkins. ¿Sabías que Dustin tiene una mascota?'
  } else {
    $resultsMessage.textContent = 'Hmm... ¿Vives en el Upside Down? Deberías regresar a Hawkins. El Demogorgon te espera.'
  }
}