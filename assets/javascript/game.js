// declare variables that is needed for the game.
var userGuess;
var correctAnswer;
var incorrectAnswer;
var unAnswered;

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

}
// the time that should start once the start button is clicked

function populateForm() {
    for (var i = 0; i < questions.length; i++) {
        $("#question-form").append("<div id=" + "q" + i + "></div>");
        $("#q" + i).append("<p>" + questions[i].question + "</p>");
        for(var j = 0; j < questions[i].options.length; j++) {
            $("#q" + i).append(
                '<input type="radio" name=' + i +
                        ' value=' + questions[i].options[j] + '>' +
                        questions[i].options[j] + '<br>');
        }
    }
}
$(document).ready(function () {
    $("#display-timer").html("00:00");
     $("#start").click(timer);
    var timer = setTimeout(gameTime, 120000);
    populateForm();
});