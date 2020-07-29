// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".

// let divka = document.createElement('div');
// let btnInDiv = document.createElement('button');
//
// divka.innerHTML = 'HELLOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO'
// divka.id = 'text';
// btnInDiv.innerText = 'hide'
//
// document.body.appendChild(divka);
// document.body.appendChild(btnInDiv);
// btnInDiv.onclick = () => divka.hidden ? divka.hidden = false : divka.hidden = true
// ;
//
// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.

// let btn = document.createElement('button');
// btn.innerText = 'hello';
// document.body.appendChild(btn);
// btn.onclick = () => {
//     btn.style.display = 'none'
// };
//
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

// let div = document.createElement('div');
// let input = document.createElement('input');
// let btn =  document.createElement('button');
// input.defaultValue = 'enter your age';
// btn.innerText = 'OK';
// document.body.appendChild(div);
// div.appendChild(input);
// div.appendChild(btn);
//
// btn.onclick = ev => {
//     let value = input.value;
//     if (value < 18) {
//         alert('GO HOME')
//     } else {
//         alert('you can stay')
//     }
//
// };


// - Создайте меню, которое раскрывается/сворачивается при клике
//
// let menuHide = document.getElementById('menuHide');
// let ul = document.getElementById('list')
// menuHide.onclick = ev => ul.hidden ? ul.hidden = false : ul.hidden = true;


// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.

// let content = document.createElement('div');
// document.body.appendChild(content)

// let coments = [
//     {
//         title: 'lalka',
//         body: 'lalalal lalalala lalalala alalalaa lalalal'
//     }, {
//         title: 'olka',
//         body: 'ololololo lalalala olololol alalalaa ololol'
//     }, {
//         title: 'inka',
//         body: 'ininn lalalala ininn alalalaa lalalal'
//     }, {
//         title: 'hello',
//         body: 'hello lalalala hello alalalaa lalalal'
//     }, {
//         title: 'bye',
//         body: 'bye lalalala lalalala alalalaa lalalal'
//     }
// ];

//
// coments.forEach(value => {
//     let div = document.createElement('div');
//     let h2 = document.createElement('h2');
//     let p = document.createElement('p');
//     let btn = document.createElement('button');
//     btn.innerHTML = 'hide';
//     h2.innerHTML = value.title;
//     p.innerHTML = value.body;
//     btn.onclick = ev => p.hidden ? p.hidden = false : p.hidden = true;
//
//     div.appendChild(h2);
//     div.appendChild(p);
//     div.appendChild(btn);
//     content.appendChild(div);
//
// });

//
// - створити 2 форми  по 2 інпути в кожній.
// ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

//
// let btn = document.getElementById('btn');
// let input1 = document.getElementById('input1');
// let input2 = document.getElementById('input2');
// let input3 = document.getElementById('input3');
// let input4 = document.getElementById('input4');
//
// btn.onclick = ev => {
//     let forms = document.forms;
//     for (const form of forms) {
//         console.log(form);
//     }
//
//
// };

// - Створити функцію, яка генерує таблицю.
//     Перший аргумент визначає кількість строк.
//     Другий параметр визначає кліькіть ячеєк в кожній строці.
//     Третій параметр визначає елемент в який потрібно таблицю додати.
// let content = document.getElementById('content');
// // function tableCreate(rows, cols, element) {
// //    let table =  document.createElement('table');
// //     for (let i = 0; i < rows; i++) {
// //         let tr = document.createElement('tr');
// //         for (let j = 0; j < cols; j++) {
// //             let td = document.createElement('td');
// //
// //             td.innerHTML = `index ${i}`
// //             tr.appendChild(td);
// //
// //
// //         };
// //
// //         table.appendChild(tr)
// //
// //     }
// //     element.appendChild(table)
// // };
// //
// // tableCreate(5,6, content);

//
// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.

// let divka = document.getElementById('tableDiv');
// let input1 = document.getElementById('input1');
// let input2 = document.getElementById('input2');
// let input3 = document.getElementById('input3');
// let btn = document.getElementById('btn');
// let tdRes;
// let trRes;
// let textRes;
// btn.onclick = ev => {
//     tdRes = input1.value;
//     trRes = input2.value;
//     textRes = input3.value;
//     tableCreator(trRes, tdRes, textRes);
// };
//
// function tableCreator(tr, td, text) {
//     let table = document.createElement('table');
//     for (let i = 0; i < tr; i++) {
//         let tr = document.createElement('tr');
//         for (let j = 0; j < td; j++) {
//             let td = document.createElement('td');
//             tr.appendChild(td);
//             td.innerHTML = text;
//         };
//         table.appendChild(tr)
//
//     }
//     divka.appendChild(table);
//
// };



// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.


// let images = [{
//     id: 1,
//     img: 'https://i.pinimg.com/originals/32/60/c0/3260c0de9b73b059e775b94a98347d69.png'
// },
//     {
//         id: 2,
//         img: 'https://mzucker.github.io/images/maptrace/demo_debug_mask.png'
//     }, {
//         id: 3,
//         img: 'https://mzucker.github.io/images/maptrace/heart-maptrace.svg'
//     }, {
//         id: 4,
//         img: 'https://images.vexels.com/media/users/3/211647/isolated/lists/339ca60a246976492963808cc260634e-spring-flower-leaf-small-flat.png'
//     }];
//
// let wrap = document.getElementById('sliderWrap');
// let img = document.createElement('img');
// let btn1 = document.createElement('button');
// let btn2 = document.createElement('button');
// btn1.innerText = '<';
// btn2.innerText = '>';
// let index = 0;
// img.src = images[index].img;
// wrap.appendChild(img);
// wrap.appendChild(btn1);
// wrap.appendChild(btn2);
// btn1.onclick = () => {
//     if (index - 1 < 0) {
//         index = images.length - 1;
//         img.src = images[index].img
//     } else {
//         index = index - 1;
//         img.src = images[index].img
//     }
// };
// btn2.onclick = () => {
//     if (index + 1 > images.length - 1) {
//         index = 0;
//         img.src = images[index].img
//     } else {
//         index = index + 1;
//         img.src = images[index].img
//     }
// };



// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку


// let arr = ['blin', 'yomayo', 'bad', 'veryBad'];
// let btn = document.createElement('button')
//
// let input = document.createElement('input');
// btn.innerHTML = 'ok'
// document.body.appendChild(btn);
// document.body.appendChild(input);
// btn.onclick = ev => {
//     for (const word of arr) {
//         if (input.value === word) {
//             alert('warning')
//         }
//     }
//
// };


// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку

// let arr = ['blin', 'yomayo', 'bad', 'veryBad'];
// let btn = document.createElement('button');
//
// let input = document.createElement('input');
// btn.innerHTML = 'ok';
// document.body.appendChild(btn);
// document.body.appendChild(input);
// btn.onclick = ev => {
//     let words = input.value.split(' ');
//     for (let i = 0; i < arr.length; i++) {
//
//         if (words.includes(arr[i])) {
//             alert('warning')
//         }
//     }
//
//     // перетворити input на масив
//     // порівнювати два масиви на наявнйсть слів
//
//
//
// };


// -- создать скрипт, который берет считывает на странице (rules.html) текст
// и делает сбоку меню-оглавление по всем заголовкам которые есть в тексте.
//     При клике на пункт оглавления вы должны отправляться к этому пункту в тексте

//
// let wrap = document.getElementById('menu');
// let h2 = document.getElementsByTagName('h2');
// let ul = document.createElement('ul');
// wrap.appendChild(ul);
// for (let i = 0; i < h2.length; i++) {
//     h2[i].id = i+1;
//     let li = document.createElement('li');
//     let a = document.createElement('a');
//     a.innerText = h2[i].textContent;
//     a.href = `#${i+1}`;
//     li.appendChild(a);
//
//     ul.appendChild(li);
// };


// -- взять массив пользователей
let usersWithAddress = [
    {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
    {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
    {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
    {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
    {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
    {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 11, name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
];
// Создать три чекбокса.
// Каждый из них активирует фильтр для вышеуказаного массива.
// Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ

let check1 = document.getElementById('check1');
let check2 = document.getElementById('check2');
let check3 = document.getElementById('check3');

check1.onclick = ev => {
    let filtredUsers = usersWithAddress.filter(value => !value.status);
    console.log(filtredUsers);


};
check2.onclick = ev => {
    let filtredAge = usersWithAddress.filter(value => value.age >= 29);
    console.log(filtredAge);
};
check3.onclick = ev => {
    let filtredCity = usersWithAddress.filter(value => value.address.city === 'Kyiv');
    console.log(filtredCity);
    for (let x of filtredCity) {
        console.log(x);
        let ent = Object.entries(x);
        let addressObj = Object.entries(x.address)


        // ent.forEach(value => {
        //     if (value === x.address) {
        //         addressObj.forEach(adr => {
        //             let divForAddr = document.createElement('div');
        //             divForAddr.innerText = addressObj;
        //             document.body.appendChild(divForAddr)
        //         })
        //     } else {
        //         let divForEn = document.createElement('div');
        //         divForEn.innerText = value;
        //         document.body.appendChild(divForEn);
        //     }
        //
        //
        // });


    }


};

