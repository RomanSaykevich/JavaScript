// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти.
// Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts

let postsDiv = document.getElementsByClassName('posts')[0];

fetch('https://jsonplaceholder.typicode.com/posts')

    .then(value => value.json())
    .then(value => {

        for (const postItem of value) {
            const postDiv = document.createElement('div');
            postDiv.classList.add('post');

            const idDiv = document.createElement('div');
            idDiv.innerText = `id - ${postItem.id}`

            const postUserId = document.createElement('div');
            postUserId.innerText = `User ID - ${postItem.userId}`

            const titleDiv = document.createElement('h3');
            titleDiv.innerText = ` Title - ${postItem.title}`

            const bodyDiv = document.createElement('div');
            bodyDiv.innerText = postItem.body;

            postDiv.append(idDiv, postUserId, titleDiv, bodyDiv);

            postsDiv.appendChild(postDiv);

        }
    });

//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

let commentsDiv = document.getElementsByClassName('comments')[0];

fetch('https://jsonplaceholder.typicode.com/comments')

    .then(value => value.json())
    .then(value => {

        for (const commentItem of value) {
            const commentDiv = document.createElement('div');
            commentDiv.classList.add('comment');

            const postId = document.createElement('div');
            postId.innerText = 'post id -' + commentItem.postId;

            const idCommDiv = document.createElement('div');
            idCommDiv.innerText = 'Id -' + commentItem.id;

            const nameComment = document.createElement('div');
            nameComment.innerText = commentItem.name;

            const emailCommDiv = document.createElement('div');
            emailCommDiv.innerText = commentItem.email;

            const bodyCommDiv = document.createElement('h5');
            bodyCommDiv.innerText = commentItem.body;

            commentDiv.append(postId, idCommDiv, nameComment, emailCommDiv, bodyCommDiv)
            commentsDiv.appendChild(commentDiv);
        }

    })