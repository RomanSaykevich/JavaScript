// На странице post-details.html:
// 7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.
// 8 Ниже информации про пост, вывести все комментарии текущего поста (эндпоинт для получения информации -
// https://jsonplaceholder.typicode.com/posts/POST_ID/comments)



let infoPost = document.createElement('div');
infoPost.classList.add('infPost');

let url = new URL(location.href);
let idUser = url.searchParams.get('id');

fetch('https://jsonplaceholder.typicode.com/posts/' + idUser)
    .then(value => value.json())
    .then(value => {

        let infoDIv = document.createElement('div');
        infoDIv.classList.add('DivInfo');
        infoDIv.innerText = `
        userId: ${value.userId},
        id: ${value.id},
        title: ${value.title},
        body: ${value.body}
    `;

        let btnPost = document.createElement('button');
        btnPost.classList.add('btnPosts');
        btnPost.innerText = 'coment';
        btnPost.onclick = function ()  {
            fetch(`https://jsonplaceholder.typicode.com/posts/${value.id}/comments`)
                .then(value => value.json())
                .then(value => {
                    let comPos = document.createElement('div');
                    comPos.classList.add('comPoster');
                    for (const commentPost of value) {

                        let comDiv = document.createElement('div');
                        comDiv.classList.add('commentDiv');
                        comDiv.innerText = `
                    coment: ${commentPost.body}
                    `;
                        comPos.appendChild(comDiv)
                    }
                    infoPost.appendChild(comPos);
                    btnPost.disabled = true;
                    let hrefCom = document.createElement('a');
                    hrefCom.classList.add('comentHref');
                    hrefCom.href = 'index-user.html';
                    hrefCom.innerText = 'Початкова сторінка';
                    infoPost.appendChild(hrefCom);

                })
        }

        infoPost.appendChild(btnPost)
        infoPost.appendChild(infoDIv)
        document.body.appendChild(infoPost)

    })