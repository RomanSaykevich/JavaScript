// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".


// const text = document.getElementById('text');
// text.style.fontSize = '30px'
// text.style.marginLeft = '300px'
// text.style.marginBottom = '50px'
//
// let minus = true;
//
// let text1 = document.getElementById('text1');
// text1.onclick = function () {
//     if (minus) {
//         text.style.display = 'none';
//     } else {
//         text.style.display = 'block';
//     }
//     minus = !minus;
// }

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

// document.getElementById('bTa').onclick = function () {
//     const age = document.getElementById('age').value;
//     if (+age > 18) {
//         alert('Вітаю');
//     } else {
//         alert('Пробачте, вам ще рано!')
//     }
// };

// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб уникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
//
//
document.getElementById('btn2').onclick = function () {
    const za1 = document.forms.zav1.za1.value
    const za2 = document.forms.zav1.za2.value
    const za3 = document.forms.zav2.za3.value
    const za4 = document.forms.zav2.za4.value
    console.log(za1, za2, za3, za4);
}



//
// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
//
//
//
const form = document.forms.formac;
form.onsubmit = function (e) {

    e.preventDefault();
    const form1 = +form.form1.value;
    const form2 = +form.form2.value;
    const form3 = form.form3.value;

    let tabl = document.createElement('table');
    for (let i = 0; i < form1; i++) {
        let tr = document.createElement('tr');
        for (let c = 0; c < form2; c++) {
            let td = document.createElement('td');
            td.innerText = form3;
            tr.appendChild(td);
        }
        tabl.appendChild(tr);
    }
    document.body.appendChild(tabl);

};
console.log(form1, form2, form3);



