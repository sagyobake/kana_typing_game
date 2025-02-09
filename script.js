'use strict';
const question = document.getElementById('question'); //問題分を表示
const answer = document.getElementById('answer'); //ユーザの解答を表示
let i = 0; //ユーザーが正解していくごとにカウントしていく

const kana = [...'あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん'];

console.log(kana);

const alphabet = '3 e 4 5 6 t g h @ b x d r p c q a z w s u i 1 , k f v 2 ^ - j n [ ] m 7 8 9 o l . ; \ 0 / y'.split(' ');

console.log(alphabet);

kana.forEach(element => { //五十音のあいうえおをつくる
    question.innerText = kana.join('');
});

const clear = () => {
    alert('clear!');
    location.reload();
}

//キーボードが押されたときの動作
document.addEventListener('keydown', (e) => {
    const index = alphabet.indexOf(e.key);
    if (kana[index] !== undefined) {
        console.log(kana[index]);
        if (kana[index] === kana[i]) {
            if (i === kana.kength) { //全部打ち終わるとクリア表示する
                clear();
            }
            i++;
            answer.innerText += kana[index];
        }
    }
});
