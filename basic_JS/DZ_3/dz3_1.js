// - Напишіть код, який :
// -- змінює колір тексту елемнту з ід main_header на будь-який інший

document.getElementById('main_header').style.backgroundColor = 'pink'
// -- робить шириниу елементу ul 400 пікселів

let ul = document.getElementsByTagName('ul');
for ( let el of ul) {
    el.style.width = '400px'
};
// -- робить шириниу всіх елементів з класом linkList шириною 50%

let linkList = document.getElementsByClassName('linkList');

for (let link of linkList) {
    link.style.width = '50%'
};
// -- отримує текст який зберігається в елементі з класом listElement2
let listElement2 = document.getElementsByClassName('listElement2');
for (let list of listElement2) {
    console.log(list.textContent);
};
// -- отримує всі елементи li та змінює ім колір фону на сірий

let li = document.getElementsByTagName('li');
for (let l of li) {
    l.style.backgroundColor = 'grey'
};
// -- отримує всі елементи 'a' та додає їм клас anchor

let a = document.getElementsByTagName('a');
for (let b of a) {
    b.classList.add('anchor')
};
// -- отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів

for (let b of a) {
    if (b.textContent === 'link3') {
        b.style.fontSize = '40px'
    }
}
// -- отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

for (let b of a) {

    let classText = b.innerHTML;
    b.classList.add(`element_${classText}`);

}
// -- отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

let subHeader = document.getElementsByClassName('sub-header');
for (let i = 0; i < subHeader.length; i++) {
    subHeader[i].style.backgroundColor = prompt('enter colour')
}
// -- отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()

for (let sub of subHeader) {
    if (sub.textContent === 'content 2 segment') {
        sub.style.color = prompt('enter colour')
    }
}
// -- отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()

let content1 = document.getElementsByClassName('content_1');
for (let cont of content1) {
    cont.innerHTML = prompt('enter your text')
}
// -- отримати елементи p та змінити їм paddin на довільне значення

let p = document.getElementsByTagName('p');
for (let i of p) {
    i.style.padding = '10px'
}
// -- отримати елементи з класом text2 та змінити їм текст на довільне значення

let text2 = document.getElementsByClassName('text2');
for (let t of text2) {
    t.innerHTML = 'some new text'
}