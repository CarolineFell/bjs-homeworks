console.log("---- Task 1 ----");

let classes = {
    algebra: 5,
    geography: 4,
    physics: 4,
}

let sum = 0;
let average = 0;
sum = classes.algebra + classes.geography + classes.physics;
average = sum/Object.keys(classes).length;
console.log(average.toFixed(2));


console.log();
console.log("---- Task 2 ----");

let myName = 'NoName';
let message = {};
message.text = `Привет, мир!\nМеня зовут ${myName}`
console.log(message.text);


console.log();
console.log("---- Task 3 ----");

let x = 2, y = 22, z = 0;
let result = 0;

result = x * y + 5 * z + x - 1;
console.log(result);