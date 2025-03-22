let aNumber = document.getElementById('number-a')
let action = document.getElementById('action')
let bNumber = document.getElementById('number-b')
let checkBtn = document.getElementById('check')
let createBtnHolder = document.getElementById('create-holder')
let inputAnswer = document.getElementById('answer')
let aNumberResult = document.getElementById('number-a-result')
let actionResult = document.getElementById('action-result')
let bNumberResult = document.getElementById('number-b-result')
let rightAnswerResult = document.getElementById('right-answer')
let resultError = document.getElementById('result-error')
let resultSuccess = document.getElementById('result-success')
let maxResult1 = document.getElementById('max-result-1')
let maxResult2 = document.getElementById('max-result-2')

function getRandomIntInclusive(min, max) {
	const minCeiled = Math.ceil(min);
	const maxFloored = Math.floor(max);
	return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

// generated random values
function generatedValues(){
	let aMin = ''
	let aMax = ''
	let bMin = ''
	let bMax = ''
	if (maxResult1.defaultChecked){
		aMin = 0
		aMax = 10
		bMin = 0
		bMax = 10
		maxResult1.setAttribute('disabled', 'disabled')
		maxResult1.parentElement.classList.add('disabled')
	} 
	if(maxResult2.defaultChecked){
		aMin = 0
		aMax = 100
		bMin = 0
		bMax = 100
		maxResult2.setAttribute('disabled', 'disabled')
		maxResult2.parentElement.classList.add('disabled')
	}
	let aRandom = getRandomIntInclusive(aMin, aMax)
	let bRandom = getRandomIntInclusive(bMin, bMax)
	aNumber.innerText = aRandom
	bNumber.innerText = bRandom
	aNumberResult.innerText = aRandom
	bNumberResult.innerText = bRandom
	// random plus/minus
	const arrayAction = ['+', '-']
	const randomAction = Math.round(Math.random() * (arrayAction.length - 1))
	let actionSymbol = arrayAction[randomAction]
	action.innerText = actionSymbol
	if (aRandom < bRandom && action.innerText === '-'){
		// console.log('actionSymbol Minus overwrited to Plus')
		actionSymbol = '+'
		action.innerText = actionSymbol
	}
	
	actionResult.innerText = actionSymbol
	let rightAnswer = aRandom + bRandom
	if (actionSymbol === '-'){
		rightAnswer = aRandom - bRandom
	}
	rightAnswerResult.innerHTML = rightAnswer
}
generatedValues()

function checkAnswer(){
	if (inputAnswer.value == ''){
		resultError.innerText = `Введи, будь-ласка, відповідь!`
		resultSuccess.classList.add('invisible')
		createBtnHolder.innerHTML = `<span>&nbsp;</span>`
	} else if (inputAnswer.value == rightAnswerResult.innerHTML){
		resultSuccess.classList.remove('invisible')
		createBtnHolder.innerHTML = `<button id="create" class="btn btn-create">Новий приклад</button>`
		let createBtn = document.getElementById('create')
		createBtn.onclick = function(event){
			resultSuccess.classList.add('invisible')
			createBtn.classList.add('invisible')
			resultError.innerText = ''
			inputAnswer.value = ''
			generatedValues()
		}
		resultError.innerText = ''
		
	} else {
		resultSuccess.classList.add('invisible')
		createBtnHolder.innerHTML = `<span>&nbsp;</span>`
		resultError.innerText = `Перерахуй, будь-ласка!`
	}
}

maxResult1.onclick = function(event){
	maxResult1.parentElement.classList.add('disabled')
	maxResult2.parentElement.classList.remove('disabled')
	maxResult1.setAttribute('disabled', 'disabled')
	maxResult2.removeAttribute('disabled', 'disabled')
	maxResult1.setAttribute('checked', 'checked')
	maxResult2.removeAttribute('checked', 'checked')
	console.log('maxResult1 clicked')
	generatedValues()
	inputAnswer.value = ''
	resultError.innerText = ''
	resultSuccess.classList.add('invisible')
	createBtnHolder.innerHTML = `<span>&nbsp;</span>`
}
maxResult2.onclick = function(event){
	maxResult1.parentElement.classList.remove('disabled')
	maxResult2.parentElement.classList.add('disabled')
	maxResult2.setAttribute('disabled', 'disabled')
	maxResult1.removeAttribute('disabled', 'disabled')
	maxResult2.setAttribute('checked', 'checked')
	maxResult1.removeAttribute('checked', 'checked')
	console.log('maxResult2 clicked')
	generatedValues()
	inputAnswer.value = ''
	resultError.innerText = ''
	resultSuccess.classList.add('invisible')
	createBtnHolder.innerHTML = `<span>&nbsp;</span>`
}

checkBtn.onclick = function(event){
	checkAnswer()
}

document.addEventListener('keydown', event => {
	if(event.code === 'Enter' | event.code === 'NumpadEnter') {
		checkAnswer()
	}
})