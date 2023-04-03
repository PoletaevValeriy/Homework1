function numbers(e,f) {
    if (e < f) {
        return e;
    } else if (e > f){ 
        return f;        
    }
      else if (e === f) {
        return e || f;
      }    
}
alert(numbers(4,8)); // Задание 1


function parity(n) {
    if (n % 2 === 0) {
        return 'Четное';
    } else {
      return 'Нечетное';
  }
};

  alert(parity(5));
  alert(parity(2)); // Задание 2

  
function degree(a) {
    let square = a ** 2;
    return square;
};

let result = degree(4); 

alert (result); 

function degree(a) {
    return a ** 2
};

let result2 = degree(4); 

alert (result2); // Задание 3


let years = prompt(`Сколько вам лет?`);
if (years < 0) {
    alert(`Вы ввели неправильное значение`);
}
else if  (years >= 0 && years <= 12) {
        alert(`Привет, друг!`);
}
else if  (years >= 13) {
        alert(`Добро пожаловать!`);
    } // Задание 4


let c = Number(prompt(`Введите число`));
let d = Number(prompt(`Введите число`));

function check(c, d) {
    if (isNaN(c) === false && isNaN(d) === false) {
        return c * d;
    } 
    else if (isNaN(c) === true || isNaN(d) === true) {
        alert(`Одно или оба значения не являются числом`);
    }
}
alert(check(c, d));

 // Задание 5

 let g = Number(prompt(`Введите число`));

function checkNumber(g) {
    if (isNaN(g) === false) {
        return g ** 3;
    } 
    else if (isNaN(g) === true) {
        alert(`Переданный параметр не является числом`)
    }
}
alert(`${g} в кубе равняется ${checkNumber(g)}`);
// Задание 6

function getRectangleArea() {
    return 3.14 * this.radius ** 2;
  }
  function getRectanglePerimeter() {
    return 2 * 3.14 * this.radius ;
  }
  
  const circle1 = {
    radius: 12,
    getArea: getRectangleArea,
    getPerimeter: getRectanglePerimeter,
  };
  
  const circle2 = {
    radius: 23,
    getArea: getRectangleArea,
    getPerimeter: getRectanglePerimeter,
  };
  
  alert(circle1.getArea());
  alert(circle1.getPerimeter());
  alert(circle2.getArea());
  alert(circle2.getPerimeter());
  // Задание 7

  














  
  
  