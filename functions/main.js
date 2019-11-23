// --- Task 1 --- //

function getSolutions(a, b, c) {
    let solution = {};
    let D = b**2 - 4*a*c;

    if (D < 0) {
        solution.D = D;
    } else if (D === 0) {
        let x1 = -b / (2*a);
        solution.D = D;
        solution.roots = x1;
    } else if (D > 0) {
        x1 = (-b + Math.sqrt(D)) / (2*a);
        let x2 = (-b - Math.sqrt(D)) / (2*a);
        solution.D = D;
        solution.roots = {x1, x2};
    }
    return solution;
}

function showSolutionsMessage(a,b,c) {
    let result = getSolutions(a,b,c);
    console.log(`Вычисляем корни квадратного уравнения ${a}*x² + (${b})*x + ${(c)}`);
    console.log(`Значение дискриминанта: ${result.D}`);

    if (result.D < 0) {
        console.log('Уравнение не имеет вещественных корней');
    } else if (result.D === 0) {
        console.log(`Уравнение имеет один корень X₁ = ${result.roots}`);
    } else if (result.D > 0) {
        console.log(`Уравнение имеет два корня: X₁ = ${result.roots.x1}, X₂ = ${result.roots.x2}`);
    }
}


// --- Task 2 --- //

function getAverageScore(data) {
    let sum = 0; // total sum
    let count = 0; // counter
    let result = {}; // object to get
    
    for (let marks in data) { // for...in loop iterating over the object 'data' with the variable 'marks'
      
      function countAverage(arr) { // function to count the average of each key
        let sumMarks = 0; // total sum of each key
        for (let i = 0; i < arr.length; i++){ // for loop counter
          sumMarks += arr[i]; // count each key 
        }
  
        let result = Math.round(sumMarks / arr.length); // count average rounding the value of the mark
        
        return result;
      }
  
      result[marks] = countAverage(data[marks]); // 'result' is an object with the 'marks' - new property of this object assigned to the function that counts the average of each key of any array
      sum += countAverage(data[marks]);
      count++; // go to the next key
    }
  
  let average = sum / count; // count total average
  result.average = average; // make new key rounding the value of the mark
  return result;
  }
  
  console.log(getAverageScore(data = {
    math: [5, 4, 5, 4, 4, 4, 5, 3],
    geometry: [4, 5, 4, 5, 3, 4, 5, 3, 4, 5],
    russian: [5, 5, 5, 5, 4, 4, 4, 4, 4, 5, 4],
    english: [3, 4, 5, 4, 3, 5, 5, 5, 5],
    phisics: [4, 4, 4, 5, 4, 4],
    history: [5, 5, 5, 3],
    literature: [5, 4, 5, 3, 2],
    chemistry: [3, 4, 3, 3, 5, 4],
    informatics: [5, 4, 5, 5]
}));


// --- Task 3 --- //

function getPersonData(secretData) {
  return {
      'firstName': getPersonName(secretData).key1,
      'secondName': getPersonName(secretData).key2
  }
}

function getPersonName(secretData) {
  let keys = [];


    for (let key1 in secretData) {
      if (key1 === 'aaa' && secretData[key1] === 0) { 
        keys.key1 = 'Rodrigo';
      } else if(key1 === 'aaa' && secretData[key1]=== 1) { 
        keys.key1 = 'Emilio';
      }
    }
    
    for (let key2 in secretData) {
      if (key2 === 'bbb' && secretData[key2]=== 0) { 
        keys.key2  = 'Rodrigo';
      } else if (key2 === 'bbb' && secretData[key2] === 1) { 
        keys.key2 = 'Emilio';
      }
    }
  
return keys;
}

console.log(getPersonData({aaa: 0, bbb: 0}));
console.log(getPersonData({aaa: 0, bbb: 1}));
console.log(getPersonData({aaa: 1, bbb: 0}));
console.log(getPersonData({aaa: 1, bbb: 1}));