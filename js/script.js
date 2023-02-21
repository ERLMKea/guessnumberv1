console.log("jeg er i script")

const lblMessage = document.querySelector(".message")
const lblNumber = document.querySelector(".number")
const lblScore = document.querySelector(".score")
const inpGuess = document.querySelector(".guess")
console.log(inpGuess)
const pbAgain = document.querySelector(".again")

inpGuess.value = 10

const pbCheck = document.querySelector(".check")

let rannumb = 0
function genRandomNumber() {
    const ran = Math.random()*20
    const rannumb = Math.trunc(ran)+1
    console.log(rannumb)
}

function checkNumber(e) {
    console.log(inpGuess.value)
    if
}

pbCheck.addEventListener('click', checkNumber)



