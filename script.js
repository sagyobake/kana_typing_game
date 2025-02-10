'use strict';
const question = document.getElementById('question'); //問題分を表示
const answer = document.getElementById('answer'); //ユーザの解答を表示
let i = 0; //ユーザーが正解していくごとにカウントしていく

const kana = 'あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん'.split('');

console.log(kana);

const alphabet = '3 e 4 5 6 t g h @ b x d r p c q a z w s u i 1 , k f v 2 ^ - j n [ ] m 7 8 9 o l . ; \\ 0 / y'.split(' ');

console.log(alphabet);

for (let i = 0; i < kana.length; i++) {
    const span = document.createElement('span');
    span.innerText = kana[i];
    span.setAttribute('id', `id${i}`);
    question.appendChild(span);
}

const clear = () => {
    alert('clear!');
    i = 0;
}

//キーボードが押されたときの動作
document.addEventListener('keydown', (e) => {

    console.log(e.key);
    if (e.key === alphabet[i]) {
        document.getElementById(`id${i}`).style.color = 'orange';
        i++;
    }
});
