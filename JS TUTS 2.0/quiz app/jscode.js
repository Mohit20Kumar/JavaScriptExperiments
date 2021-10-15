const quizQuestions = [{
        question: "What is Mohit's Age?",
        a: "15",
        b: "16",
        c: "17",
        d: "18",
        correct: "d"
    },
    {
        question: "When was FRIENDS first episode aired? ",
        a: "1993",
        b: "1994",
        c: "1995",
        d: "1996",
        correct: "b"
    },
    {
        question: "Why is life so boring?",
        a: "Well, cauz you are boring!",
        b: "People are Boring!",
        c: "Life Sucks!",
        d: "None of the above.",
        correct: "a"
    },
    {
        question: "What is the correct spelling of 'CARROT'?",
        a: "Cerrot",
        b: "Corret",
        c: "Carrot",
        d: "None of the above.",
        correct: "b"
    },
    {
        question: "Who is the Prime Minister of India?",
        a: "Manmohan Singh",
        b: "Rahul Gandhi",
        c: "Mohit Kumar",
        d: "Narendra Modi",
        correct: "c"
    },
]

let currentQuestion = 0;
let score = 0;

// radiobuttons
const answerEls = document.querySelectorAll(".answer");


const questionElement = document.getElementById("question")
const quizDiv = document.getElementById("quiz")


const a_text = document.getElementById("a_text")
const b_text = document.getElementById("b_text")
const c_text = document.getElementById("c_text")
const d_text = document.getElementById("d_text")

const submitbtn = document.getElementById("button")

loadQuestions();

function loadQuestions() {
    deSelect()
    const currentQuestionData = quizQuestions[currentQuestion];
    // filling up the questions
    questionElement.innerText = currentQuestionData.question;
    a_text.innerText = currentQuestionData.a;
    b_text.innerText = currentQuestionData.b;
    c_text.innerText = currentQuestionData.c;
    d_text.innerText = currentQuestionData.d;

}

function getSelected() {
    console.log(answerEls)

    answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        };
    });
    return answer
};

function deSelect() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });

}

submitbtn.addEventListener("click", () => {
    console.log("haha")
    const answer = getSelected();
    console.log(answer)
    if (answer) {
        if (answer === quizQuestions[currentQuestion].correct) {
            score++
        }
        currentQuestion++
        if (currentQuestion < quizQuestions.length) {
            loadQuestions();
        } else {
            if (score <= 2) {
                quizDiv.innerHTML = `
                <h2>Very POOR Performance, Your Final score is ${score}/5. </h2>
                <button onclick = "location.reload()">Reload</button>`
                quizDiv.style = "color:red;"
            }
            if (score === 3) {
                quizDiv.innerHTML = `
                <h2>GOOD, Your Final score is ${score}/5. </h2>
                <button onclick = "location.reload()">Reload</button>`
                quizDiv.style = "color:black;"

            }
            if (score > 3) {
                quizDiv.innerHTML = `
                <h2>AMAZING Performance, Your Final score is ${score}/5. </h2>
                <button onclick = "location.reload()">Reload</button>`
                quizDiv.style = "color:green;"

            }
        }
    }

});