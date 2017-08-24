// declare variables that is needed for the game.
var userGuess = 0;
var correctAnswer = 0;
var inCorrectAnswer = 0;
var unAnswered = 0;
var timeRemaining;

// questions for the trivia game declared as an array and then questions are declared as an object.
var questions = [{
        question: "What is the name of Harry Potter's Owl ?",
        options: ["Hedwig", "Grape", "Vocal", "Churo"],
        answer: "Hedwig"
    },
    {
        question: "What is the name of Hermoine Granger's Cat ?",
        options: ["Hedwig", "Crookshanks", "Coco", "Grape"],
        answer: "Crookshanks"
    },
    {
        question: "What game did Ron play the best?",
        options: ["Soccer", "Qudditch", "Wizard Chess", "BasketBall"],
        answer: "Wizard Chess"
    },
    {
        question: "What is the name of the HeadMaster of Hogwarts?",
        options: ["Rubes Hagrid", "Professor Quirrell", "Professor DumbelDore", "Lord Voldemort"],
        answer: "Professor DumbelDore"
    },
    {
        question: "What are the names of Harry Potter's parents?",
        options: ["Dudleys", "Longbottoms", "Sirius Black", "James and Lilly Potter"],
        answer: "James and Lilly Potter"
    }
];
// Code for time remaining
var gameTimer;

var countDownTimer = {
    time: 120,
    reset: function () {
        countDownTimer.time = 120;
    },
    start: function () {
        gameTimer = setInterval(countDownTimer.count, 1000);
        countDownTimer.count();
    },
    stop: function () {
        //DO stopping stuff 
        gameTime();
    },
    count: function () {
        if (countDownTimer.time > 0) {
            countDownTimer.time--;
            //console.log(countDownTimer.time);
            $('#time').html(countDownTimer.time);
        } else {
            console.log("stopping...");
            countDownTimer.stop();
        }
    }
}

// function to check if the selected answer is correct
function gameTime() {
    clearInterval(gameTimer);
    for (var i = 0; i < questions.length; i++) {
        var optionSelect = $('input[name=q' + i + ']:checked', '#question-form').val()
        console.log(questions[i].answer, optionSelect);
        if (!(optionSelect != undefined)) {
            unAnswered++;
        } else if (questions[i].answer === optionSelect) {
            correctAnswer++;
            console.log(correctAnswer);
        } else if (questions[i].answer !== optionSelect) {
            inCorrectAnswer++;
            console.log(inCorrectAnswer);
        } else {
            console.log("Should never come here..");
        }
    }
    document.getElementById("theme").pause();
    document.getElementById("end").play();
    $("#unAnswered").html(unAnswered);
    $("#correct-answer").html(correctAnswer);
    $("#incorrect-answer").html(inCorrectAnswer);
    $("#magic").hide();
    $("#question").hide();
    $("#result").show();
}

// function to populate the form with the questions and options
function populateForm() {
    for (var i = 0; i < questions.length; i++) {
        $("#question-form").append("<div id=" + "q" + i + "></div>");
        $("#q" + i).append("<div><p>" + questions[i].question + "</p></div>");
        for (var j = 0; j < questions[i].options.length; j++) {
            $("#q" + i).append(
                '<input type="radio" name=q' + i +
                ' value="' + questions[i].options[j] + '">' +
                questions[i].options[j]
            );
        }
    }
    $("#question").append("<button id='send' class='btn btn-lg'>Submit</button>");
}

$(document).ready(function () {
    $("#question").slideUp();
    $("#result").hide();
    $("#start").on("click", function () {
        document.getElementById("theme").play();
        $("#question").slideDown();
        $("#start").hide();
        countDownTimer.start();
    });
    populateForm();
    $("#send").on("click", function () {
        gameTime();
    });
});