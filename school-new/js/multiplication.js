let expression = document.getElementById('expression')
const selectNumber = document.getElementById('select-number')
let btnCheckHolder = document.getElementById('btn-check-holder')
let btnNewHolder = document.getElementById('btn-new-holder')
let answerStatusHolder = document.getElementById('answer-status')

// create expression
function createExpression(){
	expression.innerHTML = ''
	let selectValue = selectNumber.value
	let num2 = getRandomNumber(1, 9)
	if (selectValue == 'all'){
		selectValue = getRandomNumber(1, 9)
	} else{
		selectValue = selectNumber.value
	}
	if (selectValue != 'empty'){
		expression.insertAdjacentHTML('afterbegin', 
`<div class="row ps-1 pe-1 mb-3 d-flex align-items-center">
	<div class="col col-6 pe-0 text-center fs-3">
		<span id="num1" class="border rounded border-primary pt-1 pb-1 ps-2 pe-2 text-bg-warning fw-bold fs-3">${selectValue}</span>
		<span class="fw-bold">*</span>
		<span id="num2" class="border rounded border-primary pt-1 pb-1 ps-2 pe-2 text-bg-warning fw-bold fs-3">${num2}</span>
		<span class="fw-bold">=</span>
	</div>
	<div class="col col-6 ps-0">
		<input id="user-answer" type="number" class="form-control border-primary text-center w-100 fw-bold fs-3 text-primary" placeholder="Відповідь">
	</div>
</div>`)
		btnCheckHolder.classList.remove('hidden')
	} else if (selectValue == 'empty'){
		expression.innerHTML = ''
		btnCheckHolder.classList.add('hidden')
	}
}
createExpression()

function createBtnCheck(){
	btnCheckHolder.innerHTML = 
`<div class="row ps-3 pe-3 mb-3">
	<button id="btn-check" type="button" class="btn btn-primary w-50 m-auto">Перевірити</button>
</div>`
}
createBtnCheck()

// Random numbers
function getRandomNumber (min, max){
	return Math.round(Math.random() * (max - min) + min)
}

function createBtnNew(){
	btnNewHolder.innerHTML =
`<div class="row ps-3 pe-3 mb-3">
	<button id="btn-new" type="button" class="btn btn-success w-50 m-auto">Новий приклад</button>
</div>`
}
createBtnNew()
let btnNew = document.getElementById('btn-new')

// Select option
selectNumber.onchange = function(event){
	createExpression()
	btnNewHolder.classList.add('hidden')
	answerStatusHolder.innerHTML = ''
}

function calculateAnswer(){
	let num1 = document.getElementById('num1')
	num1 = +num1.innerText
	let num2 = document.getElementById('num2')
	num2 = +num2.innerText
	let rightAnswer = num1 * num2
	let inputAnswer = document.getElementById('user-answer')
	let userAnswer = inputAnswer.value
	let answerStatus = ''
	if (userAnswer == rightAnswer){
		answerStatus = 'success'
	} else if (userAnswer == ''){
		answerStatus = 'empty'
	} else if ((userAnswer != rightAnswer)){
		answerStatus = 'error'
	}
	printResult(answerStatus)
}

function printResult(answerStatus){
	if (answerStatus == 'success'){
		successAnswer()
		btnNewHolder.classList.remove('hidden')
	} else if (answerStatus == 'empty'){
		emptyAnswer()
		btnNewHolder.classList.add('hidden')
	} else if (answerStatus == 'error'){
		errorAnswer()
		btnNewHolder.classList.add('hidden')
	}
}

function successAnswer(){
	answerStatusHolder.innerHTML = 
`<div class="row ps-3 pe-3 mb-3">
	<div class="border border-success rounded bg-light text-success fs-3 text-center fw-bold p-3">
		<p class="mb-0">Вірно!<br>${num1.innerText} * ${num2.innerText} = ${num1.innerText * num2.innerText}</p>
	</div>
</div>`
}
function emptyAnswer(){
	answerStatusHolder.innerHTML = 
`<div class="row ps-3 pe-3 mb-3">
	<div class="border border-danger rounded bg-light text-danger fs-3 text-center p-3">
		<p class="mb-0">Введи, будь-ласка, відповідь!</p>
	</div>
</div>`
}
function errorAnswer(){
	answerStatusHolder.innerHTML =
`<div class="row ps-3 pe-3 mb-3">
	<div class="border border-danger rounded bg-light text-danger fs-3 text-center p-3">
		<p class="mb-0">Перерахуй, будь-ласка!</p>
	</div>
</div>`
}

let btnCheck = document.getElementById('btn-check')

btnCheck.onclick = function(event){
	answerStatusHolder.innerHTML = ''
	calculateAnswer()
}

btnNew.onclick = function(event){
	createExpression()
	btnNewHolder.classList.add('hidden')
	answerStatusHolder.innerHTML = ''
}
btnNew.addEventListener('keydown', event => {
	if(event.code === 'Enter' | event.code === 'NumpadEnter') {
		createExpression()
		btnNewHolder.classList.add('hidden')
		answerStatusHolder.innerHTML = ''
	}
})