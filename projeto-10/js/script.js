import { Modal } from './modal.js';
import { Alert } from "./alert.js";
import { IMC, notNumber } from "./utils.js";
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')
const alertError = document.querySelector('.alert')

form.onsubmit = event => {
  event.preventDefault()

  const weight = inputWeight.value
  const height = inputHeight.value

  const showAlertError = notNumber(weight) || notNumber(height)
  if (showAlertError) {
    Alert.open()
    return;
  }

  Alert.close()

  const result = IMC(weight, height)
}

function DisplayResultMessage(result) {
  const message = `Seu IMC é de ${result}`
  Modal.message.innerText = message
  Modal.open()
}
inputHeight.oninput = () => Alert.close()
inputWeight.oninput = () => Alert.close()