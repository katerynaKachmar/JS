// -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select

// Приклад результату
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }

// function Tag(titleOfTag, action, actionOfAttr) {
//     this.titleOfTag = titleOfTag || 'no title';
//     this.action = action || 'no action';
//     this.actionOfAttr = actionOfAttr || [];
// }

// let title = '<span>';
// let actionSpan = 'Тег <span> предназначен для определения строчных элементов документа';
// let attr = [{
//     titleOfAttr: 'accesskey',
//    actionOfAttr: 'Активация ссылки с помощью комбинации клавиш.'
// }, {
//     titleOfAttr: 'class',
//     actionOfAttr: 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.'
// }
// ];
//
// let titleTag = new Tag(title, actionSpan, attr);
// console.log(titleTag);

// let title = '<a>';
// let actionA = 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.';
// let attr = [{
//     titleOfAttr: 'accesskey',
//     actionOfAttr: 'Активация ссылки с помощью комбинации клавиш.'
// }, {
//     titleOfAttr: 'coords',
//     actionOfAttr: 'Устанавливает координаты активной области.'
//     }];
//
// let tagA = new Tag(title, actionA, attr);
// console.log(tagA);
//
//
// let title1 = '<p>';
// let actionP = 'Определяет текстовый абзац';
// let attr1 = [{
//     titleOfAttr: 'align',
//     actionOfAttr: 'Определяет выравнивание текста.'
// }];
//
// let tagP = new Tag (title1, actionP, attr1);
//
// console.log(tagP);

// let title2 = '<table> ';
// let actionTable = 'Элемент <table> служит контейнером для элементов,';
// let attr2 = [{
//     titleOfAttr: 'align',
//     actionOfAttr: 'Определяет выравнивание текста.'
// },
//     {
//         titleOfAttr: 'background',
//         actionOfAttr: 'Задает фоновый рисунок в таблице.'
//     }];
// let tagTable = new Tag (title2, actionTable, attr2);
// console.log(tagTable);


// let title2 = '<div>';
// let actionDiv = 'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого. ';
// let attr2 = [{
//     titleOfAttr: 'align',
//     actionOfAttr: 'Определяет выравнивание текста.'
// },
//     {
//         titleOfAttr: 'title',
//         actionOfAttr: 'Добавляет всплывающую подсказку к содержимому.'
//     }]
// let tagDiv = new Tag (title2, actionDiv, attr2);
// console.log(tagDiv);



// let title2 = '<h1>';
// let actionH1 = 'Так, тег <h1> представляет собой наиболее важный заголовок первого уровня';
// let attr2 = [{
//     titleOfAttr: 'align',
//     actionOfAttr: 'Определяет выравнивание текста.'
// }]
// let tagH1 = new Tag (title2, actionH1, attr2);
// console.log(tagH1);

// ==============================================
//     -  Створити класс  для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результату
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }
// ==============================================




// class Tags{
//     constructor (titleOfTag, action, actionOfAttr) {
//         this.titleOfTag = titleOfTag || 'no title';
//         this.action = action || 'no action';
//         this.actionOfAttr = actionOfAttr || [];
//     }
// }


// let title = '<span>';
// let actionSpan = 'Тег <span> предназначен для определения строчных элементов документа';
// let attr = [{
//     titleOfAttr: 'accesskey',
//     actionOfAttr: 'Активация ссылки с помощью комбинации клавиш.'
// }, {
//     titleOfAttr: 'class',
//     actionOfAttr: 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.'
// }
// ];
//
// let titleTag = new Tags (title, actionSpan, attr);
// console.log(titleTag);



//
// let title = '<a>';
// let actionA = 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.';
// let attr = [{
//     titleOfAttr: 'accesskey',
//     actionOfAttr: 'Активация ссылки с помощью комбинации клавиш.'
// }, {
//     titleOfAttr: 'coords',
//     actionOfAttr: 'Устанавливает координаты активной области.'
// }];
//
// let tagA = new Tags(title, actionA, attr);
// console.log(tagA);


// let title2 = '<h1>';
// let actionH1 = 'Так, тег <h1> представляет собой наиболее важный заголовок первого уровня';
// let attr2 = [{
//     titleOfAttr: 'align',
//     actionOfAttr: 'Определяет выравнивание текста.'
// }]
// let tagH1 = new Tags (title2, actionH1, attr2);
// console.log(tagH1);


// let title2 = '<div>';
// let actionDiv = 'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого. ';
// let attr2 = [{
//     titleOfAttr: 'align',
//     actionOfAttr: 'Определяет выравнивание текста.'
// },
//     {
//         titleOfAttr: 'title',
//         actionOfAttr: 'Добавляет всплывающую подсказку к содержимому.'
//     }]
// let tagDiv = new Tags (title2, actionDiv, attr2);
// console.log(tagDiv);


// ==============================================
//     - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car


// let car = {
//     model: 'volvo',
//     manufacturer: 'sweden',
//     year: 2010,
//     maxSpeed: 200,
//     engine: 3,
//     driverMan: {},
//     drive: function () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} /h`)
//     },
//     info: function () {
//         console.log(`model: ${this.model},
//         manufacturer: ${this.manufacturer},
//         year: ${this.year},
//         maxSpeed: ${this.maxSpeed},
//         engine: ${this.engine},
//         driver: ${this.driverMan.name}`)
//     },
//     increaseMaxSpeed: function (newSpeed) {
//         this.maxSpeed += newSpeed
//     },
//     changeYear: function (newValue) {
//         this.year = newValue
//     },
//     addDriver: function (driver) {
//         this.driverMan = driver
//     }
//
//
//
// };
//
// let someDriver = {
//     name: 'oleg',
//     age: 25,
//     exp: 3
// };
// car.info();
// car.changeYear(2013);
// car.info();
// car.addDriver(someDriver);
// car.info();
// car.increaseMaxSpeed(20);
// car.info();
//



//
// ==============================================
//     - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

// function Cars (model, manufacturer, year,maxSpeed, engine, driverMan, drive, info, ) {
//     this.model = model;
//     this.manufacturer = manufacturer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engine = engine;
//     this.driver = null;
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} /h`);
//     };
//     this.info = function () {
//         console.log(`model: ${this.model},
//          manufacturer: ${this.manufacturer},
//          year: ${this.year},
//          maxSpeed: ${this.maxSpeed},
//          engine: ${this.engine},
//          driver: ${this.driver}`)
//
//     };
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.speed += newSpeed
//     };
//     this.changeYear = function (newValue) {
//         this.year = newValue
//     };
//     this.addDriver = function (driver) {
//         this.driver = driver
//     }
//
//
// };
// let model = 'volvo';
// let manufacturer = 'sweden';
// let  year = 2010;
// let maxSpeed = 200;
// let engine = 3;
// let someDriver = {
//     name: 'oleg',
//     age: 20
// };
// let car1 = new Cars(model, manufacturer, year, maxSpeed, engine);
//
// car1.info();
// car1.addDriver(someDriver.name);
// car1.info();


// ==============================================
//     - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
//

// class Cars1 {
//     constructor (model, manufacturer, year, maxSpeed, engine,driver){
//         this.model = model;
//         this.manufacturer = manufacturer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.engine = engine;
//         this.driver = null;
//     }
//     drive() {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} /h`)
//     };
//     info() {
//         console.log(`model: ${this.model},
//          manufacturer: ${this.manufacturer},
//          year: ${this.year},
//          maxSpeed: ${this.maxSpeed},
//          engine: ${this.engine},
//          driver: ${this.driver}`)
//     };
//     increaseMaxSpeed (newSpeed) {
//         this.speed += newSpeed
//     };
//     changeYear (newValue) {
//         this.year = newValue
//     };
//     addDriver (driver) {
//         this.driver = driver
//     }
//
// }
// let car1 = new Cars(model, manufacturer, year, maxSpeed, engine);
//
// car1.addDriver(someDriver.name)
// car1.info();
// car1.drive();

// ==============================================
//     -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
// ==============================================

//
// class Cinderella {
//     constructor(name, age, size) {
//         this.name = name;
//         this.age = age;
//         this.size = size
//     }
// };
// let cinderella1 = new Cinderella('lola', 52, 43);
// let cinderella2 = new Cinderella('ola', 12, 33);
// let cinderella3 = new Cinderella('alina', 80, 36);
// let cinderella4 = new Cinderella('tanya', 10, 38);
// let cinderella5 = new Cinderella('nastya', 15, 39);
// let cinderella6 = new Cinderella('ira', 100, 41);
// let cinderella7 = new Cinderella('agnessa', 8, 34);
// let cinderella8 = new Cinderella('lila', 11, 20);
// let cinderella9 = new Cinderella('anna', 23, 15);
// let cinderella10 = new Cinderella('inna', 34, 10);
//
// let cinderellasArr = [cinderella1, cinderella2,
//     cinderella3, cinderella4, cinderella5,
//     cinderella5, cinderella6, cinderella7,
//     cinderella8, cinderella9, cinderella10]
//
// class Prince {
//     constructor(name, age, cinderellaSize) {
//         this.name = name;
//         this.age = age;
//         this.cinderellaSize = cinderellaSize
//     }
//     findCinderella(someArr) {
//         for (let elem of someArr) {
//             if (elem.size === this.cinderellaSize) {
//                 console.log(`now we age together: ${elem.name} and ${this.name}. cinderellas size: ${elem.size}, prince size: ${this.cinderellaSize}`)
//             }
//         }
//     }
// };
//
// let ivan = new Prince('ivan', 19, 36);
//
// ivan.findCinderella(cinderellasArr);


// ==============================================
//     -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
// ==============================================