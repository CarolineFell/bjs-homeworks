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
  result['average'] = Math.round(average); // make new key rounding the value of the mark
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
        'firstName': getPirateFirstName(secretData), // reference to the function with firstName
        'secondName': getPirateSecondName(secretData) // reference to the function with secondName
        // to get the object = {firstName(aaa): Rodrigo(0) || Emilio(1), secondName(bbb): Rodrigo(0) || Emilio(1)}
    }
  }

  function getPirateFirstName(secretData) {
    let keys; // new variable
    for (let key in secretData) { // for...in loop iterating over the object 'secretData' with the variable 'key'
      if (key === 'aaa' && secretData[key] === 0) { // secretData = {aaa: 0}
        keys = 'Rodrigo';
      } else if(key === 'aaa' && secretData[key]=== 1) { // secretData = {aaa: 1}
        keys = 'Emilio';
      }
    }
    return keys; // secretData = {key(aaa): Rodrigo || Emilio}
  }
  
  function getPirateSecondName(secretData) {
    let keys;
    for (let key in secretData) {
      if (key === 'bbb' && secretData[key]=== 0) { // secretData = {bbb: 0}
        keys  = 'Rodrigo';
      } else if (key === 'bbb' && secretData[key] === 1) { // secretData = {bbb: 1}
        keys = 'Emilio';
      }
    }
    return keys; // secretData = {key(bbb): Rodrigo || Emilio}
  }

console.log(getPersonData({ // takes keys aaa and bbb and values 0 || 1
    aaa: 0,
    bbb: 0,
}));