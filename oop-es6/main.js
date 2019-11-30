'use strict'

/////////////////////////// ----- Task 1 ----- ///////////////////////////
console.log('--- Задача №1. Оружие ---')
console.log();

class Weapon {
    constructor (name, attack, durability, range) {
        this.name = name;
        this.attack = attack;
        this.durability = durability;
        this.range = range;
        this.durabilityInitial = this.durability;
    }
    
    takeDamage(damage) {
        this.damage = damage;
        if (this.durability > this.damage) {
          return this.durability = this.durability - this.damage;;
        } else {
          return this.durability = 0;
        }
    }

    getDamage() {
      if (this.durability > 0.3 * this.durabilityInitial) {
        return this.attack;
      } else if (this.durability < 0.3 * this.durabilityInitial) {
        return this.attack / 2;
      } else if (this.durability = Infinity) {
        return this.attack;
      } else {
        return this.durability = 0;
      }
    }

    isBroken() {
      if (this.durability > 0) {
        return false;
      } else {
        return true;
      }
    }
}

let messageName = 'Оружие: ';
let messageDurability = 'Прочность оружия: ';
let messageAttack = 'Атака: ';
let messageRange = 'Дальность удара: '
let messageBroken = [
  'Статус оружия: ', 
  '   // true - оружие сломано, false - оружие готово к бою'
]

const sword = new Weapon ('Старый меч', 20, 10, 1);

sword.takeDamage(5);
console.log(messageName + sword.name); // 5
console.log(messageDurability + sword.durability); // 5

sword.takeDamage(50);
console.log(messageDurability + sword.durability); // 0

console.log();

const arm = new Weapon('Рука', 1, Infinity, 1);

arm.takeDamage(20);
console.log(messageName + arm.name); 
console.log(messageDurability + arm.durability); // Infinity

console.log();

const bow = new Weapon('Лук', 10, 180, 3);

bow.takeDamage(20);
console.log(messageName + bow.name); 
console.log(messageDurability + bow.durability); // 180

bow.takeDamage(200);
console.log(messageDurability + bow.durability); // 0
console.log(messageAttack + bow.getDamage()); // 0

console.log();

console.log(messageName + arm.name); 
console.log(messageDurability + arm.durability); // Infinity
console.log(messageAttack + arm.getDamage()); // 1

console.log();

console.log(messageDurability + bow.durability); // 0
console.log(messageBroken[0] + bow.isBroken() + messageBroken[1]); // true

console.log(messageDurability + arm.durability); // Infinity
console.log(messageBroken[0] + arm.isBroken() + messageBroken[1]); // false

class standartWeapon extends Weapon {
  constructor (name, attack, durability, range) {
    super (name, attack, durability, range);
  }
}

// Варианты оружия
const hand = new standartWeapon('Рука', 1, Infinity, 1);
const bowShort = new standartWeapon('Лук', 10, 200, 3);
const swordMiddleAges = new standartWeapon('Меч', 25, 500, 1);
const knife = new standartWeapon('Нож', 5, 300, 1);
const crook = new standartWeapon('Посох', 8, 300, 2);

// Варианты усиленного оружия
class ImprovedWeapon extends Weapon {
  constructor (name, attack, durability, range) {
    super (name, attack, durability, range);
  }
}

const bowLong = new ImprovedWeapon('Длинный лук', 15, bowShort.durability, 4);
const axe = new ImprovedWeapon('Секира', 27, 800, swordMiddleAges.range);
const stormCrook = new ImprovedWeapon('Посох Бури', 10, crook.durability, 3);

console.log();
console.log(messageName + bowLong.name); 
console.log(messageDurability + bowLong.durability);
console.log(messageAttack + bowLong.getDamage());
console.log(messageRange + bowLong.range);
console.log(messageBroken[0] + bowLong.isBroken() + messageBroken[1]);

console.log();
console.log(messageName + axe.name); 
console.log(messageDurability + axe.durability);
console.log(messageAttack + axe.getDamage());
console.log(messageRange + axe.range);
console.log(messageBroken[0] + axe.isBroken() + messageBroken[1]);

console.log();
console.log(messageName + stormCrook.name); 
console.log(messageDurability + stormCrook.durability);
console.log(messageAttack + stormCrook.getDamage());
console.log(messageRange + stormCrook.range);
console.log(messageBroken[0] + stormCrook.isBroken() + messageBroken[1]);


/////////////////////////// ----- Task 2 ----- ///////////////////////////
console.log();
console.log();
console.log('--- Задача №2. Переработка оружия ---')
console.log();

class Sword extends Weapon {
    constructor () {
    super ('Старый меч', 20, 10, 1);
  }
}

class Arm extends Weapon {
    constructor () {
    super ('Рука', 1, Infinity, 1);
  }
}

class Bow extends Weapon {
    constructor () {
    super ('Лук', 10, 180, 3);
  }
}

// Варианты усиленного оружия
class Fist extends Arm {
    constructor () {
    super ();
    this.name = 'Кулак';
    this.attack = 10;
    this.durability = 400; 
    this.range = 2;
  }
}

class Rifle extends Bow {
    constructor () {
    super ();
    this.name = 'Винтовка';
    this.attack = 50;
    this.durability = Infinity; 
    this.range = 10;
  }
}

class Shuriken extends Bow {
    constructor () {
    super ();
    this.name = 'Сюрикен';
    this.attack = 10;
    this.durability = 3; 
    this.range = 5;
  }
}

class Blade extends Sword {
    constructor () {
    super ();
    this.name = 'Лезвие';
    this.attack = 5;
    this.durability = 1; 
    this.range = 1;
  }
}

const fist = new Fist;

console.log(messageName + fist.name); 
console.log(messageDurability + fist.durability);
console.log(messageAttack + fist.getDamage());
console.log(messageRange + fist.range);
console.log(messageBroken[0] + fist.isBroken() + messageBroken[1]);
console.log();

const rifle = new Rifle;

console.log(messageName + rifle.name); 
console.log(messageDurability + rifle.durability);
console.log(messageAttack + rifle.getDamage());
console.log(messageRange + rifle.range);
console.log(messageBroken[0] + rifle.isBroken() + messageBroken[1]);
console.log();

const shuriken = new Shuriken;

console.log(messageName + shuriken.name); 
console.log(messageDurability + shuriken.durability);
console.log(messageAttack + shuriken.getDamage());
console.log(messageRange + shuriken.range);
console.log(messageBroken[0] + shuriken.isBroken() + messageBroken[1]);
console.log();

const blade = new Blade;

console.log(messageName + blade.name); 
console.log(messageDurability + blade.durability);
console.log(messageAttack + blade.getDamage());
console.log(messageRange + blade.range);
console.log(messageBroken[0] + blade.isBroken() + messageBroken[1]);


/////////////////////////// ----- Task 3 ----- ///////////////////////////
console.log();
console.log();
console.log('--- Задача №3. Школьный журнал ---')
console.log();

class StudentLog {
  constructor (name) {
    this.name = name;
    this.object = {};
  }

  getName() {
    let messageStudent = 'Имя ученика: ';
    return messageStudent + this.name;
  }

  addGrade(grade, subject) {
    let errorMessage = `Внимание! Вы пытались поставить оценку "${grade}" по предмету "${subject}". Допускаются только числа от 1 до 5.`;
    let messageGrade = `Количество оценок по ${subject}: `;

    if (grade > 0 && grade < 6) {

      if (this.object[subject] !== undefined) {
		 		this.object[subject].push(grade);
		 	} else {
		 		this.object[subject] = [grade];
		 	}

      console.log(this.object);
		 	return messageGrade + this.object[subject].length;

    } else if (grade < 0 || grade > 5 || this.grade === 'string') {
      console.log(errorMessage);
      return messageGrade + this.object[subject].length;
    } else {
      console.log(errorMessage);
      return messageGrade + 0;
    }
  }

  getAverageBySubject(subject) {
    let sum = 0;

    if (this.object[subject] !== undefined) {

      for (let i = 0; i < this.object[subject].length; i++) {
        sum += this.object[subject][i];
      }

      return sum / this.object[subject].length;

    } else {
      return 0;
    }
  }

  getTotalAverage() {
    let messageTotalAverage = 'Средняя оценка по всем предметам: ';
    let sum = 0; 
		let sumTotal = 0;

		let amountMarks = 0; 

		for (let key in this.object) {
			amountMarks += 1;
			sum = this.getAverageBySubject(key);
			sumTotal += sum;
		}

		if (sumTotal !== 0) {
			return messageTotalAverage + (sumTotal / amountMarks);
		} else {
			return 0;
		}
	} 
}

const log = new StudentLog('Олег Никифоров');

console.log(log.getName()) // Олег Никифоров
console.log();

console.log(log.addGrade(3, 'algebra')); // 1
// console.log(log.subject);
// console.log(log.grade);
console.log();

console.log(log.addGrade('отлично!', 'math')); // Вы пытались поставить оценку "отлично!" по предмету "math". Допускаются только числа от 1 до 5. // 0
// console.log(log.subject);
// console.log(log.grade);
console.log();

console.log(log.addGrade(4, 'algebra')); // algebra: [ 3, 4 ] // 2
// console.log(log.subject);
// console.log(log.grade);
console.log();

console.log(log.addGrade(5, 'geometry')); // 1
// console.log(log.subject);
// console.log(log.grade);
console.log();

console.log(log.addGrade(25, 'geometry')); // Вы пытались поставить оценку "25" по предмету "geometry". Допускаются только числа от 1 до 5. // 1
// console.log(log.subject);
// console.log(log.grade);
console.log();

log.addGrade(2, 'algebra');
log.addGrade(4, 'algebra');
log.addGrade(5, 'geometry');
log.addGrade(4, 'geometry');

console.log();

console.log(log.getAverageBySubject('geometry')); // 4.5
console.log(log.getAverageBySubject('algebra')); // 3
console.log(log.getAverageBySubject('math')); // 0
console.log();

console.log(log.getTotalAverage()); // 3,75