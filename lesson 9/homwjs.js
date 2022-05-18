// Все робити за допомоги js.


//// - створити блок,

let block = document.createElement('div');

//     - додати йому класи wrap, collapse, alpha, beta

block.classList.add('wrap');
block.classList.add('collapse');
block.classList.add('alpha');
block.classList.add('beta');

// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту

block.innerText = ('Hello Roma');
block.style.background = 'yellow';
block.style.color = 'blue';
block.style.display = 'flex';
block.style.justifyContent = 'center';
block.style.width = '300px';
block.style.height = '50px';
block.style.marginLeft = '50px'

// - додати цей блок в body.

document.body.appendChild(block);

// - клонувати його повністю, та додати клон в body.

let clon = block.cloneNode(true);
block.appendChild(clon);

// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.

let masiv = ['Main', 'Products', 'About us', 'Contacts'];
let menu = document.getElementsByClassName('menu')[0];
for (const item of masiv) {
    let li = document.createElement('li');
    li.innerText = item;
    menu.appendChild(li);
}

//
// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'FrontEnd', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
//

for (const mom of coursesAndDurationArray) {
    let mam = document.createElement('div');
    mam.innerText = `${mom.title} ${mom.monthDuration}`;
    document.body.appendChild(mam);
}

// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'FrontEnd', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

for (const dad of coursesAndDurationArray) {
    let div = document.createElement('div');
    div.classList.add('item');
    let h1 = document.createElement('h1');
    h1.innerText = dad.title;
    let p = document.createElement('p');
    p.classList.add('description');
    p.innerText = dad.monthDuration;
    div.appendChild(h1);
    div.appendChild(p);
    document.body.appendChild(div);
}