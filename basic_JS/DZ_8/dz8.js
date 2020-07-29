// - Дана textarea.
//     В неё вводится текст.
//     Сделайте так, чтобы после захода на эту страницу через некоторое время,
//     введенный текст остался в textarea.



// let textArea = document.getElementById('textArea');
// textArea.value = localStorage.getItem('textArea');
// textArea.oninput = () => {
//
//     localStorage.setItem('textArea', textArea.value)
// };


//
// - Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
//     Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
// Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
//     Сделайте ваш скрипт как можно более универсальным.
//

//


let form = document.getElementById('form');











// for (const tag of form) {
//     tag.oninput = () => {
//         if (tag.type === 'checkbox' || tag.type === 'radio') {
//             console.log('warning');
//             if (tag.checked) {
//                 localStorage.setItem(localStorage.length +1, tag.checked.toString())
//             }
//         } else {
//             localStorage.setItem(localStorage.length +1, tag.value);
//         }
//     }
//
//
//
//
// }



for (let item of form) {
    item.oninput = () => {
        localStorage.setItem('value', item.value)
    }
}










// let item = form.children;
// console.log(form.children);
//
//
// // let saveBtn = document.getElementById('saveBtn');
//
// for (let el of item) {
//     el.oninput = () => {
//         console.log(el.value);
//         localStorage.setItem(localStorage.length +1, el.value)
//     }
//
// };




// item.oninput = () => {
//     for (let el of item) {
//         console.log(el);
//         console.log(el.value);
//
//         localStorage.setItem(item.length +1, el.value)
//
//
//
//     };
// }






// function setForm(tag) {
//     for (let i = 0; i < tag.length; i++) {
//         if (tag.children[i].type === 'check' || tag.children[i].type === 'radio') {
//             console.log('its work');
//         }
//
//     }
// };



// -Дан текстареа. В него можно ввести данные,
// нажать кнопку "сохранить" и они "фикисруются" (в хранилище),
// затем поредактировать их, затем еще поредактировать и возможно еще.....
// Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки,
// с помощью которых можно перемещаться по истории (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).
//


let textArea = document.getElementById('text');
let btn = document.getElementById('btn');
let left = document.getElementById('left');
let right = document.getElementById('right');

btn.onclick = () => {
    localStorage.setItem(localStorage.length+1, textArea.value);


};
left.onclick = () => {
    let index;
    right.style.visibility = 'visible'
    for (let key in localStorage) {
        if (localStorage.hasOwnProperty(key)) {
            if (localStorage.getItem(key) === textArea.value) {
                index = key
            }
        }
        if (index === '1') {
            left.style.visibility = 'hidden';

            return
        }
    }
    textArea.value = localStorage.getItem(index-1)
};








right.onclick = () => {
    let itemValue;
    left.style.visibility = 'visible'
    for (let key in localStorage) {
        if (localStorage.hasOwnProperty(key)) {
            if (localStorage.getItem(key) === textArea.value) {
                itemValue = key
            }
        }
        if (itemValue === localStorage.length.toString()) {
            right.style.visibility = 'hidden';

            return
        }
    }
    textArea.value = localStorage.getItem(+itemValue +1)
};







// - Реализуйте записную книгу, хранящую данные в локальном хранилище.
//     Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня.
// При нажати на нее появляется форма, в которой есть все необходимые инпуты для редактирования,
// которые уже заполнены данными объекта




let name = document.getElementById('name');
let phone = document.getElementById('phone');
let save = document.getElementById('save');





