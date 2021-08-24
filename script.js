let questionBlock = document.querySelector('.question');
let optionsBlock = document.querySelectorAll('.answer');
let questionNumber = document.querySelector('.number');
let n = 0;
let userEntered = '';
let correct = '';


displayQuestion(n);


function displayQuestion(n) {
    questionNumber.innerHTML = questionList[n]['number'];
    questionBlock.innerHTML = questionList[n]['question'];
    optionsBlock[0].innerHTML = questionList[n]['option'][0];
    optionsBlock[1].innerHTML = questionList[n]['option'][1];
    optionsBlock[2].innerHTML = questionList[n]['option'][2];
    optionsBlock[3].innerHTML = questionList[n]['option'][3];
    correct = questionList[n]['correct'];
    console.log('correct', correct)
};


for (let i = 0; i < optionsBlock.length; i++) {
    optionsBlock[i].onclick = function checkAnswer() {
        document.querySelector('.next-btn').disabled = false;
        console.log(correct);
        userEntered = this.innerHTML;
        if (userEntered == correct)
            showCorrect(this, correct);
        else
            showWrong(this, userEntered, correct);
    }
}

function findCorrect() {
    for (let i = 0; i < optionsBlock.length; i++) {
        console.log(correct);
        if (optionsBlock[i].innerHTML == correct) {
            console.log("found the riht one");
            return optionsBlock[i];
        }
    }
}

function showCorrect(option, correct) {
    console.log(option, correct);
    option.classList.add('correct');
}

function showWrong(option, userEntered, correct) {
    console.log(option, userEntered, correct);
    option.classList.add('wrong');
    findCorrect().classList.add('correct');
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

document.querySelector('.next-btn').onclick = function askNextQuestion() {
    n++;
    displayQuestion(n);
    resetEverything();
}
