const a = document.getElementById('number-a')
const b = document.getElementById('number-b')
let action = document.getElementById('action')
const inputAnswer = document.getElementById('answer')
const btnCheck = document.getElementById('check')
const btnRefresh = document.getElementById('refresh')
const resultElement = document.getElementById('result')

function getRandomIntInclusive(min, max) {
	const minCeiled = Math.ceil(min);
	const maxFloored = Math.floor(max);
	return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

let aMin = 1
let aMax = 10

let bMin = 1
let bMax = 10

const aRandom = getRandomIntInclusive(aMin, aMax)
const bRandom = getRandomIntInclusive(bMin, bMax)

const arrayAction = ['+', '-']
const randomAction = Math.round(Math.random() * (arrayAction.length - 1))

a.textContent = aRandom
b.textContent = bRandom
action.textContent = arrayAction[randomAction]
let actionSymbol = action.textContent

if (aRandom < bRandom && actionSymbol === '-'){
	console.log('actionSymbol minus overwrited to plus')
	actionSymbol = '+'
	action.textContent = '+'
}

btnCheck.onclick = function(){
	const num1 = Number(a.textContent)
	const num2 = Number(b.textContent)
	
	if (actionSymbol == '+'){
		rightAnswer = num1 + num2
	} else if (actionSymbol == '-'){
		rightAnswer = num1 - num2
	}
	const userAnswer = inputAnswer.value
	if(userAnswer == rightAnswer){
		resultElement.innerHTML = 
`<span class="d-block">Вірно!</span>
<span class="d-block fw-bold">${num1} ${actionSymbol} ${num2} = ${rightAnswer}</span>
`
		resultElement.classList.add('text-success')
		resultElement.classList.remove('text-danger')
		btnRefresh.classList.remove('invisible')
	} else if(userAnswer == ''){
		resultElement.textContent = 'Введи, будь-ласка, відповідь!'
		resultElement.classList.add('text-danger')
		resultElement.classList.remove('text-success')
		btnRefresh.classList.add('invisible')
	}
	 else {
		resultElement.textContent = 'Перерахуй, будь-ласка!'
		resultElement.classList.add('text-danger')
		resultElement.classList.remove('text-success')
		btnRefresh.classList.add('invisible')
	}
}

btnRefresh.onclick = function(){
	location.reload();
}

/* document.addEventListener('keydown', event => {
	if(event.code === 'Enter' | event.code === 'NumpadEnter') {
		const num1 = Number(a.textContent)
		const num2 = Number(b.textContent)
		const rightAnswer = num1 + num2
		const userAnswer = inputAnswer.value
		if(userAnswer == rightAnswer){
			resultElement.textContent = 'Вірна відповідь!'
			resultElement.classList.add('text-success')
			resultElement.classList.remove('text-danger')
		} else if(userAnswer == ''){
			resultElement.textContent = 'Введи, будь-ласка, відповідь!'
			resultElement.classList.add('text-danger')
			resultElement.classList.remove('text-success')
		}
			else {
			resultElement.textContent = 'Перерахуй, будь-ласка!'
			resultElement.classList.add('text-danger')
			resultElement.classList.remove('text-success')
		}
	}
}) */

