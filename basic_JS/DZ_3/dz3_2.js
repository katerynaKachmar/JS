// создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей. (Т.е поле name  должно присутствовать только 1 раз в одном объекте )
// let one = {
//     name: 'olga',
//     age: 23,
//     staus: true
// };
// let two = {
//     male: 'female',
//     car: true,
//     hobbie: 'music'
// };
// let three = {
//     password: 'lalala',
//     nik: 'lolka',
//     date: 10
// };
// let four = {
//     pets: true,
//     boyfriend: false,
//     family: true
// };
// let five = {
//     city: 'lviv',
//     country: 'Ukraine',
//     language: 'english'
// };

// создать 5 объектов с полностью разным набором полей. В каждом объекте должен присутсвовать массив и внутренний объект.


let one = {
    name: ['olga', 'katya','pavlo'],
    age: 23,
    staus: true
};
let two = {
    male: 'female',
    car: {
        volvo: true,
        porshe: false,
        lanos: true
    },
    hobby: ['music', 'sport']
};
let three = {
    password: 'lalala',
    nik: 'lolka',
    date: 10
};
let four = {
    pets: true,
    boyfriend: false,
    family: {
        mother: 'natalya',
        father: 'vasyl',
        brother: 'pavlo'
    }

};
let five = {
    city: 'lviv',
    country: 'Ukraine',
    language: ['english', 'ukranian']
};


// - При помощи for in вывести все ключи всех объектов из задания 1 и 2


// let keys = (obj) => {
//     for (let key in obj) {
//         console.log(key);
//
//     };
//     console.log('___________');
// };
// keys(one);
// keys(two);
// keys(three);
// keys(four);
// keys(five);

// - При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2
//
// console.log(Object.keys(one));
// console.log(Object.keys(two));
// console.log(Object.keys(three));
// console.log(Object.keys(four));
// console.log(Object.keys(five));

// Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет. (Значаения полей могу быть выдуманными)
//
// let car1 = {
//     model: 'opel',
//     year: 2010,
//     power: 101,
//     colour: 'black'
//
// };
// let car2 = {
//     model: 'ford',
//     year: 1998,
//     power: 100,
//     colour: 'red',
// };
// let car3 = {
//     model: 'citroen',
//     year:2019,
//     power: 120,
//     colour: 'green'
// };
// let car4 = {
//     model: 'mercedes',
//     year: 2020,
//     power: 203,
//     colour: 'silver'
// };
// let car5 = {
//     model: 'fiat',
//     year: 1998,
//     power: 100,
//     colour: 'blue'
// };
//
// let car6 = {
//     model: 'range rover',
//     year: 2005,
//     power: 200,
//     colour: 'black'
// };
// let car7 = {
//     model: 'toyota',
//     year: 2000,
//     power: 180,
//     colour: 'blue'
// };
// let car8 = {
//     model: 'peugeot',
//     year: 1990,
//     power: 80,
//     colour: 'broun'
// };
// let car9 = {
//     model: 'nissan',
//     year: 2019,
//     power: 130,
//     colour: 'dark grey'
// };
// let car10 = {
//     model: 'lada',
//     year: 2000,
//     power: 10,
//     colour: 'beka'
// };
//  let cars = [car1, car2, car3, car4, car5, car6, car7, car8, car9, car10];

// - Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион. (Значаения полей могу быть выдуманными)

let city1 = {
    name: 'lviv',
    population: 10000,
    country: 'ukraine',
    region: 'lalka'
};
let city2 = {
    name: 'london',
    population: 200000,
    country: 'United Kingdom',
    region: 'dodo'
};
let city3 = {
    name: 'berlin',
    population: 70000,
    country: 'germany',
    region: 'mimi'
};
let city4 = {
    name: 'madrid',
    population: 800000,
    country: 'spain',
    region: 'rodo'
};
let city5 = {
    name: 'kyiv',
    population: 200000,
    country: 'Ukraine',
    region: 'lido'
};
let city6 = {
    name: 'paris',
    population: 800000,
    country: 'france',
    region: 'lyly'
};
let city7 = {
    name: 'hamburg',
    population: 100000,
    country: 'germany',
    region: 'yido'
};
let city8 = {
    name: 'warsaw',
    population: 200000,
    country: 'poland',
    region: 'pshe'
};
let city9 = {
    name: 'milan',
    population: 500000,
    country: 'italy',
    region: 'nana'
};
let city10 = {
    name: 'odessa',
    population: 200000,
    country: 'Ukraine',
    region: 'papa'
};
let cities = [city1, city2, city3, city4, city5, city6, city7, city8, city9, city10]

// Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель. Водитель является отдельным объектом с полями имя, возраст, пол, стаж.

let car1 = {
    model: 'opel',
    year: 2010,
    power: 101,
    colour: 'black',
    driver: {
        name: 'vova',
        age: 30,
        male: 'male',
        experience: 9
    }

};
let car2 = {
    model: 'ford',
    year: 1998,
    power: 100,
    colour: 'red',
    driver: {
        name: 'nadya',
        age: 20,
        male: 'female',
        experience: 1
    }

};
let car3 = {
    model: 'citroen',
    year:2019,
    power: 120,
    colour: 'green',
    driver: {
        name: 'pavlo',
        age: 35,
        male: 'male',
        experience: 10
    }

};
let car4 = {
    model: 'mercedes',
    year: 2020,
    power: 203,
    colour: 'silver',
    driver: {
        name: 'lilya',
        age: 28,
        male: 'female',
        experience: 6
    }

};
let car5 = {
    model: 'fiat',
    year: 1998,
    power: 100,
    colour: 'blue',
    driver: {
        name: 'nastya',
        age: 48,
        male: 'female',
        experience: 15
    }

};

let car6 = {
    model: 'range rover',
    year: 2005,
    power: 200,
    colour: 'black',
    driver: {
        name: 'andrii',
        age: 25,
        male: 'male',
        experience: 8
    }

};
let car7 = {
    model: 'toyota',
    year: 2000,
    power: 180,
    colour: 'blue',
    driver: {
        name: 'olga',
        age: 32,
        male: 'female',
        experience: 7
    }

};
let car8 = {
    model: 'peugeot',
    year: 1990,
    power: 80,
    colour: 'brown',
    driver: {
        name: 'inna',
        age: 60,
        male: 'female',
        experience: 20
    }

};
let car9 = {
    model: 'nissan',
    year: 2019,
    power: 130,
    colour: 'dark grey',
    driver: {
        name: 'illarion',
        age: 50,
        male: 'male',
        experience: 9
    }

};
let car10 = {
    model: 'lada',
    year: 2000,
    power: 10,
    colour: 'beka',
    driver: {
        name: 'oleg',
        age: 26,
        male: 'male',
        experience: 4
    }

};
let cars1 = [car1, car2, car3, car4, car5, car6, car7, car8, car9, car10];

// проитерировать каждый массив из задания 5,6,7 при помощи while.
//  function iter(some) {
//      let i = 0;
//      while (i < some.length) {
//          console.log(some[i]);
//          i++
//      }
//  };
//  iter(cars1);
// console.log('_______________');
// iter(cities);

// проитерировать каждый массив из задания 5,6,7 при помощи for .

// function itF(some) {
//     for ( let i = 0; i < some.length; i++) {
//         console.log(some[i]);
//     }
// }
//
//
// console.log(itF(cars1));
// console.log('______________________');
// console.log(itF(cities));


// let forOf = (some) => {
//     for (let one of some) {
//         console.log(one);
//     }
// };
// forOf(cities);
// console.log('____________');
// forOf(cars1);


// взять объекты из задания 1 и превратить каждый в json.

// let json = JSON.stringify(car1);
// console.log(json);

// let toJson = (some) => {
//     let json = JSON.stringify(some);
//     return json
// };
// let resJson = toJson(car1);
// console.log(resJson);

// Запитати який запис в даному випадку раціональніший ^ чи такий ??????????????????????????????????????????????????????????????????????????????????

// let toJson1 = (some) => {
//     let json = JSON.stringify(some);
//     console.log(json);
// };
// toJson1(city10);
// toJson1(city9);
// toJson1(city8);

// let toJson3 = JSON.stringify([city10, city9, city8,city7, city6, city5, city4, city3, city2, city1]);
//
// console.log(toJson3);
//
//
// city1 = JSON.stringify(city1);
// console.log(city1);
//
// city2 = JSON.stringify(city2);
// console.log(city2);
//
// city3 = JSON.stringify(city3);
// console.log(city3);

// взять json из задания 11 и превратить их обратно в объекты.

// city1 = JSON.parse(city1);
// console.log(city1);
// city2 = JSON.parse(city2);
// console.log(city2);
//
// city3 = JSON.parse(city3);
// console.log(city3);

// запитати про схему переприсвоєння. наприклад коли робити якісь дії з об єктом за
// допомогою функції - сам об єкт не буде змінюватися. лише якшо "city1 = bla bla"?????????????????????????????????????????????????????????????

// взять массив из задания 5,в цикле перебрать его объекты превратив их в json .

// for (let js of cars1) {
//     let res = JSON.stringify(js)
//     console.log(res);
// };
//
// let i = 0;
// while (i < cities.length) {
//     let ress = JSON.stringify(cities[i])
//     console.log(ress);
//     i++
// };
// console.log(cities[i]);



// console.log('_________');

// - взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.
// let res =[];
// for (let key of cars1) {
//     res += JSON.stringify(key)
// };
// console.log(res);


// Создать массив пользователей.
// У каждого пользователя обязательно должено быть поле skills которое является массивом.
// Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills

let user1 = {
    name: 'ivan',
    age: 23,
    skills: ['react', 'basic js']
};
let user2 = {
    name: 'inna',
    age: 30,
    skills: ['music', 'sport']
};
let user3 = {
    name: 'pavlo',
    age: 35,
    skills: ['c++', 'java']
};

// console.log('_________________________');
// let users = [user1, user2, user3];
//
// for (let user of users) {
//     console.log(user);
//     for (let us of user.skills) {
//         console.log(us)
//     }
// }
//
// console.log('______________________');

// ПО ХОДУ ЦЕ НЕПРАВИЛЬНО ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ bad(((

// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое
// является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills.
// Скопировать все skills всех пользователей в отедльный массив
// let skills = []
// for (let user of users) {
//     console.log(user);
//     for (let us of user.skills) {
//         skills += ` ${us}`
//         console.log(us)
//     }
// }
//
// console.log(skills);


// - За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта.
// let users1 = [{name: 'vasya', age: 31, status: false, skills: ['java', 'js']}, {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']}, {name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']}, {name: 'olya', age: 28, status: false, skills: ['java', 'js']}, {name: 'max', age: 30, status: true, skills: ['mysql', ',mongo']}];


// let usersSkills = []
// for (let i = 0; i < users1.length; i++) {
//     const user = users1[i]
//     for (let j = 0; j < user.skills.length; j++) {
//         const skill = user.skills[j];
//         usersSkills.push(skill)
//
//     }
//
// }
// console.log(usersSkills);
/////////////////////////////////////////////////////////////////////////////////////

let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];


console.log('________________________________');

// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
// let adress = [];
// for (let user of users) {
//     console.log(`user name ${user.name} and only adress ${Object.values(user.address)}`);
//     adress.push(Object.values(user.address));
//
// }
// console.log(adress);
//  СПРОБУВАТИ ЗРОБИТИ СУЦІЛЬНИЙ МАСИВ!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості
// 01.11.00

    // for (let user of users) {
    //     let studentsDiv = document.createElement('div');
    //     let innerDiv = document.createElement('div');
    //     for (let a in user) {
    //         let innerDiv = document.createElement('div');
    //         for (let b in [a].address) {
    //             let innerDiv2 = document.createElement('div');
    //             innerDiv2.innerHTML = `${user[a].address.city}`
    //             innerDiv.appendChild(innerDiv2)
    //         }
    //         innerDiv.innerHTML = `${user[a]}`
    //         studentsDiv.appendChild(innerDiv)

    //     studentsDiv.innerHTML = `${user.name}, ${user.age}, ${user.status}`
    //     document.body.appendChild(studentsDiv)
    // }

console.log('__________________NEW_____________________');

//
// for (const user of users) {
//     let div = document.createElement('div');
//     let div1 = document.createElement('div');
//     let div3 = document.createElement('div');
//     let div4 = document.createElement('div');
//     let div5 = document.createElement('div');sdfgl;
//     div.innerHTML = `${user.name} ${user.age} ${user.status}`;
//     div1.innerHTML = `${user.address.city}    `;
//     div3.innerHTML = `${user.address.country}`
//     div4.innerHTML = `${user.address.street}`
//     div5.innerHTML = `${user.address.houseNumber}`
//
//
//
//
//
//     document.body.appendChild(div);
//     div.appendChild(div1);
//     div.appendChild(div5);
//     div.appendChild(div3);
//     div.appendChild(div4);
//
// }
 // створити до кожного обєкту дівки окремо!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????

// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:

// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Частковий приклад реультату:
//     let usersWithCities = [{id: 1, name: 'vasya', age: 31, status: false, address: {user_id: 1, country: 'Ukraine', city: 'Ternopil'}}....]

//     let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
// let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
// //

//
// for (let user of usersWithId) {
//     for (let city of citiesWithId) {
//         if (user.id ===  city.user_id) {
//             user.adress = city;
//         }
//     }
// };
// console.log(usersWithId);


// - створити розмітці блок з id, class та текстом в середені. Зчитати окремо цей текст з селекторів по id , class та тегу
// let div = document.createElement('div');
// div.classList.add('className');
// div.id = 'id';
// div.innerHTML = 'some text';
// document.body.appendChild(div);
//
//
// let className = document.getElementsByClassName('className');
// for (let cl of className) {
//     console.log(cl.innerText);
//
// };
// let id = document.getElementById('id');
// console.log(id.innerText);
//
// let tag = document.getElementsByTagName('div');
//
// for (let t of tag) {
//     console.log(t.innerText);
// };

// - змінити цей текст використовуючи селектори id, class,  tag
// - змінити висоту та ширину блоку використовуючи селектори id, class,  tag
// id.innerText = 'new text';
// id.style.width = '200px';
// id.style.height = '400px';
// for (let t of tag) {
//     t.innerHTML = 'new new text';
//     t.style.width = '100px';
//     t.style.height = '100px';
// };
//
// for (let cl of className) {
//     cl.innerHTML = 'new text'
//     cl.style.width = '30px';
//     cl.style.height = '50px'
//
// };

// - за допомоги document.createElement та appendChild створити таблицю на 1 рядок з трьома ячейками всередені

function create (type, content, append, ap) {
    let element = document.createElement(type);
    element.innerHTML = content;
    append.appendChild(element)

};
create('table', '', document.body);




let table = document.createElement('table');
let tr = document.createElement('tr');
let td = document.createElement('td');
let td1 = document.createElement('td');
let td2 = document.createElement('td');


let textTd = document.getElementsByTagName('td');
for (let td of textTd) {
    td.innerHTML = 'hello'
}

document.body.appendChild(table);
table.appendChild(tr);
tr.appendChild(td);
tr.appendChild(td1);
tr.appendChild(td2);




let element = document.createElement('div');
element.innerHTML = 'hello';

document.body.appendChild(element)



