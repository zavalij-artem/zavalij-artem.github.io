const a = document.getElementById('number-a')
const b = document.getElementById('number-b')
let action = document.getElementById('action')
const inputAnswer = document.getElementById('answer')
const btnCheck = document.getElementById('check')
const resultElement = document.getElementById('result')

btnCheck.onclick = function(){
	const num1 = Number(a.textContent)
	const num2 = Number(b.textContent)
	const rightAnswer = num1 + num2
	const userAnswer = inputAnswer.value
	if(userAnswer == rightAnswer){
		resultElement.textContent = 'Вірна відповідь!'
		resultElement.classList.add('text-success')
		resultElement.classList.remove('text-danger')
	} else {
		resultElement.textContent = 'Перерахуй, будь-ласка!'
		resultElement.classList.add('text-danger')
		resultElement.classList.remove('text-success')
	}
}


