// 1 Получити масив обєктів user с endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вивести id,name усіх user в index.html. Окремий блок для кожного user.
// 3 Добавити кожному блоку кнопку/силку, при натисканні на которую відувається перехід на сторінку user-details.html,
// яка має детальную інформацію про обєкт на який натиснули
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
            let btnUsers = document.createElement('button');
            btnUsers.classList.add('buttonUser')
            let hrefUser = document.createElement('a');
            hrefUser.classList.add('btnUser');
            hrefUser.innerText = 'Detailed information';
            hrefUser.href = 'userD.html?id=' + userItem.id



            userDiv.append(hrefUser);
            usersDiv.append(userDiv);
        }
    })

//
// Стилізація проекта -
// Все без исключения элементы, который характеризируют user,post,comment  визуализировать, так, что бы было видно их блоки (дать задний фон + margin. Иными словами - крайне четкая сетка)
