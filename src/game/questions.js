import { levels } from './levels.js'

export function getAllQuestions() {
  return levels.easy.questions.concat(levels.medium.questions, levels.hard.questions)
}

export function getCurrentQuestion(index) {
  const all = getAllQuestions()
  return all[index]
}

export function getTotalQuestions() {
  return getAllQuestions().length
}

export function getLevelQuestionCount(levelKey) {
  return levels[levelKey]?.questions.length || 0
}

export function getLevelMessage(levelKey) {
  return levels[levelKey]?.message || ''
}

export function getQuestionCountAtLevel(levelIndex) {
  const levelKeys = ['easy', 'medium', 'hard']
  let count = 0
  for (let i = 0; i < levelIndex; i++) {
    count += getLevelQuestionCount(levelKeys[i])
  }
  return count
}