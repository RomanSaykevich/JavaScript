// 1 получить массив объектов user с endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вывести id,name всех user в index.html. Отдельный блок для каждого user.
// 3 Добавить каждому блоку кнопку/ссылку , при клике на которую происходит переход на страницу user-details.html,
// которая имеет детальную информацию про объект на который кликнули
//
let usersDiv = document.getElementsByClassName('users')[0];
fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(value=>{
        for (const userItem of value) {
            let userDiv = document.createElement('div');
            userDiv.classList.add('userDD');
            userDiv.innerText =
                `user id - ${userItem.id}
                     user name- ${userItem.name}`

            let hrefUser = document.createElement('a');
            hrefUser.classList.add('btnUser');
            hrefUser.innerText = ' кнопка';
            hrefUser.href = 'user-hm.html?id=' + userItem.id

            userDiv.append(hrefUser);
            usersDiv.append(userDiv);
        }
    })

//
// Стилизация проекта -
// Все без исключения элементы, который характеризируют user,post,comment  визуализировать, так, что бы было видно их блоки (дать задний фон + margin. Иными словами - крайне четкая сетка)
