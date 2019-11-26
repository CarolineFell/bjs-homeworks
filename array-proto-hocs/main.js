function compareArrays(arr1, arr2) {
    // if (arr1.length !== arr2.length) {
    //   return false;
    // } else if (arr1.length === arr2.length) {
    //   for (let i = 0; i < arr1.length; i++) {
    //     if (arr1[i] !== arr2[i]) {
    //       return false;
    //     }
    //   } return true;
    // }
  
    if (arr1.length === arr2.length) {
      return arr1.every((element, index) => element === arr2[index]);
    } else {
      return false;
    }
  }
  
  function memoize(fn, limit) {
  // fn - функция, которая производит вычисления
  // limit - ограничение по количеству результатов.
    let results = [];
  
    return function() {
      this.results = {
        args: Array.from(arguments),
        result: fn.apply(null, Array.from(arguments))
      }
  
      for (let value of results) {
        if ((compareArrays(value.args, Array.from(arguments))) == true)
        return `Взято из памяти ${value.result}`;
      }
  
      results.push({ args: Array.from(arguments), result: fn.apply(null, Array.from(arguments)) });
      if (results.length > 2) {
        console.log(`Максимальное количество результатов памяти ${limit}`)
        results.splice(0, 1);
      }
  
      console.log(results);
      return `Результат работы ${this.results.result}`;
    }
  }
  
  
  console.log(compareArrays([8, 9], [6])); // false, разные значения
  console.log(compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5])); // false, разные значения
  console.log(compareArrays([9, 2, 4, 8, 2], [9, 2, 4])); // false, разные значения
  console.log(compareArrays([1, 2, 3], [2, 3, 1])); // false, разные индексы, хотя и одинаковые значения
  console.log(compareArrays([8, 1, 2], [8, 1, 2])); // true
  
  console.log();
  
  const sum = (a, b) => a + b;
  const mSum = memoize(sum, 2); // 2 результата хранятся в памяти
  // Вызов этих функций даёт один и тот же результат
  console.log(sum(3,4)); // 7
  // разница только в том, что mSum запоминает результат (7) и повторно не делает вычисления
  console.log(mSum(3,4)); // 7
  console.log(mSum(1,3)); // 4