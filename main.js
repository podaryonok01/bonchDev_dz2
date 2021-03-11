const btn = document.querySelector('#btn');
const textarea = document.querySelector('#comment');
const elem = document.querySelector('.news__brief');
let comment;

document.addEventListener("DOMContentLoaded", () => {
    for(let i=0; i<localStorage.length; i++) {
        comment = localStorage.getItem(i);
        addComment();
    }
})

btn.addEventListener('click', () => {
    if (textarea.value !== '') {
        let key = localStorage.length;
        comment = textarea.value;
        localStorage.setItem(key, comment);
        textarea.value = '';
        addComment();
    } 
})

function addComment () {
    let divComment = document.createElement('div');
    divComment.innerText = comment;
    divComment.classList.add('comment');
    elem.before(divComment);
}
