'use strict'

function compareArrays(arr1, arr2) {
  let comparedArray = (arr1.length === arr2.length) ? arr1.every((element, index) => element === arr2[index]) : false;
  return comparedArray;
}

function memoize(fn, limit) {
  // внутренняя память
  let results = []; 
  // хранит историю вызовов возвращаемой memoize функции (mSum)

  return function(...rest) {
    let args = [...rest]; // Array.from(arguments)
    // массив аргументов, с которыми была вызывана функция
    // поиск
    let result = results.find(element => compareArrays(element.args, args));
    // результат работы

    let messageMemory = 'Результат найден в памяти.';
    let messageNotMemory = 'Функция вызвана не из памяти. Результат(ов): ';
    let messageMaxMemory = 'Максимальное количество результатов в памяти: ';
    
    if (result) {
      console.log(messageMemory);
    } else {
      const newResult = fn(...rest);
      console.log(messageNotMemory + results.push({args, result: newResult}));
      
      if (results.length > limit) {
        results.shift();
        console.log(messageMaxMemory + limit);
      }
    }
    return results;
  }
}

function sum() {
arguments.reduce = [].reduce;
  return arguments.reduce(function(a, b) {
   return a + b;
  });
}

console.log('--- compareArrays( arr1, arr2 ) ---');
console.log('Сравнивает значения двух массивов: если массивы имеют одинаковые значения на одинаковых индексах, compareArrays должна выдавать true (иначе false)');
console.log();

console.log(compareArrays([8, 9], [6])); // false, разные значения
console.log(compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5])); // false, разные значения
console.log(compareArrays([9, 2, 4, 8, 2], [9, 2, 4])); // false, разные значения
console.log(compareArrays([1, 2, 3], [2, 3, 1])); // false, разные индексы, хотя и одинаковые значения
console.log(compareArrays([8, 1, 2], [8, 1, 2])); // true

console.log();

console.log('--- memoize(fn, limit) ---');
console.log('fn - функция, которая производит вычисления limit - ограничение по количеству результатов')
console.log();

console.log('const sum = (a, b) => a + b: ' + sum(3,4)); // 7
const mSum = memoize(sum, 2); // 2 результата хранятся в памяти

console.log(mSum(3,4)); // 7
console.log();
console.log(mSum(3,4)); // 7
console.log();
console.log(mSum(1,3)); // 4
console.log();
console.log(mSum(5,3)); // 8
console.log();

console.log('--- Работа возвращаемой функции ---');
console.log('Ищет в массиве results сделанный вызов с аргументами, которые \nсоответсвуют аргументам, с которыми была вызвана возвращаемая \nmemoize функция')
console.log();

const mSum2 = memoize(sum, 10);
console.log(mSum2(5,6,3)); // 14
console.log();

console.log(mSum2(1,2,6,8)); // 17
console.log();

console.log(mSum2(8,9,1,3,6,3)); // 30
console.log();

console.log(mSum2(1,2,3,4,5,6,7,8,9)); // 45
console.log();

console.log(mSum2(8,9,1,3,6,3)); // 30
console.log();

console.log(mSum2(1,2)); // 3
console.log();

console.log(mSum2(10,22,4,6,2,7,8,9,30,52,3,6,2,8,9,0,10)); // 188
console.log();

console.log(mSum2(1,2,6,8)); // 17
console.log();

console.log(mSum2(8,9,1,3,6,3)); // 30
console.log();

console.log(mSum2(9,1,3,3)); // 16
console.log();

console.log(mSum2(1,7,8,9)); // 25
console.log();

console.log(mSum2(8,6)); // 14
console.log();

console.log(mSum2(1,2,10)); // 13
console.log();

console.log(mSum2(1,26,10)); // 37
console.log();