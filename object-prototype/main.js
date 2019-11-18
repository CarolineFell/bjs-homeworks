function initCheckBirthday() {
    const birthday = document.getElementById('birthday').value;

    const result = checkBirthday(birthday) ? "Да" : "Нет";

    document.getElementById('disclaimer').innerHTML = result;   
}

function checkBirthday(birthday) {
    // код для задачи №3
    let now = new Date().getTime();
    let birthdayInMlSec = new Date(birthday).getTime();
    let deffInMlSec  = now - birthdayInMlSec;
    let age = deffInMlSec / 1000 / 60 / 60 / 24 / 365.25;
    
    if (age > 18) {
        return age;
   } 
}

function initPrintAnimalSound() {
    const animal = {
        sound: 'grrrr',
    };

    const result = getAnimalSound(animal);

    document.getElementById('sound').innerHTML = result;   
}

function getAnimalSound(animal) {
    // код для задачи №1
    let sound = animal.sound;
    if (typeof(animal) == 'undefined') {
        return 'null';
    } else {
        return sound;
    }
}

function initCalculateStatement() {
    for (let idx = 0; idx < 3; idx++) {
        const marks = document.getElementById('learner-' + idx).value.split(',');

        const average = getAverageMark(marks);

        document.getElementById('learner-' + idx + '-average').innerHTML = average;
    }
}

function getAverageMark(marks) {
    // код для задачи №2
    let sum = 0;
    
    for (let mark in marks) { 
      
      function countAverage(arr) { 
        let sumMarks = 0;
        for (let i = 0; i < arr.length; i++){ 
          sumMarks += arr[i];
        }
  
        let result = Math.round(sumMarks / arr.length); 
        
        return result;
      }

      sum += countAverage(marks[mark]);
    }

    let average = sum / marks.length;
    let roundedAverage = Math.round(average);
    return roundedAverage;
}