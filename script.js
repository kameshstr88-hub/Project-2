// Selecting Elements
var inputbox = document.getElementById("inputbox")
var result = document.getElementById("resut")
var guess = document.getElementById("Guess")
var noofguess = 3

// Generate Random Number from 1 t 5
var randomnumber = Math.floor(Math.random() * 10) + 1 //1 to 10
if (randomnumber > 5) {
  randomnumber = randomnumber - 5
}

// Event Handler Function
function update() {
  if (inputbox.value == randomnumber) {
    alert("You Got it Right,Congratulations")
    result.textContent = "You are Right."
  }
  else {
    noofguess = noofguess - 1
    if (noofguess == 0) {
      alert("You lost, Generated Randomnumber is :" +randomnumber)
    }
    guess.textContent ="Available Guesses :" +noofguess
result.textContent = "You are Wrong!!"

  }
}