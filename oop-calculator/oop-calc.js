class Calculator {
    expression = '';
    result = '';

    read (userInput) {
        this.expression = userInput
    }

    evaluate (exp) {
        let result = eval(exp || this.expression)
        this.result = result
    }

    sin (exp) {
        let result = eval(this.expression)
        this.result = Math.sin(result)
    }
}

let ourCalculator = new Calculator()
// ourCalculator.read(prompt('Enter an expression...'))
// ourCalculator.evaluate()
// alert(`The result is ${ourCalculator.result}`)

const calcForm = document.querySelector('#calc-form')
const calcFormBtn = document.querySelector('#calc-form button')
const userInput = document.querySelector('#userInput')
const resultDisplay = document.querySelector('#result-box h1')
// const resetBtn = document.querySelector('#result-box button')

function handleCalcuation (evt) {
    evt.preventDefault()
    if (evt.altKey || evt.key === 'Enter' && evt.altKey) {
        ourCalculator.read(userInput.value)
        ourCalculator.sin()
        altKeyPressed = false
    } else {
        ourCalculator.read(userInput.value)
        ourCalculator.evaluate()
    }

    resultDisplay.textContent = `Result is ${ourCalculator.result}`
}

calcForm.addEventListener('submit', (evt) => evt.preventDefault())
calcFormBtn.addEventListener('click', handleCalcuation)
window.addEventListener('keypress', handleCalcuation)

// resetBtn.addEventListener('click', () => {
//     userInput.value = ''
//     resultDisplay.textContent = ''
// })