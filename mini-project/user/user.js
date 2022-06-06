// На странице user-details.html:
// 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html, которая имеет детальную информацию про текущий пост.
//

    let fullUsers = document.createElement('div');
        fullUsers.classList.add('fullUser');

        let url = new URL(location.href);
        let idUser = url.searchParams.get('id');

    fetch('https://jsonplaceholder.typicode.com/users/' + idUser)
        .then(value => value.json())
        .then(value => {

            let fullDiv = document.createElement('div');
                fullDiv.classList.add('divFull');

                 fullDiv.innerText = `
                    ${value.id},
                Name: ${value.name},
                Username: ${value.username},
                address: ${value.address.street},
                suite: ${value.address.suite},
                city: ${value.address.city},
                zipcode ${value.address.zipcode},
                geo.lat: ${value.address.geo.lat},
                geo.lng: ${value.address.geo.lng},
                phone: ${value.phone},
                website:${value.website},
                company-name:${value.company.name},
                company-catchPhrase:${value.company.catchPhrase},
                company-bs:${value.company.bs}`;


        let btn = document.createElement('button');
            btn.classList.add('btnD');
            btn.innerText = 'post of current user';
            btn.onclick = function () {

            fetch(`https://jsonplaceholder.typicode.com/users/${value.id}/posts`)
                .then(value => value.json())
                .then(value => {
                    let titleDiv = document.createElement('div');
                        titleDiv.classList.add('titleUserDiv');
                        for (const titlePostUser of value) {

                        let btnDiv = document.createElement('div');
                            btnDiv.classList.add('btnDivTit');
                            btnDiv.innerText = `title: ${titlePostUser.title}`;
                            titleDiv.appendChild(btnDiv)
                            btn.disabled = true;

                        let hrefPosts = document.createElement('a');
                            hrefPosts.classList.add('hrefP');
                            hrefPosts.innerText = 'post of current user';


                            hrefPosts.href = '../post/post.html?id=' + titlePostUser.id
                            btnDiv.appendChild(hrefPosts)

                            fullUsers.appendChild(titleDiv)
                    }
                })
        }

        fullUsers.appendChild(btn);
        fullUsers.appendChild(fullDiv);
        document.body.appendChild(fullUsers);
    })