class Question {
  constructor() {
    this.operators = ["+", "-", "/", "*", "%", "^"];
    this.operand1 = this.random(100);
    this.operand2 = this.random(100);
    this.operator = this.operators[this.random(6) - 1]; //[+,-,/,*,%,^]
    this.score = this.random(50);
    this.correctAnswer = this.calculateAnswer();
  }

  /*
    min value of this function - 1
    max value of this function - high
    */
  random(high) {
    return 1 + Math.floor(Math.random() * high);
  }

  calculateAnswer() {
    switch (this.operator) {
      case "+":
        return this.operand1 + this.operand2;
      case "-":
        return this.operand1 - this.operand2;
      case "/":
        return Math.floor(this.operand1 / this.operand2);
      case "*":
        return this.operand1 * this.operand2;
      case "%":
        return this.operand1 % this.operand2;
      case "^":
        return this.operand1 ** this.operand2;
      default:
        alert("Invalid input" + this.operator);
    }
  }

  display() {
    // console.log(this.operand1, this.operator, this.operand2);
    return `${this.operand1} ${this.operator} ${this.operand2}`;
  }

  validateAnswer(answer) {
    return this.correctAnswer === Number(answer) ? this.score : 0;
  }
}

class Quiz {
  constructor(questionEle, timerEle) {
    this.duration = this.random(60);
    this.question = new Question();
    this.questionCount = 1;
    this.score = 0;
    this.questionEle = questionEle;
    this.timerEle = timerEle;
  }

  start() {
    this.questionEle.textContent = this.question.display();
    this.startTimer();
  }

  random(high) {
    return 1 + Math.floor(Math.random() * high);
  }

  nextQuestion(currentQuestionAnswer) {
    this.score += this.question.validateAnswer(currentQuestionAnswer);
    this.question = new Question();
  }

  getScore() {
    return this.score;
  }

  startTimer() {
    let remainingTime = this.duration;
    this.timer = setInterval(() => {
      remainingTime--;
      const hr = String(Math.floor(remainingTime / 3600)).padStart(2, "0");
      const min = String(Math.floor((remainingTime / 60) % 60)).padStart(
        2,
        "0"
      );
      const sec = String(Math.floor(remainingTime % 60)).padStart(2, "0");

      this.timerEle.textContent = `${hr}:${min}:${sec}`;

      if (remainingTime <= 0) {
        clearInterval(this.timer);
        alert("Quiz Submitted, your score: " + this.score); //create a display to show the score
      }
    }, 1000);
  }
}

const questionEle = document.querySelector("#questionText");
const answerELe = document.querySelector("#answerInput");
const scoreEle = document.querySelector("#score");
const timerEle = document.querySelector(".timer span");

const quiz = new Quiz(questionEle, timerEle);
quiz.start();
answerELe.focus();

answerELe.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    quiz.nextQuestion(answerELe.value);
    questionEle.textContent = quiz.question.display();
    scoreEle.textContent = quiz.score;
    answerELe.value = "";
  }
});
