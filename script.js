
const startQuiz = document.getElementById("startQuiz");
const first = document.getElementById("first");
const second = document.getElementById("second");
const question = document.getElementById("text");
const third = document.getElementById("third");
const startbutton = document.getElementById("startbutton");
const buttons = document.querySelectorAll (".buttons");
const answerbuttons = document.getElementById("answerbuttons");

let questionAmount = 0;
let correctAnswer = 0;

startbutton.onclick = () => {
    startQuiz.style.display = "none";
    startbutton.style.display = "none";
    first.style.display = "block";
    second.style.display = "block";
    third.style.display = "block";
    question.style.display = "block";

    question.innerHTML = questions[0].question;
    first.innerHTML = questions[0].answers.a;
    second.innerHTML = questions[0].answers.b;
    third.innerHTML = questions[0].answers.c;
}

function clicked(prop) {
    if (questions[questionAmount].correct === prop){
        questionAmount++;
        correctAnswer++;
        if(questionAmount > questions.length-1){
            question.innerHTML = "შენ " + correctAnswer + "0%-ით სწორად აზროვნებ.";
            first.style.display = "none";
            second.style.display = "none";
            third.style.display = "none";
        }else{
            newQuestion();
        }
    }else{
        questionAmount++;
        if (questionAmount > questions.length - 1) {
            question.innerHTML = "შენ " + correctAnswer * 10 + "%-ით სწორად აზროვნება.";
            first.style.display = "none";
            second.style.display = "none";
            third.style.display = "none";
          } else {
            newQuestion();
          }
    }
}

function newQuestion(){
    question.innerHTML = questions[questionAmount].question;
    first.innerHTML = questions[questionAmount].answers.a;
    second.innerHTML = questions[questionAmount].answers.b;
    third.innerHTML = questions[questionAmount].answers.c;

}


const questions = [
    {
        question: "აუცილებელია თუ არა უნივერსიტეტში სწავლა იმისათვის რომ პროგრამირება ისწავლო?",
        correct: "c",
        answers:{
            a: "კი",
            b: "არა",
            c: "რა თქმა უნდა არა"
        },
    },

    {
        question: "მხოლოდ უნივერსიტეტი მისცემს თუ არა სტუდენტს ისეთ განათლებას რომ მუშაობა დაიწყოს?",
        correct: "a",
        answers:{
            a: "კი",
            b: "არა",
            c: "რა თქმა უნდა არა"
        },
    },

    {
        question: "შეუძლია თუ არა სტუდენტს მხოლოდ თავისითაც(უნივერსიტეტის გარეშე) შეძლოს სწავლა პროგრამირების?",
        correct: "a",
        answers:{
            a: "კი",
            b: "რა თქმა უნდა",
            c: "არა"
        },
    },

    {
        question: "შეძლებს თუ არა ახალგაზრდა უნივერსიტეტის დიპლომის გარეშე დაიწყოს პროგრამისტად მუშაობა თუ მას აქვს ცოდნა ამ სფეროში?",
        correct: "b",
        answers:{
            a: "კი",
            b: "რა თქმა უნდა",
            c: "არა"
        },
    },

    {
        question: "არის თუ არა უნივერსიტეტი პროგრამისტი სტუდენტებისთვის მხოლოდ გასართობი სივრცე?",
        correct: "a",
        answers:{
            a: "კი",
            b: "რა თქმა უნდა",
            c: "როგორ გეკადრებათ"
        },
    },

    {
        question: "ზოგადად აუცილებელია ყველა სწავლობდეს უნივერსიტეტში?",
        correct: "b",
        answers:{
            a: "კი",
            b: "არა",
            c: "არ ვიცი"
        },
    },

    
]