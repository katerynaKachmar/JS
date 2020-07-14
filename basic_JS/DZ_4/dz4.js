
// - створити функцію яка виводить масив

// let arr = [];
// function arrFnc(arr) {
//
//     console.log(arr);
//
// }



// - створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попвередню функцію.
//
// function randomFnc(arr) {
//
//     for (let i = 0; i < 10; i++) {
//         arr.push(Math.floor (Math.random() * 1000));
//
//     }
//     arrFnc(arr)
//
// }
// randomFnc([]);


// - створити функцію яка приймає три числа та виводить та повертає найменьше.


// function funk(a,b,c) {
//     return Math.min(a,b,c)
//
// };
// console.log(funk(9, 5, 7));
//

//
// - створити функцію яка приймає три числа та виводить та повертає найбільше.

// function funk(a,b,c) {
//     return Math.max(a,b,c)
// };
// console.log(funk(3, 6, 1));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше

// function someFunk() {
//     console.log(Math.max.apply(null, Array.from(arguments)));
//     return Math.min.apply(null,Array.from(arguments))
// };
// let res = someFunk(2,58,3,97,2,1);
// console.log(res);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// function someF() {
//     let min = arguments[0];
//     let max = min;
//     for (let i = 1; i < arguments.length; i++) {
//         if (arguments[i] > max) {max = arguments[i]} else if (arguments[i] < min) {min = arguments[i]}
//
//     }
//     console.log(min);
//     console.log(max);
// };
// someF(1,4,6,8);



//
// function someFunk1() {
//     console.log(Math.max(...arguments));
//    return  Math.min(...arguments)
// }
// someFunk1(1,3,2,5,4,7);
// тут все числа^^^^^^^^^^^^^^^^^^ а виводить NaN



// - створити функцію яка виводить масив
let arr = [1,4,5,3,6, 200, 8,7,9,4,8];
// function arrayFunk(someArr) {
//     console.log(someArr)
// };
// arrayFunk(arr);

// - створити функцію яка повертає найбільше число з масиву
// - створити функцію яка повертає найменьше число з масиву


// function maxFromArr(someArr) {
//     let min = someArr[0];
//     let max = min;
//     for (let i = 0; i < someArr.length; i++) {
//
//        if (someArr[i] < min) {
//            min = someArr[i]
//        };
//        if (someArr[i] > max) {
//            max = someArr[i]
//        }
//
//
//     }
//     console.log(max);
//     console.log(min);
// }
// maxFromArr(arr);

// - створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.

//
// let arr = [1,4,7,3,6,5,8];


// function funk() {
//     let sum = 0
//     for (let elem of arr) {
//         sum += elem
//     }
//     return sum
// };
// let res = funk();
// console.log(res);

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let arr = [1,4,7,3,6,5,8];
// let someFunk = (someArr) => {
//     let sum = 0;
//     for (let i = 0; i<arr.length; i++) {
//         sum += arr[i];
//     }
//     return (sum / someArr.length)
// };
// let res = someFunk(arr);
// console.log(res);

// - Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві
//
// let arrObj = [{
//     name: 'lalka',
//     age: 22
// },
//     {
//         name: 'lolka',
//         age: 28
//     }
// ];




// function objLength(someArr) {
//     let newArr = [];
//     for (let el of someArr) {
//         if (typeof el === 'object') {
//             newArr.push(el)
//         }
//     }
//     return newArr.length
// }
// let number = objLength(arrObj);
// console.log(number + ' numbers of obj here');

// - Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них

// let arrObj = [{
//     name: 'lalka',
//     age: 22
// },
//     {
//         name: 'lolka',
//         age: 28
//     }
// ];


// function someFunk(someArr) {
//     let counter = 0;
//     for (let elem of someArr) {
//         for (let key in elem) {
//             counter++
//         }
//     }
//     console.log(counter);
// };
// someFunk(arrObj);




// - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     Приклад
//     [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]

// function arrSumator(arr1, arr2) {
//     let sumArr = []
//     for (let i = 0; i < arr1.length; i++) {
//         for (let j = 0; j < arr2.length; j++) {
//             if (i === j) {
//                 sumArr.push(arr1[i] + arr2[i])
//             }
//
//         }
//
//     }
//     return sumArr
// }
// let arrSumator1 = arrSumator([1,2,3,4,5], [2,3,4,5]);
// console.log(arrSumator1);
//OR
// function someF(arr1, arr2) {
//     let arrRes = [];
//
//     for (let i = 0; i < arr1.length; i++) {
//        const arrSum = arr1[i] + arr2[i]
//         arrRes.push(arrSum)
//     }
//     return arrRes
//
// }
// let res = someF([1,2,3,4], [2,3,4,5]);
// console.log(res);


//OR
//
// function arraySumator(arr1, arr2) {
//     let resArr =[];
//     let iterCount = 0;
//     if(arr1.length > arr2.length) {
//         iterCount = arr1.length
//     } else {
//         iterCount = arr2.length
//     }
//     for (let i = 0; i < iterCount; i++) {
//         const sumOfEl = (arr1[i] || 0) + (arr2[i] || 0);
//         resArr.push(sumOfEl)
//     }
//     return resArr
// }
// let arraySumator1 = arraySumator([1,2,3,4, 7], [2,3,4,5]);
// console.log(arraySumator1);


//
// - *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
// let arr = [1,2,3,4,5,6,7,8,9];
//
// function someF(someArr, i){
// let some = arr[i];
// let someNum1 = arr[i+1];
// arr[i+1] = some;
// arr[i] = someNum1;
//     console.log(arr);
// }
// someF(arr, 4);

// - *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// Приклад

let someArr = [1,0,6,0,3];

// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

// let someArr = [1,0,6,0,3];


// function transformZeroValues(array){
//  let arrWithZeroes = [];
//     for (let i = 0; i < array.length; i++) {
//         if(array[i] === 0){
//             let arrayOfDeleteElements = array.splice(i, 1);
//             arrWithZeroes.push(...arrayOfDeleteElements)
//         }
//     }
//     return array.concat(...arrWithZeroes);
// }
//
// console.log(transformZeroValues([0, 1, 2, 3, 4]));







//
// Створити функцію яка :
//     - Додає в боді блок з текстом "Hello owu"

// function hello() {
//     let div = document.createElement('div');
//     div.innerHTML = 'hello OWU';
//     document.body.appendChild(div)
//
// };
//
// hello()
// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи

// function someFunk(typeOfEl, someText) {
//     let someEl = document.createElement(typeOfEl);
//     someEl.innerHTML = someText
//     document.body.appendChild(someEl)
//
// };
// someFunk('h1', 'hello, im here');


// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.

// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці

//
// let cars = [
//     {
//     model: 'opel',
//     year: 2010,
//     power: 101,
//     colour: 'black'
//
// },
// {
//     model: 'ford',
//     year: 1998,
//     power: 100,
//     colour: 'red',
// },
// {
//     model: 'citroen',
//     year:2019,
//     power: 120,
//     colour: 'green'
// },
// {
//     model: 'mercedes',
//     year: 2020,
//     power: 203,
//     colour: 'silver'
// },
// {
//     model: 'fiat',
//     year: 1998,
//     power: 100,
//     colour: 'blue'
// },
// {
//     model: 'range_rover',
//     year: 2005,
//     power: 200,
//     colour: 'black'
// },
// {
//     model: 'toyota',
//     year: 2000,
//     power: 180,
//     colour: 'blue'
// },
//     {
//     model: 'peugeot',
//     year: 1990,
//     power: 80,
//     colour: 'broun'
// },
// {
//     model: 'nissan',
//     year: 2019,
//     power: 130,
//     colour: 'dark grey'
// },
// {
//     model: 'lada',
//     year: 2000,
//     power: 10,
//     colour: 'beka'
// }];
//
// function carFnc(someArr, id) {
//     for (let car of cars) {
//         let div = document.createElement('div');
//         div.innerHTML = car.model + ' ' + car.colour + ' ' + car.power + ' ' + car.year;
//         let elementById = document.getElementById(id);
//        elementById.appendChild(div)
//     }
//
//
// };
//
// carFnc(cars, 'carsList');



//



// **- функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто з відповідними "id" та "user_id",
// та повертає масив цих з'єднаних об'єктів.
//     Приклад масивів:
//     let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
// let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];

// function idFind(someArr, someArr1) {
//     for (let item of someArr) {
//         for (let item1 of someArr1) {
//             if (item.id === item1.user_id) {
//                 let userArr = [];
//                 userArr.push(item, item1);
//                 console.log(userArr);
//             }
//
//         }
//     }
// };
// idFind(usersWithId, citiesWithId);



// ***- беремо завдання з правилами з укроку №3 :
// Та робимо це функцією.При цьому правила отримувати через аргумент.
// "Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
// При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//     Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
//
// let rules = [
//     {
//         title: 'Первое правило Бойцовского клуба.',
//         body: 'Никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Второе правило Бойцовского клуба.',
//         body: 'Никогда никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Третье правило Бойцовского клуба.',
//         body: 'В схватке участвуют только двое.'
//     },
//     {
//         title: 'Четвертое правило Бойцовского клуба.',
//         body: 'Не более одного поединка за один раз.'
//     },
//     {
//         title: 'Пятое правило Бойцовского клуба.',
//         body: 'Бойцы сражаются без обуви и голые по пояс.'
//     },
//     {
//         title: 'Шестое правило Бойцовского клуба.',
//         body: 'Поединок продолжается столько, сколько потребуется.'
//     },
//     {
//         title: 'Седьмое правило Бойцовского клуба.',
//         body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
//     },
//     {
//         title: 'Восьмое и последнее правило Бойцовского клуба.',
//         body: 'Новичок обязан принять бой.'
//     },
//
// ];



// function rulesFunc(someArr) {
//     let div = document.createElement('div');
//
//     div.classList.add('wrap');
//     document.body.appendChild(div);
//     for (let rule of someArr) {
//         let div1 = document.createElement('div')
//         let h2 = document.createElement('h2');
//         let p = document.createElement('p');
//         h2.innerHTML = `${rule.title}`;
//         p.innerHTML = `${rule.body}`;
//         div.appendChild(div1)
//         div1.appendChild(h2);
//         div1.appendChild(p);
//
//     };
// }
// rulesFunc(rules);






// 1) Точная степень двойки.
//     Дано натуральное число N.
//     Выведите слово YES, если число N является точной степенью двойки,
//     или слово NO в противном случае.
//     Операцией возведения в степень пользоваться нельзя!




// 2) Deep Copy
// реалізувати глибоке копіювання обєкту за допомогою рекурсій

// let obj = {
//     name: 'lalka',
//     age: 12,
//     some: {
//         name: 'ol',
//         age: 3
//     }
// };
//
// function deepCopy(obj) {
//     let clone = {}
//     for (let props in obj) {
//         if (typeof obj.hasOwnProperty(props) === 'object') {
//             deepCopy(obj[props])
//         } else {
//             clone[props] = obj[props]
//         }
//     }
//     return clone
// };
//
// let clone = deepCopy(obj);
// clone.name = 'mima';
// console.log(obj);
// console.log(clone);




// 3) Flat
// Вирівняти багаторівневий масив в однорівневий
//   let arr =  [1,3, ['Hello', 'Wordd', [9,6,1]], ['oops'], 9] ;
// console.log(arr.flat(2));






