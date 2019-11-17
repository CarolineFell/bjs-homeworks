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
    let result = {};
    let totalMark = 0;
      for (let subject in data) {
        const averageMark = getAverageArray(data[subject]);
        result[subject] = averageMark;
        totalMark += averageMark;
 }
    // result = Math.round(Object.values(result)); // хотела округлить, но не получилось
    return result;
}

function getAverageArray(data) {
    let sum = 0;
    for (let i = 0; i < data.length; i++) {
      sum += data[i];
    }
    return sum / data.length;
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

let secretData = {};

function getPirate(secretData) {
    if (secretData.aaa === 1 && secretData.bbb === 1) {
        return {firstName: "Emilio", lastName: "Emilio"};
    } else if (secretData.bbb === 0 && secretData.bbb === 1) {
        return {firstName: "Rodrigo", lastName: "Emilio"};
    } else if (secretData.bbb === 0 && secretData.bbb === 0) {
        return {firstName: "Rodrigo", lastName: "Rodrigo"};
    } else if (secretData.bbb === 1 && secretData.bbb === 0) {
        return {firstName: "Emilio", lastName: "Rodrigo"};
    }
}

function getPersonData(secretData) {
  let result = {};
  for (let subject in secretData) {
    const pirate = getPirate(secretData[subject]);
    result[subject] = pirate;
  }
}

console.log(getPirate({
    aaa: 1,
    bbb: 1,
}));

console.log(getPersonData({
    aaa: 0,
    bbb: 0,
}));

console.log(getPersonData({
    aaa: 1,
    bbb: 1,
}));

console.log(getPersonData({
    aaa: 0,
    bbb: 1,
}));