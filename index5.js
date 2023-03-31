const numbers = [1, 5, 4, 10, 0, 3];
const result = numbers.filter(item => item < 10);
console.log(result); // Задание 1 


const number = [1, 5, 4, 10, 0, 3];
console.log(number.indexOf(4)); // Задание 2


const array = [1, 3, 5, 10, 20];
const whitespace = array.join(' ');
console.log(whitespace); // Задание 3


let many = []
    for (let i = 0; i < 3; i++) {
        many[i] = [];
	
	for (let j = 0; j < 3; j++) {
		many[i].push(1);}
    }

    console.log(many); // Задание 4


const figure = [1, 1, 1];
figure.push(2, 2, 2);
console.log(figure); // Задание 5


const sorting = [9, 8, 7, 'a', 6, 5];
sorting.sort();
sorting.pop();
console.log(sorting); // Задание 6


let check = [9, 8, 7, 6, 5];
let a = Number (prompt(`Введите число от 1 до 10 для проверки`));
let che = check.includes(a);
console.log(che); // Задание 7


let letter = 'abcdif';
letter = letter.split('');
letter = letter.reverse();
letter = letter.join('');
console.log(letter); // Задание 8


let arr = [
    [1, 2, 3],
    [4, 5, 6],
];
arr = arr.join();
arr = arr.split();
console.log(arr); // Задание 9


const taskTen = [3, 5, 4, 8, 1, 6];
for(let i = 0; i < taskTen.length - 1; i++){
    let sum = taskTen[i] + (taskTen[i + 1]);
    console.log(sum);
} // Задание 10


const array1 = [3, 4, 9, 16];
const square = array1.map(x => x ** 2);
console.log(square); // Задание 11


const word = ['слово','день','синхрофазотрон','слог'];
let word1 = word.map ((item) => item.length);
console.log(word1); // Задание 12


const denial = [3, 6, 12, 54, 9];
let denial1 = denial.map(item => -item);
console.log(denial1); // Задание 13




