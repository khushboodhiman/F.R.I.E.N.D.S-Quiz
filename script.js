
let questionBlock = document.querySelector('.question');
let optionsBlock = document.querySelectorAll('.answer');
let questionNumberBlock = document.querySelector('.number');
let scoreBlock = document.querySelector('.score-badge');
let maxScoreBlock = document.querySelector('.max');
let maxQuestion = questionList.length;
let n = 0;
let userEntered = '';
let correct = '';
let score = 0;
scoreBlock.innerHTML = score;
maxScoreBlock.innerHTML = maxQuestion;

displayQuestion(n);

function displayQuestion(n) {
    let questionNumber = questionList[n]['number'];
    checkIfLast(questionNumber);
    questionNumberBlock.innerHTML = questionNumber;
    questionBlock.innerHTML = questionList[n]['question'];
    optionsBlock[0].innerHTML = questionList[n]['option'][0];
    optionsBlock[1].innerHTML = questionList[n]['option'][1];
    optionsBlock[2].innerHTML = questionList[n]['option'][2];
    optionsBlock[3].innerHTML = questionList[n]['option'][3];
    correct = questionList[n]['correct'];
};


for (let i = 0; i < optionsBlock.length; i++) {
    optionsBlock[i].onclick = function checkAnswer() {
        document.querySelector('.next-btn').disabled = false;
        userEntered = this.innerHTML;
        if (userEntered == correct) {
            showScore();
            showCorrect(this);
        }
        else
            showWrong(this);
    }
}

function findCorrect() {
    for (let i = 0; i < optionsBlock.length; i++) {
        if (optionsBlock[i].innerHTML == correct) {
            return optionsBlock[i];
        }
    }
}

function showCorrect(option) {
    option.classList.add('correct');
}

function showWrong(option) {
    option.classList.add('wrong');
    findCorrect().classList.add('correct');
}

function showScore() {
    scoreBlock.innerHTML = ++score;
}

function resetEverything() {
    document.querySelector('.next-btn').disabled = true;
    for (let i = 0; i < optionsBlock.length; i++) {
        if (optionsBlock[i].classList.contains('correct'))
            optionsBlock[i].classList.remove('correct');
        if (optionsBlock[i].classList.contains('wrong'))
            optionsBlock[i].classList.remove('wrong');
    }
}


function checkIfLast(questionNumber) {
    if (questionNumber == maxQuestion) {
        document.querySelector('.next-btn').value = "Finish Quiz";
        document.querySelector('.next-btn').classList.add('finish-btn');
        document.querySelector('.finish-btn').onclick = () => {
            let resultScoreBlock = document.querySelector('.result-score-badge');
            let resultMaxBlock = document.querySelector('.result-max');
            resultScoreBlock.innerHTML = score;
            resultMaxBlock.innerHTML = maxQuestion;
            document.querySelector('.quiz-wrapper').style.display = "none";
            document.querySelector('.results').style.display = "flex";
            scoreBlock = document.querySelector('.score-badge');
            maxScoreBlock = document.querySelector('.max');
        }
    }
}


document.querySelector('.next-btn').onclick = function askNextQuestion() {
    n++;
    displayQuestion(n);
    resetEverything();
}

document.querySelector('.retake').onclick = function retake() {
    location.reload();
}
