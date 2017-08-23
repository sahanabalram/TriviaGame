// declare variables that is needed for the game.
var userGuess = 0;
var correctAnswer = 0;
var incorrectAnswer = 0;
var unAnswered = 0;
var timeRemaining;

// questions for the trivia game declared as an array and then questions are declared as an object.
var questions = [{
        question: "What is the name of Harry Potter's Owl ?",
        options: ["Hedwig", "Ginger", "Coco", "Grape", "Vocal", "Churo"],
        answer: "Hedwig"
    },
    {
        question: "What is the name of Hermoine Granger's Cat ?",
        options: ["Hedwig", "Crookshanks", "Coco", "Grape", "Vocal", "Churo"],
        answer: "Crookshanks"
    },
    {
        question: "What game did Ron play the best?",
        options: ["Soccer", "Qudditch", "Wizard Chess", "BasketBall", "Tennis", "Swimming"],
        answer: "Wizard Chess"
    },
    {
        question: "What is the name of the HeadMaster of Hogwarts?",
        options: ["Professor Snape", "Dolores Umbridge", "Rubes Hagrid", "Professor Quirrell", "Professor DumbelDore", "Lord Voldemort"],
        answer: "Professor DumbelDore"
    },
    {
        question: "What are the names of Harry Potter's parents?",
        options: ["Dudleys", "Longbottoms", "Sirius Black", "James and Lilly Potter", "Arthur Weasly", "The Granger's"],
        answer: "James and Lilly Potter"
    }
];

function gameTime() {

    for (var i = 0; i < questions.length; i++) {
        var optionSelect = $("#q" + i + 'input:radio:checked').val();
        if (questions[i].answer === optionSelect) {
            correctAnswer++;
            console.log(correctAnswer);
        } else if (questions[i].answer !== optionSelect) {
            incorrectAnswer++;
            console.log(incorrectAnswer);
        }


    }

}

function populateForm() {
    for (var i = 0; i < questions.length; i++) {
        $("#question-form").append("<div id=" + "q" + i + "></div>");
        $("#q" + i).append("<p>" + questions[i].question + "</p>");
        for (var j = 0; j < questions[i].options.length; j++) {
            $("#q" + i).append(
                '<input type="radio" name=' + i +
                ' value=' + questions[i].options[j] + '>' +
                questions[i].options[j]
            );
        }
    }
}

var countDownTimer = {
    time: 120,
    reset: function () {
        countDownTimer.time = 120;
    },
    start: function () {
        setInterval(countDownTimer.count, 1000);
        countDownTimer.count();
    },
    stop: function () {
        clearInterval(countDownTimer);
        //DO stopping stuff 

    },
    count: function () {
        if (countDownTimer.time > 0) {
            countDownTimer.time--;
            console.log(countDownTimer.time);
            $('#time').html(countDownTimer.time);
        } else {
            countDownTimer.stop();
        }

    },
    timerConverter: function (t) {
        var minutes = Math.floor(t / 60);
        var seconds = t - (minutes * 60);
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        if (minutes === 0) {
            minutes = "00";
        } else if (minutes < 10) {
            minutes = "0" + minutes;
        }
        return minutes + ":" + seconds;
    }
}

function showTimer() {
    countDownTimer.start();
}

// function displayResult() {
//     $("#question-form").empty();
//     $("#question-form").append("<h2><p>" + correctAnswer + " correct</p></h2>");
//     $("#question").append("<h2><p>" + incorrectAnswer + " incorrect</p></h2>");
//     countdownTimer.stop();
//     $('#countDown').empty();
// }

$(document).ready(function () {
    $("#question").hide();
    $("#result").hide();
    $("#start").on("click", function () {
        document.getElementById("theme").play();
        $("#question").show();
        $("#start").hide();
        showTimer();
    })
    populateForm();
});