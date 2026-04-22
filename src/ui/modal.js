const $levelModal = document.getElementById('level-modal')
const $modalTitle = document.getElementById('modal-title')
const $modalMessage = document.getElementById('modal-message')
const $modalBtn = document.getElementById('modal-btn')

let modalCallback = null

export function showModal(title, message, onContinue) {
  $modalTitle.textContent = title
  $modalMessage.textContent = message
  $levelModal.classList.remove('hidden')
  modalCallback = onContinue
}

export function hideModal() {
  $levelModal.classList.add('hidden')
  if (modalCallback) {
    modalCallback()
    modalCallback = null
  }
}

$modalBtn.addEventListener('click', hideModal)
