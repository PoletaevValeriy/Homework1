let i = 0;

while (i < 2){
    alert('Привет!');
    i++;
} // Задание 1

let q = 0;

while (q < 6){
    alert(q);
    q++;
} // Задание 2

let w =0;

for(w=7; w<23; w++){
    alert(w);
} // Задание 3

const obj = {
    Коля : '200',
    Вася:'300',
    Петя:'400',
};

for(let key in obj){
    alert(`${key}- зарплата ${obj[key]} долларов`)
} // Задание 4
 

let num = 0; 
for(let n = 1000; n >= 25; n = n / 2)  {
    alert(n);
    num++;
} // Задание 5

let e = 0;
for(e = 3; e < 31; e = e + 7){
    alert(`Сегодня пятница, ${e}-е число. Необходимо подготовить отчет`);
    e++
} // Задание 6







