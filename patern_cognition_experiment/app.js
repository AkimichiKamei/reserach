const quiz = [
    {
        question: '規則性をどれくらい感じるか評価してください',
        answers: [
            'モノイド',
            '群',
            '環',
            '体'
        ],
        correct: 'モノイド'
    }, {
        question: '類似性をどれくらい感じるか評価してください',
        answers: [
            '1011',
            '0111',
            '0011',
            '1010'
        ],
        correct: '群'
    }, {
        question: 'パターンの良さをどれくらい感じるか評価してください',
        answers: [
            'モノイド',
            '群',
            '環',
            '体'
        ],
        correct: '体'
    }
];
const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

// 定数の文字列をHTMLに反映させる，＄はHTMLのオブジェクト
const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;    

// クイズの問題文，選択肢を定義
const setupQuiz = () => {
    document.getElementById('js-question').textContent = "2つのパターンの類似性を（似ていない）１～１０（似ている）で評価してください";
    let buttonIndex = 0;
    while(buttonIndex < buttonLength){
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
    }
}
setupQuiz();

// ボタンをクリックしたら正誤判定
const clickHandler = (e) => {
    if(quiz[quizIndex].correct === e.target.textContent){
        window.alert('正解！')
        score++;
    } else {
        window.alert('不正解！')
    }

    quizIndex++;

    if(quizIndex < quizLength){
        setupQuiz();
    } else {
        window.alert('終了！あなたの正解数は' + score + '/' + quizLength + 'です！'); 
    }
};

let handlerIndex = 0;
while (handlerIndex < buttonLength) {
    $button[handlerIndex].addEventListener('click', (e) => {
        clickHandler(e);
    });
    handlerIndex++;
}

const inputElem = document.getElementById('output1');
console.log(inputElem)