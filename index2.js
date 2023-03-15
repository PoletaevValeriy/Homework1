let password = 'пароль';
let enterThePassword = String( prompt('Введите пароль'));
enterThePassword = enterThePassword.toLowerCase(); //на случай ввода пароля с большой буквы;
(enterThePassword === 'пароль') ? alert('Пароль введен верно') : alert('Неверный пароль'); // Задание 1

let c= 2;
(c>0 && c<10) ? alert('Верно') : console.log('Неверно'); // Задание 2

let d= 282;
let e= 23;
if (d>100||e>100) {
    alert('Верно');
    } else {alert('Неверно');
    }// Задание 3
    
let u='2';
let b='3';
u=Number(2);
b=Number(3);
alert(u+b); // Задание 4

let month = prompt('Введите номер месяца')
if (month === '1') {alert('Январь. Зима');
    } else if(month === '2') {alert('Февраль. Зима');
    
}
else if(month === '3') {alert('Март. Веста');
    