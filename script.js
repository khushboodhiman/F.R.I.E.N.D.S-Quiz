let questionBlock = document.querySelector('.question');
let optionsBlock = document.querySelectorAll('.answer');
let questionNumber = document.querySelector('.number');
let n = 0;


displayQuestion(n);


function displayQuestion(n) {
    console.log(n);
    questionNumber.innerHTML = questionList[n]['number'];
    questionBlock.innerHTML = questionList[n]['question'];
    optionsBlock[0].innerHTML = questionList[n]['option'][0];
    optionsBlock[1].innerHTML = questionList[n]['option'][1];
    optionsBlock[2].innerHTML = questionList[n]['option'][2];
    optionsBlock[3].innerHTML = questionList[n]['option'][3];
};


document.querySelector('.next-btn').onclick = function askNextQuestion() {
    n++;
    displayQuestion(n);
}

