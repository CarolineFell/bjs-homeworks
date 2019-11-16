'use strict';

function calculateQuadraticEquation() {
    let a = +window.a.value;
    let b = +window.b.value;
    let c = +window.c.value;
    let result = getResult(a,b,c);
    window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
    let span = window.result;
    span.textContent = "х = "+result;
}

function getResult(a,b,c) {
    // код для задачи №1 
    let x = [];
    let D = b**2 - 4*a*c; // объявляем дискриминант

    if (D === 0) {
        x.push(-1 * b / (2*a)); // одно значение
    } else if (D > 0) {
        x.push((-1 * b + Math.sqrt(1, D)) / 2*a, // два значения
               (-1 * b - Math.sqrt(1, D)) / 2*a);
    } else if (D < 0) {
        x.push();
    }
    return x;
}

function calculateAverageRating() {
    let marks = window.marks.value.split("").map(Number).filter((n)=> !isNaN(n) && n > 0);
    let averageMark = getAverageMark(marks);
    window.averageMark.textContent = averageMark;
}

function getAverageMark(marks) {    
    let sum = 0;
    let averageMark = 0;
    
    function calc(marks) {
      for (let i = 0; i < marks.length; i++) {
          if (marks.length <= 5) {
              sum += marks[i];
          } else {
              marks = marks.slice(0,5);
              sum += marks[i];
          }
      }
      return averageMark = (sum/marks.length).toFixed(1); // округляем до десятых
    }
    return(`Ответ: ${calc(marks)}. \nВНИМАНИЕ!\nПрограмма не предусматривает рассчёт среднего значения для более чем пяти оценок.\nВ случае, если оценок более пяти, их количество будет обрезано до первых пяти значений.`);
}

function calculateDrinkTask() {
    let name = window.personName.value;
    let dateOfBirthday = new Date(window.dateOfBirthday.value);
    let drink = askDrink(name, dateOfBirthday);
    window.drink.textContent = drink;
}

function askDrink(name,dateOfBirthday) {
    // код для задачи №3
    let today = new Date();
    let year = today.getFullYear();
    let age = year - dateOfBirthday.getFullYear();
    let result = '';
    if (age >= 18) {
        result = `Не желаете ли олд-фэшн, ${name}?`
    } else {
        result = `Сожалею, ${name}, но я не могу вам продать алкоголь.\nЗато могу предложить вам замечательный клюквенный компот!`
    }
    console.log(result)
    return result;
}