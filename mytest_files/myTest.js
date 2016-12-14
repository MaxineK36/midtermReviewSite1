$(".alert").hide()

var questionArray = [
	"What is 1+1?",
	"What's my name?",
	"What class is this for?",
	"Who is our teacher?",
	];
var answerArray = [
	["4","2","3","6"],
	["Helen","Aaron","Lola","Maxine"],
	["AP Physics 1","AP Physics C","AP Econ","AP Lit"],
	["Meyers","Schlosser","Tieds","Blumey"]
];

var correctAnswers = [
	"2",
	"Maxine",
	"AP Physics C",
	"Schlosser",
];

var selectedAnswers = [];

var questionCounter = 0;
var correctCounter = 0;


$(document).ready(function(){
	displayQuestion();
	displayAnswers();
	displayQuestionNumber();

	console.log("hi")

});

var displayQuestion = function(){
	$(".alert").hide()
	document.getElementById("questionText").innerHTML = questionArray[questionCounter];
}

var displayAnswers = function(){
	$("input").removeAttr("checked");
	var answers = answerArray[questionCounter]
	for (var i=0; i<answers.length; i++){
		var answerText = answers[i]
		var choiceName = "choice" + (i+1);
		document.getElementById(choiceName).innerHTML = answerText;
		}
}

var displayQuestionNumber = function(){
	document.getElementById("questionIndicator").innerHTML = "Question "+ (questionCounter+1) + "/" + questionArray.length
}

var buttonClicked = function(){
	var radioButtons = document.getElementsByClassName("radioButton");
	var checkedFlag = false;
	for (var i=0; i<correctAnswers.length; i++){
		var currentButton = radioButtons[i];
			if (currentButton.checked === true) {
				checkedFlag = true;
			var choiceName = "choice" + (i+1);
			var selection = document.getElementById(choiceName).innerHTML;
			selectedAnswers.push(selection);
			console.log(selectedAnswers)
				if (selection === correctAnswers[questionCounter]){
				correctCounter++;
				console.log(correctCounter)
				}
				break;
			}

	}
	if (checkedFlag === false){
			$(".alert").show();
			return;
	}

	questionCounter++;
	if (questionCounter>=questionArray.length){
		alert(correctCounter);
		//end test
		//display score report, send scores to data base, etc.
		return;
		
	}
	displayQuestion();
	displayAnswers();
	displayQuestionNumber();
	console.log(correctCounter);
	
	
}