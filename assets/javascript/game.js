// declare variables that is needed for the game.
var userGuess;
var correctAnswer;
var incorrectAnswer;
var unAnswered;
// questions for the trivia game declared as an array and then questions are declared as an object.
var questions = [{
        question1: "What is the name of Harry Potter's Owl ?",
        options: ["Hedwig", "Ginger", "Coco", "Grape", "Vocal", "Churo"],
        answer: "Hedwig"
    },

    {
        question2: "What is the name of Hermoine Granger's Cat ?",
        options: ["Hedwig", "Crookshanks", "Coco", "Grape", "Vocal", "Churo"],
        answer: "Crookshanks"
    },

    {
        question3: "What game did Ron play the best?",
        options: ["Soccer", "Qudditch", "Wizard Chess", "BasketBall", "Tennis", "Swimming"],
        answer: "Wizard Chess"

    },

    {
        question4: "What is the name of the HeadMaster of Hogwarts?",
        options: ["Professor Snape", "Dolores Umbridge", "Rubes Hagrid", "Professor Quirrell", "Professor DumbelDore", "Lord Voldemort"],
        answer: "Professor DumbelDore"
    },

    {
        question5: "What are the names of Harry Potter's parents?",
        options: ["Dudleys", "Longbottoms", "Sirius Black", "James and Lilly Potter", "Arthur Weasly", "The Granger's"]
    }
];

function gameTime() {

}
// the time that should start once the start button is clicked


$(document).ready(function () {
    $("#display-timer").html("00:00");
    $("#start").click(timer.start);
    var timer = setTimeout(gameTime, 120000);

});



for (var i = 0; i < questions.length; i++) {
    if (userGuess === )
}