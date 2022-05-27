var value = document.getElementById('value')
var valueText = value.innerHTML
var currentNumber = 0

function decrement() {
    currentNumber -= 1
    value.innerHTML = currentNumber
}

function increment() {
    currentNumber += 1
    value.innerHTML = currentNumber
}



