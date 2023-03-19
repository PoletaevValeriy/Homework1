let password = 'пароль';
let enterThePassword = String( prompt('Введите пароль'));
enterThePassword = enterThePassword.toLowerCase(); //на случай ввода пароля с большой буквы;
(enterThePassword === 'пароль') ? alert('Пароль введен верно') : alert('Неверный пароль'); // Задание 1

let c= 2;
(c>0 && c<10) ? alert('Верно') : alert('Неверно'); // Задание 2

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
switch (month) {
    case `1`:
    case `2`:
    case `12`:
        alert(`Зима`)
        break;

    case `3`:
    case `4`:
    case `5`:
        alert(`Весна`)
        break;

    case `6`:
    case `7`:
    case `8`:
        alert(`Лето`)
        break;

    case `9`:
    case `10`:
    case `11`:
        alert(`Осень`)
        break;
        

    default:
        alert(`Запрос не корректен`)
        break;
} // Задание 5