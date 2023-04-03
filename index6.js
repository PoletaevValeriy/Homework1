const riddle = prompt('Не лает, не кусает, а в дом не пускает?');
const answer = 'замок';
if (riddle.toUpperCase() === answer.toUpperCase()) {
    console.log('Правильно! Ты молодец)');
} else {
   console.log('К сожалению ты не прав(');
} // Задание 1


const searchStart = ['Кошка', 'Кит', 'Комар', 'Носорог'];
const search = 'ко';
searchStart.forEach((searchStart) => {
    if(searchStart.toLowerCase().startsWith(search.toLowerCase())) {
		console.log(searchStart);
	}
}); // Задание 2


let rounding = 32.58884;

let result = Math.floor(rounding);
console.log((result)); 

let result2 = Math.ceil(rounding);
console.log((result2)); 

let result3 = Math.round(rounding);
console.log((result3)); // Задание 3


const min = arr => arr.reduce((x, y) => Math.min(x, y));
const max = arr => arr.reduce((x, y) => Math.max(x, y));
 
var arr = [ 52, 53, 49, 77, 21, 32 ];
 
console.log("Min:", min(arr));
console.log("Max:", max(arr)); // Задание 4




function pursuit(minValue, maxValue) {
    return Math.round(Math.random() * (maxValue - minValue)) + minValue;

}

console.log(pursuit(1, 10)); // Задание 5


let a = Number (prompt('Введите число'));
function getRandomArr( length = Math.floor(a / 2)){
    return Array.from(Array(length),() => Math.floor(Math.random() * a) +1);
}

const randomarr = getRandomArr();
console.log(randomarr); // Задание 6


let b = Number(prompt('Введите первое число'));
let c = Number(prompt('Введите второе число'));

console.log(Math.round(Math.random() * (c - b)) + b); // Задание 7


let currentDate = new Date();
console.log(currentDate); // Задание 8


let date= new Date();
date.setDate(currentDate.getDate() + 73);

console.log(date); // Задание 9


const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь","Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

let myDate = new Date(); 
let fullDate = myDate.getDate() + " " + months[myDate.getMonth()] + " " +  myDate.getFullYear() + " - это " + days[myDate.getDay() + " " + myDate.toTimeString()];

console.log(fullDate); // Задание 10


let list = [1, 2, 3, 4, 5, 6, 7, 8, 9] ;
list = list.sort(() => Math.random() - 0.5);
alert(list);

let d = Number(prompt('Введите чему равен первы элемент массива'));
let i = Number(prompt('Введите чему равен второй элемент массива'));


if(d === list[0] &&  i === list[6]) {console.log('Поздравляю, вы отгадали!');} 
else if (d === list[0] ||  i === list[6]) {console.log('Вы были близки к победе!');}
else {console.log('Стоит попробовать еще раз');}





