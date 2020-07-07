// -- створити об'єкт (не меньше 5ти властивостей) який описує
// - собаку
// - людину
// - автомобіль
// - квартиру
// - книгу

// let dog = {
//     name: 'rex',
//     age: 2,
//     status: true,
//     owner: 'andrii',
//     homeAdress: 'lviv'
// };
//
// let human = {
//     name: 'vitalik',
//     age: 43,
//     status: false,
//     wife: false,
//     car: true
// };
// let car = {
//     model: 'volvo',
//     year: 1998,
//     colour: 'red',
//     power: 110,
//     owner: 'lalik'
// };
// let flat = {
//     owner: 'olga',
//     location: 'kyiv',
//     rooms: 3,
//     year: 2010,
//     price: 202
// };
// let book = {
//     name: 'harry potter',
//     year: 1998,
//     author: 'J.K Rowling',
//     part: 5,
//     pages: 560
// };


// -- Створити масив та вивести його в консоль:
// - з 5 собак
// - 3 5 людей
// - з 5 автомобілів
// let dog1 = {
//     name: 'lal',
//     age: 2
// };
// let dog2 = {
//     name: 'dog',
//     age: 4
// };
// let dog3 = {
//     name: 'lil',
//     age: 1
// };
// let dog4 = {
//     name: 'fat',
//     age: 9
// };
// let dog5 = {
//     name: 'baf',
//     age: 8
// };
// let dogs = [dog1, dog2, dog3, dog4, dog5];
//
// for (let dog of dogs) {
//     console.log(`hello, my name is ${dog.name}, i'm ${dog.age} years old`);
// };

// -- створити об'єкт (не меньше 5ти властивостей) який описує, одна з властивостей обов'язково повинна бути об'єктом,ще одна - масивом
// - будинок
// - водій
// - іграшку
// - стіл
// - сумка

// let driver = {
//     name: 'vova',
//     age: 27,
//     experience: {
//         taxi: 2,
//         privateDriver: 3,
//     },
//     cars: ['volvo', 'ford'],
//     rating: 5
//
// };
// let house = {
//     owners: ['vasyl', 'olga'],
//     type: 'villa',
//     rooms: {
//         bedroom: 2,
//         bath: 1,
//         toilet: 2
//     },
//     location: 'lviv',
//     price: 10000
// };

// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
// for (let i = 0; i < users.length; i++) {
//     let index = users[i].name + [i];
//     console.log(index);
//
// }
// // - звернутися в відповідну ячейку масиву і відповідний параметр об'єкта і вивести в консольх наступне
// // - статус Андрія
//
// console.log(users[8].status);
//
// let res = users.find(value => value.name === 'andrey');
// console.log(res.status);
// // - статус Максима
// console.log(users[10].status);
//
// let res1 = users.find(value => value.name === 'max');
// console.log(res.status);
//
// // - ім'я передостаннього об'єкту
// console.log(users[9].name);
// // - ім'я третього об'єкта
//
// console.log(users[2].name);
// // - вік Олега
// console.log(users[6].age);
//
// // - вік Олі
//
// console.log(users[3].age);
//
//
// // - вік + ім'я 5го об'єкта
//
// console.log(users[4].age + users[4].name);
// // - вік + сатус Анни
//
// console.log(users[5].age + users[5].name);

// -- Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :

// - отримує текст з параграфа з id "content"
// let someText = document.getElementById('content').textContent
// console.log(someText);


// - отримує текст з блоку з id "rules"


// let someText2 = document.getElementById('rules').textContent;
// console.log(someText2);
// - замініть текст параграфа з id 'content' на будь-який інший
//
// let newText = document.getElementById('content').textContent = 'some new text';
// console.log(newText);


// - замініть текст параграфа з id 'rules' на будь-який інший
//
// let newText2 = document.getElementById('rules').textContent = 'some new text';
// console.log(newText2);
// - змініть кожному елементу колір фону на червоний

// document.getElementById('content').style.backgroundColor = 'red';
// document.getElementById('rules').style.backgroundColor = 'red';
// let red = document.getElementsByTagName('li');
// for (let col of red) {
//     col.style.backgroundColor = 'red'
// }

// - змініть кожному елементу колір тексту на синій
// document.getElementById('rules').style.color = 'blue';
// document.getElementById('content').style.color = 'blue';
//
// let textRed = document.getElementsByClassName('fc_rules');
// for (let red of textRed) {
//     red.style.color = 'blue'
// }
// - отримати весь список класів елемента з id=rules і вивести їх в console.log
// let classList = document.getElementById('rules').classList;
// console.log(classList);
// - отримати всі елементи з класом fc_rules

// console.log(document.getElementsByClassName('fc_rules'));
// - поміняти колір тексту у всіх елементів fc_rules на червоний
// let fcRules = document.getElementsByClassName('fc_rules');
// for (let item of fcRules) {
//     item.style.color = 'red'
// };





