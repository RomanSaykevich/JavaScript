// - Напишіть код,  котрий :
// -- отримує текст з параграфа з id "content"

// const pContent = document.getElementById('content');
// console.log(pContent.innerText);

// -- отримує текст з блоку з id "rules"

// const pRules = document.getElementById('rules');
// console.log(pRules.innerText);

// -- замініть текст параграфа з id 'content' на будь-який інший

// const pZaminaContent = document.getElementById('content');
// pZaminaContent.innerText = 'a, b, c, d, e, f';

// -- замініть текст параграфа з id 'rules' на будь-який інший

// const pZaminaRules = document.getElementById('rules');
// pZaminaRules.innerText = 'one, two, three, four, five';


// -- змініть кожному елементу колір фону на червоний

// const redColor = document.body.children;
// for (const red of redColor) {
//     red.style.background = 'red';
// };

// -- змініть кожному елементу колір тексту на синій

// const blueColor = document.body.children;
// for (const blue of blueColor) {
//     blue.style.color = 'blue';
// };

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log

// const rulesElement = document.getElementById('rules');
// console.log(rulesElement.classList);

// -- поміняти колір тексту у всіх елементів fc_rules на червоний

// const colorTextFc = document.getElementsByClassName('fc_rules');
// for (const colorText of colorTextFc) {
//     colorText.style.color = 'red';
// };


// ------------------------------------------------------------

// 1) Напишіть код, який :
// a) додає клас з назвою групи, елементу з ід main_header

const elementId = document.getElementById('main_header');
elementId.classList.add('sep-2021-2022');
elementId.innerText = ('sep-2021-2022');

// b) робить ширину елементу ul 400px

const wUl = document.getElementsByTagName('ul');
for (const ulka of wUl){
    ulka.style.width = '400px';
}


// c) робить шириниу всіх елементів з класом linkList шириною 50%

const linkList = document.getElementsByClassName('linkList');
for (const list of linkList) {
    list.style.width = '50%';
}

// d) отримує текст який зберігається в елементі з класом listElement2

function element2(text) {
    const elementsByClassName = document.getElementsByClassName('listElement2');
    elementsByClassName.innerTex = text;
}

// e) отримує всі елементи li та змінює ім колір фону на сірий

const elementLi = document.getElementsByTagName('li');
for (const lee of elementLi) {
    lee.style.background = 'silver';
}

// f) отримує всі елементи 'a' та додає їм клас anchor

const elementsByTagName = document.getElementsByTagName('a');
for (const a of elementsByTagName) {
    a.classList.add('anchar')
}

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів

const zmina = document.getElementsByTagName('a');
for (const a of zmina) {
    if (a.innerText === 'link3') {
        a.style.fontSize = '40px';
    }
}

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

const element = document.getElementsByTagName('a');
for (const a of element) {
    let element_XXX = a.innerText;
    a.classList.add(element_XXX);
}

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

const elementsByClassName = document.getElementsByClassName('sub-header');
for (const subItemClass of elementsByClassName) {
    subItemClass.style.background = prompt('Фон дайте');
}

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()

const ellementSub = document.getElementsByClassName('sub-header');
for (const subHeadItem of ellementSub) {
    if (subHeadItem.innerText === 'content 2 segment') {
        subHeadItem.style.color = prompt('Колір дайте');
    }
}

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()

const cont1 = document.getElementsByClassName('content_1');
for (const contTex of cont1) {
    contTex.innerText = prompt('Бла-бла-бла');
}

// l) отримати елементи p та змінити їм padding на 20px

const pParag = document.getElementsByTagNameNS('p');
for (const pParagraf of pParag) {
    pParagraf.style.padding = ('20px');
}

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)

const text2 = document.getElementsByClassName('text2');
for (const zminaText of text2) {
    zminaText.innerText = ('sep-2021-2022');
}





