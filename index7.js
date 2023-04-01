// Задание 1

//Написать функцию, которая на вход принимает массив чисел и callback-
//функцию. Функция должна возвращать целое число, в зависимости от callback это
//может быть сумма всех чисел массива, произведение. Функции, вычисляющие произведение
// и сумму чисел массива, также необходимо реализовать.


function fn(arr, callback){
return callback(arr)
};

const a = [7, 9, 25];
function sum(arr){
return arr.reduce((sum, current) => sum + current);
};

function mult(arr){
    return arr.reduce((mult, current) => mult * current);
};

console.log(fn(a, sum));
console.log(fn(a, mult)); 

// Задание 2

//Дан массив объектов:

//const users = [
	//{name: 'Jon', age: 22},
	//{name: 'Richard', age: 18},
	//{name: 'Anton', age: 32},
	//{name: 'Lida', age: 23},
	//{name: 'Bob', age: 44}
//];
//Необходимо отсортировать элементы массива в порядке увеличения возраста.

const users = [
	{name: 'Jon', age: 22},
	{name: 'Richard', age: 18},
	{name: 'Anton', age: 32},
	{name: 'Lida', age: 23},
	{name: 'Bob', age: 44}
];

function sortArr(arr) {
    return arr.sort((a, b) => a.age - b.age);
};

console.log(sortArr(users)); 


// Задание 3

//Создайте функцию each, которая может производить любые манипуляции над переданным
//массивом в зависимости от переданной callback-функции. Реализуйте несколько
//callback-функций, которые будут делать следующее:

//Переворачивать массив:
//const arr = [1, '4', 9, 'two'];
//each(arr, reversArr); // ['two', 9, '4', 1]
//Преобразовывать все элементы к числу; если элемент получился NaN, то удалять его:
//const arr = [1, '4', false, 9, 'two'];
//each(arr, toNumberArr); // [1, 4, 0, 9]


function each(arr, callback){
   return callback(arr);
};

const b = [1, '4', 9, 'two'];

function reverseArr(arr){
    return arr.reverse(b);
};

const c = [1,'4', false, 9, 'two'];

function numberArr(arr){
    return (c.map(Number)). filter(item => isNan(item) === false);
}    

console.log(each (b, reverseArr));
console.log(each (c, reverseArr));


//Задание 4
//Напишите программу, которая на протяжении 30 секунд, каждые 3 секунды, будет выводить в консоль
//текущую дату. Последней строкой должно выводиться сообщение «30 секунд прошло».

const timer = (deadline) => {
    const interval = setInterval(() => {
        console.log(new Date());
    }, 3000);

    setTimeout(() => {
        clearInterval(interval);
        console.log('30 секунд прошло!');
    }, deadline * 1000)
};
timer(30);


//Задание 5
//У нас есть код, имитирующий телефонный звонок:

//function calling() {
    //console.log('Звоню!')
//};
//function beeps() {
    //setTimeout(() => {
    //console.log('Идут гудки...')
    //}, 1000);
//}
//function talk() {
    //console.log('Разговор')
//}
//calling();
//beeps();
//talk();
//Сейчас, если его запустить, последовательность будет 
//'Звоню!'
//, 
//'Разговор'
//, 
//'Идут гудки…'

// , но разговор всегда начинается после гудков, поэтому вам нужно исправить данный код так, 
//чтобы выводилась верная последовательность:

//'Звоню!'
//,
//'Идут гудки…'
//, 
//'Разговор'

//Добавлять новые setTimout и setInterval нельзя, также нельзя удалять существующий setTimout, 
//но можно менять код внутри его.

function calling() {
    console.log('Звоню!')
};

function beeps() {
    setTimeout(() => {
        console.log('Разговор')
    }, 1000);
}

function talk() {
    console.log('Идут гудки...')
}

calling();
beeps();
talk();



