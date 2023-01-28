// task 1

let a = 10;
alert (a);
a = 20;
alert(a);

//  task 2

const yearFirstIphone = 2007;
alert ('The VERY FIRST IPhone was released in ' + yearFirstIphone + ' year');

//  task 3
const nameCreator = 'Brandan Eich';
alert (`The name of the JavaScript language is ${nameCreator}`);

// task 4

let a1 = 10;
let b1 = 2;
alert (`${a1 + b1}, ${a1 - b1}, ${a1 * b1}, ${a1 / b1}`);

// task 5

let a2 = 2;
let result = a2**5;
alert(result);

// task 6

let a3 = 9;
let b3 = 2;
alert (a3 % b3);

// task 7

let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
++num;
--num;
alert(num);

// task 8

let age = prompt ("Сколько вам лет?");
alert (`Bам ${age}`);

// task 9

let user = {
    nameUser: 'Irina',
    age: 18,
    isAdmin: true
};

user['city of residence'] = 'Boston';
user.age = 30;
delete user['city of residence'];
let info = prompt("Какую информацию хотите узнать o пользователе? (nameUser, age, isAdmin)");
alert(user[info]);

//task 10

let userName = prompt("What is your name?");
alert (`Привет, ${userName}!`);







