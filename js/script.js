const form = document.getElementById('form');
form.addEventListener('submit', handleSubmit);

let status1 = document.getElementById('status');
let attempt = document.getElementById('attempt');
let result = document.getElementById('result');

const Guess = {
    max: 10,
    attemptsNumber: 0,
    numberDrawn: function randomValue() {
        return Math.round(Math.random() * this.max);
    }
};

let numberDrawn = Guess.numberDrawn();

function updateAttempt(attempt, value) {
    attempt.innerHTML = 'Tentativa: ' + value
};

function handleSubmit(e) {
    e.preventDefault();
    let kick = document.getElementById('kick').value;
    if(!kick){
        alert('Digite algum valor de 0 a 10');
        return;
    };
    updateAttempt(attempt, ++Guess.attemptsNumber);

    if(numberDrawn == kick){
        playAgain();
        status1.innerHTML = 'Parabens, você acertou!';
        result.style.transition = '0.4s';
        result.style.backgroundColor = '#37c978';
        result.style.color = '#fff';
        status1.style.color = '#fff';
        clean();
    } else if (numberDrawn > kick) {
        status1.innerHTML = 'O número é maior!';
        status1.style.color = '#de4251';
        clean();
    } else if (numberDrawn < kick){
        status1.innerHTML = 'O número é menor!';
        status1.style.color = '#de4251';
        clean();
    }
};

function playAgain() {
    document.getElementById('btn-restart').style.display = 'flex';
};

function restart() {
    document.location.reload(true);
};

function clean() {
    document.getElementById('kick').value = '';
}