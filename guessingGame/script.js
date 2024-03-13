let randomNumber = Math.round(Math.random() * 10)

let i = 0;
function handleTryClick(event) {
  event.preventDefault()

  const inputNumber = document.querySelector("#inputNumber")

  console.log(i)
  i++
  if (Number(inputNumber.value) == randomNumber) {
    document.querySelector(".screen1").classList.add("hide")
    document.querySelector(".screen2").classList.remove("hide")
    document
      .querySelector(".screen2 p").innerText = `Você acertou em ${i} tentativas`
  }
  inputNumber.value = ""

}
function handleResetClick(event) {
  randomNumber = Math.round(Math.random() * 10)
  i = 0
  document.querySelector(".screen1").classList.remove("hide")
  document.querySelector(".screen2").classList.add("hide")
}
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnAgain")

btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)