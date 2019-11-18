'use strict'; // activated for all actions

function calculateMortgage() {
    let percent = window.percent.value; // процентная ставка 
    let contribution = window.contribution.value; // начальный взнос
    let amount = window.amount.value; // общая стоимость
    let date = window.date.value; // срок ипотеки

    let result = calculateTotalMortgage(percent, contribution, amount, date);
    let span = window.mortageResult;
    span.textContent = result;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
    // код для задачи №1

    function checkTheData(input) { // check the input data for the type
        let value;

        if (typeof(input) === 'number') {
            value = input; // value assigns an integer of 'number'
            return value;
        } else if (typeof(input) === 'string') {
            return value = parseInt(input); // value assigns an integer of 'string'
        } else if (isNaN(input)) {
            return `В одном из полей значение введено в неверном формате.`;
        }
    }
    
    function giveBackSum(date) {
        let dateToday = new Date(); // date at the moment
        let dateOfCredit = new Date(date); // date when the credit will be fully paid from the window.date.value
        let yearOfCredit = dateOfCredit.getFullYear(); // get the year when the credit will be fully paid
        let yearToday = dateToday.getFullYear(); // get the current year
        let months = (yearOfCredit - yearToday) * 12; // get the quantity of months
    
        return months;
    }

    let monthsToPay = giveBackSum(date); // variable to count months the credit to be paid
    let valueToReturn = checkTheData(amount) - checkTheData(contribution); // общая стоимость кредита - начальный взнос
    // Платеж = S*(P+P/(((1+P)^n)-1)), где: S - сумма кредита, P - 1/12 процентной ставки (от 0 до 1), n - количество месяцев ^ - возведение в степень
    let S = valueToReturn;
    let p = checkTheData(percent) / 1200; // dividing the fraction 1/12
    let n = monthsToPay;
    let c = Math.pow((1 + p), n);
    let sumToPayByMonth = S * (p + (p / (c - 1)));
    let totalAmount = Math.round(valueToReturn + sumToPayByMonth * monthsToPay); // credit + (sum to be paid by month * total amount of months)

    return totalAmount;
}

function sayHello() {
    let name = window.personName.value;
    let greeting = getGreeting(name);
    let span = window.helloResult;
    span.textContent = greeting;
}

function getGreeting(name) {
    // код для задачи №2
    let greeting;

    if (typeof(name) === 'string' && name !== '') { // type of name is string AND not a void value
        greeting = `Привет, мир! Меня зовут ${name}.`;
    } else {
        greeting = 'Привет, мир! Меня зовут Аноним.';
    }
 
  return greeting;
}