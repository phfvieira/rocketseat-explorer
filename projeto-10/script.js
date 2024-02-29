const biscuitClosed = document.querySelector("#biscuit");
const buttonAgain = document.querySelector("#again");
function handleClick(event) {
  toggle();
}

function toggle(event) {
  document.querySelector(".screen1").classList.toggle("hide")
  document.querySelector(".screen2").classList.toggle("hide")
}
biscuitClosed.addEventListener('click', handleClick)
buttonAgain.addEventListener('click', handleClick)