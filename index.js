const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const numberScreen = document.querySelector(".number-screen");
const operatorScreen = document.querySelector(".operator-screen");
const data = {
	result: 0,
	current: 0,
	number: 0,
	operator: 0,
	operators: [
		{
			html: "&equals;",
			handle(first, second) {
				return first;
			}
		},
		{
			html: "&plus;",
			handle(first, second) {
				return first + second;
			}
		},
		{
			html: "&minus;",
			handle(first, second) {
				return first - second;
			}
		},
		{
			html: "&times",
			handle(first, second) {
				return first * second;
			}
		},
		{
			html: "&divide;",
			handle(first, second) {
				return first / second;
			}
		}
	],
	reset() {
		this.result = 0;
		this.current = 0;
		this.number = 0;
		this.operator = 0;
	},
	printNumber() {
		numberScreen.innerHTML = this.number;
	},
	printOperator() {
		operatorScreen.innerHTML = this.operators[this.operator].html;
	}
};

numberButtons.forEach(function (button) {
	button.onclick = function () {
		data.number = data.number * 10 + Number(this.innerText);
		data.content = data.number;
		data.printNumber();
	};
});

operatorButtons.forEach(function (button) {
	button.onclick = function () {
		const currentOperator = Number(this.getAttribute("value"));
		data.result = data.operators[data.operator].handle(data.result, data.number);
		data.number = 0;
		data.content = data.result;
		data.operator = currentOperator;
		data.printNumber();
		data.printOperator();
	};
});
