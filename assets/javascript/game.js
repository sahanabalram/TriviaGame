// declare variables that is needed for the game.
var userGuess = 0;
var correctAnswer = 0;
var inCorrectAnswer = 0;
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
// Code for time remaining
var gameTimer;

var countDownTimer = {
    time: 10,
    reset: function () {
        countDownTimer.time = 10;
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
    /* timerConverter: function (t) {
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
    } */
}

// function to check if the selected answer is correct
function gameTime() {
    clearInterval(gameTimer);
    for (var i = 0; i < questions.length; i++) {
        //var optionSelect = $("#q" + i + 'input:radio:checked').val();
        var optionSelect = $('input[name=q' + i + ']:checked', '#question-form').val()
        console.log(optionSelect);
        if (!(optionSelect != undefined)) {
            unAnswered++;           
        } else if (questions[i].answer === optionSelect) {
            correctAnswer++;            
            console.log(correctAnswer);
        } else if (questions[i].answer !== optionSelect) {
            inCorrectAnswer++;           
            console.log(inCorrectAnswer);
        } else {
            // unAnswered++;
            console.log("Should never come here..");
        }
    }
    $("#unAnswered").html(unAnswered);
    $("#correct-answer").html(correctAnswer);
    $("#incorrect-answer").html(inCorrectAnswer);
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
                ' value=' + questions[i].options[j] + '>' +
                questions[i].options[j] + "<br/>"
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
    })

    populateForm();
    $("#send").on("click", function () {
        console.log("ssspeeppe");
        gameTime();
    })
});