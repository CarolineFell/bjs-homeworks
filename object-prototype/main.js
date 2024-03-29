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
    
    return age > 18;
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
    if (typeof(animal) == 'undefined') {
        return null;
    } else {
        let sound = animal.sound;
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
        sum += parseInt(marks[mark], 10);
    }

    let average = sum / marks.length;
    let roundedAverage = Math.round(average);
    return roundedAverage;
}