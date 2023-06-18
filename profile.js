
const questions = [
    {
        question: "How would your best friends/family describe you?",
        answers: [
            { text: "Low-key", correct: nope },
            { text: "Easy-Going", correct: false },
            { text: "Driven", correct: false2 },
            { text: "Risk-taker", correct: true },
        ]
    },
    {
        question: "How would you react if, in line with market volatility your portfolio lost >25%",
        answers: [
            { text: "Panic... SELL!", correct: nope },
            { text: "Would seek advice", correct: false },
            { text: "Be patient", correct: false2 },
            { text: "Buy more ", correct: true },
        ]

    },
    {
        question: "How much capital are you likely to need access to in the next 3-5 years:",
        answers: [
            { text: "Up to 80%", correct: nope },
            { text: "Between 50-70%", correct: false },
            { text: "Maybe 20-30%", correct: false2 },
            { text: "Nil", correct: true },
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
        question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });

}
function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    const isLow = selectedBtn.dataset.correct === "nope";
    const isOkay = selectedBtn.dataset.correct === "false";
    const isGood = selectedBtn.dataset.correct === "false2";
    if (isCorrect) {
        selectedBtn.classList.add("growth");
        score++; score++; score++; score++;
    } else if (isLow) {
        selectedBtn.class.add("lowrisk");
        score++;
    } else if (isOkay) {
        selectedBtn.class.add("balanced");
        score++; score++;
    } else if (isGood) {
        selectedBtn.class.add("medrisk");
        score++; score++; score++;
    }
    Array.from(answerButton.children).forEach(button => {
        if (button.dataset.correct === "true") {

        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of a total of 12 points`;
    nextButton.innerHTML = "Try again";
    nextButton.style.display = "block";
}
function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();