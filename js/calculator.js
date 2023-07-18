const calculator = document.querySelector('#calculator-button')
const calculatorBody = document.querySelector('#calculator-body')
calculator.addEventListener('click', function() {
    calculatorBody.classList = calculatorBody.classList.contains('hidden') ? 'calculator-body' : 'hidden'
    calculator.textContent = calculatorBody.classList.contains('hidden') ? 'Calculator' : 'Hide Calculator'
}
)


const numericKey = document.querySelectorAll('#numeric-key')
const operatorKey = document.querySelectorAll('#operator-key')
const clearKey = document.querySelector('#clear-key')
const display = document.querySelector('.calculator-display')
const equalsKey = document.querySelector('#equals-key')

let firstOperand = ''
let secondOperand = ''
let operator = ''
let result = ''

numericKey.forEach(function(key) {
    key.addEventListener('click', function() {
        if (operator === '') {
            firstOperand += key.textContent
            display.textContent = firstOperand
        } else {
            secondOperand += key.textContent
            display.textContent = secondOperand
        }
    })
}
)

operatorKey.forEach(function(key) {
    key.addEventListener('click', function() {
        operator = key.textContent
        display.textContent = operator
    })
}
)

clearKey.addEventListener('click', function() {
    firstOperand = ''
    secondOperand = ''
    operator = ''
    display.textContent = '0'
}
)

equalsKey.addEventListener('click', function() {
    if (operator === '+') {
        result = parseInt(firstOperand) + parseInt(secondOperand)
    } else if (operator === '-') {
        result = parseInt(firstOperand) - parseInt(secondOperand)
    } else if (operator === '*') {
        result = parseInt(firstOperand) * parseInt(secondOperand)
    } else if (operator === '/') {
        result = parseInt(firstOperand) / parseInt(secondOperand)
    }
    display.textContent = result
    firstOperand = result
    secondOperand = ''
    operator = ''
}
)
