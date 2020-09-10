class Question {

    constructor(id, statement, options, correct) {

        this.id = id;
        this.statement = statement;
        this.options = options;
        this.correct = correct;

    }

    display(Que) {

        let rightAnswer = Que.correct;
        let str = "";


        if ($("#cardBody").children().length === 0) {


            str += ` <h5 class="card-title" id="qNo">Question-${Que.id}</h5>
            <p class="card-text" id="qSt" style = "font-family: "Raleway";">${Que.statement}</p>

            <div id="fcq" class="flex-container" style="margin-left: 20%; margin-top: 10%;">

                <button type="button" class="btn btn-light" id="A" onclick = "checkAnswer(this,${rightAnswer})" style="width: 180px; background-color: lightblue;">${Que.options.A}</button>
                <button type="button" class="btn btn-light" id="B" onclick = "checkAnswer(this,${rightAnswer})" style="width: 180px; margin-left: 20%; background-color: lightblue;">${Que.options.B}</button>

            </div>

            <div id="scq " class="flex-container" style="margin-left: 20%; margin-top:10%;">
                <button type="button " class="btn btn-light " id="C" onclick = "checkAnswer(this,${rightAnswer})" style="width: 180px;background-color: lightblue;">${Que.options.C}</button>
                <button type="button " class="btn btn-light " id="D" onclick = "checkAnswer(this,${rightAnswer})" style="width: 180px; margin-left: 20%;background-color: lightblue;">${Que.options.D}</button>
            </div>`;

            $("#cardBody").append(str);



        }

    }



}

var Marks = 0;
var incorrect = 0;
var qPassed = 0;

const Q1Options = {
    A: "Shahla Raza",
    B: "Benazir Bhutto",
    C: "Asma Jahangir",
    D: "Marvi Memon"
};
const Q2Options = {
    A: "Murder",
    B: "Depression",
    C: "Not getting films",
    D: "Accusations"
};
const Q3Options = {

    A: "10,000",
    B: "20,000",
    C: "7,000",
    D: "11,000"

};
const Q4Options = {

    A: "Quaid e Azam",
    B: "Allama Iqbal",
    C: "Chaudhry Rehmat Ali",
    D: "Qaim Ali Shah"

};

var Q1 = new Question(1, "Who was the first and the only female PM of Pakistan?", Q1Options, "B");
var Q2 = new Question(2, "What is the reason for Sushant singh rajput's death?", Q2Options, "A");
var Q3 = new Question(3, "How many Test runs Kohli has scored till yet?", Q3Options, "C");
var Q4 = new Question(4, "Who was the founder of Pakistan?", Q4Options, "A");

var Questions = [Q1, Q2, Q3, Q4];



$(document).ready(function() {

    Q1.display(Q1);
    qPassed++;


});



function checkAnswer(answer, correctAnswer) {



    if (answer.innerHTML === correctAnswer.innerHTML) {



        Marks++;
        $("#cardBody").children().remove();

        if (questionRemain()) {
            Questions[qPassed].display(Questions[qPassed]);
            qPassed++;

        } else {

            showResults();


        }

    } //if ends here when answer is correct 
    else {

        incorrect++;
        $("#cardBody").children().remove();

        if (questionRemain()) {
            Questions[qPassed].display(Questions[qPassed]);
            qPassed++;
        } else {

            showResults();


        }
    } //else ends here when answer is not correct


}

function showResults() { //Used Canvas JS library in this function

    var chart = new CanvasJS.Chart("cardBody", {
        animationEnabled: true,
        title: {
            text: "Results"
        },
        data: [{
            type: "pie",
            startAngle: 240,
            yValueFormatString: "##0.00\"%\"",
            indexLabel: "{label} {y}",
            dataPoints: [
                { y: Questions.length, label: "Total Questions" },
                { y: incorrect, label: "Incorrect Answers" },
                { y: Marks, label: "Correct Answers" }
            ]
        }]
    });
    chart.render();

}

function questionRemain() {

    if (qPassed === Questions.length) {


        return false;

    } else {
        return true;
    }

}