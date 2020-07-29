// - создать массив с 20 числами.

let arr = [3, 5, 80, 5, 8, 3, 6, 10, 5, 40, 5, 3, 8, 9, 0, 3, 4, 12, 34, 76];

// -- при помощи метода sort и колбека  отсортировать массив.

// let sortedArr = arr.sort((a, b) => a - b);
// console.log(sortedArr);

// -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.

// let sortedArr1 = arr.sort((a,b) => b -a )
//
// console.log(sortedArr1);


// -- при помощи filter получить числа кратные 3

// let filtredArr = arr.filter(value => value % 3 === 0);
//
// console.log(filtredArr);


// -- при помощи filter получить числа кратные 10

// let filtredArr1 = arr.filter(value => value % 10 === 0);
//
// console.log(filtredArr1);
// -- перебрать (проитерировать) массив при помощи foreach()

// arr.forEach(element => console.log(element));

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше

// let mapArr = arr.map(value => value * 3);
// console.log(mapArr);


// - создать массив со словами на 15-20 элементов.

let arrWords = ['lal', 'nan', 'on', 'in', 'hello', 'bye', 'good', 'bad', 'bye', 'div', 'tag', 'js', 'java', 'sleep'];

// -- отсортировать его по алфавиту в восходящем порядке.

// let sortedArrW = arrWords.sort();
// console.log(sortedArrW);
// -- отсортировать его по алфавиту  в нисходящем порядке.

// let sortedArrW = arrWords.sort((a, b) => {
//     if ( a > b) {
//         return -1
//     } else {
//         return 1
//     }
// });
// console.log(sortedArrW);


// -- отфильтровать слова длиной менее 4х символов


// let filtredArr = arrWords.filter(value => {
//     if (value.length <= 4) {
//         return value
//     }
// })
// console.log(filtredArr);
// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце

// let newArr = arrWords.map(value => {
//     return value + '!'
// });
// console.log(newArr);

// Все робити через функції масивів (foreach, map ...тд)
// Дан масив :
let users = [{name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}];


// - відсортувати його за  віком (зростання , а потім окремо спадання)

// let sortedUsers = users.sort((a, b) => a.age - b.age)
// console.log(sortedUsers);

// let sortedUsers1 = users.sort((a, b) => b.age -a.age);
// console.log(sortedUsers1);


// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)

// let sortedUsers = users.sort((a,b) => a.name.length -b.name.length);
// console.log(sortedUsers);
//
// let sortedUsers1 = users.sort((a,b) => b.name.length - a.name.length);
// console.log(sortedUsers1);
//


/////////////////////////////////////////////////// ЩЕ  НЕ   ЗРОБЛЕНО    /////////////////////////////////////////////////////////////////////////


// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор
// (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)

/////////////////////////////////////////// ДОРОБИТИ//////////////////////////////////////////////////
// ЩОБ НЕ ЗМІНЮВАЛО ВИХІДНИЙ МАСИВ
//
// let newUsersArr = users.map((obj, index) => {
//
//     obj.id = index + 1;
//     return obj
// });
// console.log(newUsersArr);
// console.log('__________');
// console.log(users);
// - відсортувати його за індентифікатором

// let sortedUser = newUsersArr.sort((a, b) => b.id - a.id);
// console.log(sortedUser);
//
//
// -- наисать функцию калькулятора с 2мя числами и колбеком


// -- наисать функцию калькулятора с 3мя числами и колбеком


// =============================================
// =============================================
// =============КЛАССНАЯ РАБОТА=================
// =============================================
// =============================================
//
//


// let cars = [ {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400},
//     {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250},
//     {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300},
//     {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140},
//     {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200},
//     {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165},
//     {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120},
//     {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120},
//     {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350},
//     {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180},
//     {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180},
//     {producer:"mercedes",model: "e63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400},
//     {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230} ];
// Відфільтрувати масив за наступними крітеріями :
//     - двигун більше 3х літрів

// let carVolume = cars.filter(value => value.volume >= 3 );
// console.log(carVolume);


// - двигун = 2л

// let carVolume = cars.filter(value => value.volume === 2);
// console.log(carVolume);


// - виробник мерс

// let carProducer = cars.filter(value => value.producer === 'mercedes');
// console.log(carProducer);

// - двигун більше 3х літрів + виробник мерседес

// let carsFilter = cars.filter(value => value.volume >= 3 && value.producer === 'mercedes');
// console.log(carsFilter);


// - двигун більше 3х літрів + виробник субару

// let subaruFilter = cars.filter(value => value.volume > 3 && value.producer === 'subaru');
// console.log(subaruFilter);


// - сили більше ніж 300

// let power = cars.filter(value => value.power > 300);
// console.log(power);


// - сили більше ніж 300 + виробник субару

// let carsFilter = cars.filter(value => value.power >300 && value.producer === 'subaru');
// console.log(carsFilter);


// - мотор серіі ej

// let ej = cars.filter(value => value.engine.includes('ej'));
// console.log(ej);


// - сили більше ніж 300 + виробник субару + мотор серіі ej

// let carsFilter = cars.filter(value => value.power > 300 && value.producer === 'subaru' && value.engine.includes('ej'));
// console.log(carsFilter);


// - двигун меньше 3х літрів + виробник мерседес

// let carsFilter = cars.filter(value => value.volume < 3 && value.producer == 'mercedes');
// console.log(carsFilter);


// - двигун більше 2л + сили більше 250

// let carsFilter = cars.filter(value => value.volume > 2 && value.power > 250);
// console.log(carsFilter);

// - сили більше 250  + виробник бмв

// let carsFilter = cars.filter(value => value.power > 250 && value.producer === 'bmw');
// console.log(carsFilter);

// - взять слдующий массив
let usersWithAddress = [{
    id: 1,
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', street: 'Shevchenko', number: 16}
},
    {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 1}},
    {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Lviv', street: 'Ahevchenko', number: 90}},
    {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
    {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Lviv', street: 'Bhevchenko', number: 22}},
    {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 12}},
    {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Chevchenko', number: 16}},
    {id: 11, name: 'max', age: 31, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}];


// -- отсортировать его по id пользователей

// let sortedUsers = usersWithAddress.sort((a,b) => a.id - b.id);
// console.log(sortedUsers);

// -- отсортировать его по id пользователей в обратном опрядке

// let sortedUsers = usersWithAddress.sort((a,b) => b.id - a.id);
// console.log(sortedUsers);

// -- отсортировать его по возрасту пользователей

// let sortedUsers = usersWithAddress.sort((a,b) => a.age - b.age);
// console.log(sortedUsers);


// -- отсортировать его по возрасту пользователей в обратном порядке

// let sortedUsers = usersWithAddress.sort((a,b) => b.age -a.age);
// console.log(sortedUsers);


// -- отсортировать его по имени пользователей

// let usersSort = usersWithAddress.sort((a,b) => (a.name < b.name) ? -1 : 1)
//
// console.log(usersSort);


// -- отсортировать его по имени пользователей в обратном порядке

// let usersSort = usersWithAddress.sort((a,b) => a.name < b.name ? 1 : -1);
// console.log(usersSort);


// -- отсортировать его по названию улицы  в алфавитном порядке

// let userSort = usersWithAddress.sort((a,b) => a.address.street < b.address.street ? -1 : 1);
// console.log(userSort);

// -- отсортировать его по номеру дома по возрастанию

// let sortedUsers = usersWithAddress.sort((a,b) => a.address.number - b.address.number);
// console.log(sortedUsers);

// -- отфильтровать (оставить) тех кто младше 30

// let usersFilter = usersWithAddress.filter(value => value.age < 30);
// console.log(usersFilter);

// -- отфильтровать (оставить) тех у кого отрицательный статус

// let usersFilter = usersWithAddress.filter(value => value.status === false);
// console.log(usersFilter);


// -- отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет

// let usersFilter = usersWithAddress.filter(value => value.status === false && value.age < 30);
// console.log(usersFilter);

// -- отфильтровать (оставить) тех у кого номер дома четный

// let usersFilter = usersWithAddress.filter(value => value.address.number % 2 === 0);
// console.log(usersFilter);


// Створити обєкт автомобіля з полями:
//     Марка автомобля, потужність двигуна, власник, ціна, рік випуску.

let cars = [{
    producer: "subaru",
    year: 2010,
    color: "blue",
    type: "sedan",
    engine: "ej204x",
    price: 2000,
    power: 400,
    owner: {age: 20, name: 'oleg', experience: 2}
},
    {
        producer: "subaru",
        year: 2007,
        color: "silver",
        type: "sedan",
        engine: "ez30",
        price: 3000,
        power: 250,
        owner: {age: 31, name: 'andrii', experience: 8}
    },
    {
        producer: "subaru",
        year: 2011,
        color: "white",
        type: "jeep",
        engine: "ej20",
        price: 200,
        power: 300,
        owner: {age: 27, name: 'pavlo', experience: 2}
    },
    {
        producer: "subaru",
        year: 1998,
        color: "yellow",
        type: "sedan",
        engine: "ez20x",
        price: 200,
        power: 140,
        owner: {age: 45, name: 'vitalik', experience: 1}
    },
    {
        producer: "subaru",
        year: 2014,
        color: "red",
        type: "sedan",
        engine: "ej204x",
        price: 2000,
        power: 200,
        owner: {age: 18, name: 'anna', experience: 1}
    },
    {
        producer: "subaru",
        year: 2014,
        color: "red",
        type: "hachback",
        engine: "ej204",
        price: 2000,
        power: 165,
        owner: {age: 55, name: 'kateryna', experience: 20}
    },
    {
        producer: "bmw",
        year: 2013,
        color: "red",
        type: "hachback",
        engine: "f15",
        price: 10000,
        power: 120,
        owner: {age: 32, name: 'igor', experience: 4}
    },
    {
        producer: "bmw",
        year: 2010,
        color: "white",
        type: "sedan",
        engine: "f15",
        price: 1000,
        power: 120,
        owner: {age: 51, name: 'vasyl', experience: 25}
    },
    {
        producer: "bmw",
        year: 2009,
        color: "black",
        type: "coupe",
        engine: "f60",
        price: 6000,
        power: 350,
        owner: {age: 19, name: 'nastya', experience: 2}
    },
    {
        producer: "bmw",
        year: 2012,
        color: "red",
        type: "sedan",
        engine: "f20",
        price: 2000,
        power: 180,
        owner: {age: 29, name: 'natalya', experience: 5}
    },
    {
        producer: "mercedes",
        year: 1990,
        color: "silver",
        type: "sedan",
        engine: "eng200",
        price: 2000,
        power: 180,
        owner: {age: 20, name: 'sergii', experience: 4}
    },
    {
        producer: "mercedes",
        year: 2017,
        color: "yellow",
        type: "sedan",
        engine: "amg63",
        price: 3000,
        power: 400,
        owner: {age: 35, name: 'inna', experience: 6}
    },
    {
        producer: "mercedes",
        year: 2017,
        color: "red",
        type: "sedan",
        engine: "eng25",
        price: 2200,
        power: 230,
        owner: {age: 25, name: 'lalka', experience: 5}
    }];

//     Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.
//     Створити не менше 7 та не більше 20 машинок.
//     Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).

for (let i = 0; i < cars.length; i += 2) {
    cars[i].power += cars[i].power / 100 * 10;
    cars[i].price += cars[i].price / 100 * 5;

    console.log(cars[i].power);

};


// На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
// Для початку вкладіть всі наші створені автомобілі в масив cars.
//     Далі необхідно рати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%
// Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25,
// то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.

// cars.filter(value => {
//     if (value.owner.experience < 5 && value.owner.age > 25) {
//         value.owner.experience += 1
//     }
// });
//
// console.log(cars);

//     Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі


// let sum = 0;
//
// for (let car of cars) {
//     sum += car.price
// };
// console.log(sum);