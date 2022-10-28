var quizQuestion =
[
    {
        question: "Html Stands For __________________",
        options: [
            "Hyper Text Makeup Language",
            "html",
            "Case Cading Style Sheet",
            "Hypertext markup language",
        ],
        correctAns: "Hypertext markup language",
    },
    {
        question: "Css Stands For _______________________",
        options: [
            "Casecading Style Sheet",
            "Java",
            "Ram",
            "Hypertext markup language",
        ],
        correctAns: "Casecading Style Sheet",
    },
    {
        question: "Js Stands For _______________________",
        options: ["Java Style", "Java Script", "Script", "Script Src"],
        correctAns: "Java Script",
    },
    {
        question: "Dom Stands For _______________________",
        options: ["Document Object Model", "html", "Css", "Java"],
        correctAns: "Document Object Model",
    },
    {
        question: "Ram Stands For _______________________",
        options: ["Read Only Memory", "Dom", "Random Acccess Memory", "For Pc"],
        correctAns: "Random Acccess Memory",
    },
    {
        question: "Rom Stands For _______________________",
        options: [
            "Hyper Text Markup Language",
            "html",
            "HTml",
            "Read Only Memory",
        ],
        correctAns: "Read Only Memory",
    },
]

var questionCurrentIndex = document.getElementById("questionCurrentIndex");
var questionTotalIndex = document.getElementById("questionTotalIndex");
var question = document.getElementById("question");
var quiz_btns = document.getElementById("quiz-btns");
var total_No = document.getElementById('total_No');
var percentage = document.getElementById('percentage');
var result = document.getElementById('result');
var totalMarks = 5;

var currentIndex = 0

function initRender() {
questionTotalIndex.innerHTML = quizQuestion.length;
questionCurrentIndex.innerHTML = currentIndex + 1;
question.innerHTML = quizQuestion[currentIndex].question

for (var i = 0; i < quizQuestion[currentIndex].options.length; i++) {
    var element = quizQuestion[currentIndex].options[i];
    // quiz_btns.innerHTML = ''
    quiz_btns.innerHTML += `
    <div class="col-md-6">
        <button onclick="checkAnswer('${element}','${quizQuestion[currentIndex].correctAns}')">${element}</button>
    </div>
    `
    // console.log(element)
}


}
initRender()

function nextQuestion() {
quiz_btns.innerHTML = ''
currentIndex++;


initRender()


}

function checkAnswer(a, b) {
if (a == b) {
    // totalMarks + 1;
    totalMarks = totalMarks+5;
    // console.log("Correct Answer")
    nextQuestion()
}
else {
    nextQuestion()
    // console.log("Not Correct")
}
if(questionCurrentIndex.textContent == questionTotalIndex.textContent){
    var modal = document.getElementById('modal');
    var total_marks = quizQuestion.length*5;
    var res_percentage = (totalMarks/total_marks) * 100;
    modal.style.display = "inline-flex";
    total_No.innerHTML = totalMarks +' out of ' + total_marks;
    percentage.innerHTML = res_percentage + '%';

    if(res_percentage > 50){
        result.innerHTML = 'Passed';
    }
    else{
        result.innerHTML = 'Failed';
    }
}

}
