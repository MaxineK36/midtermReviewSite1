$(".alert").hide()
$("#doneButton").hide()
// $("#submitButton").hide()
$("#theResults").hide()
// $('#doneButton').on('click', function() { window.location = 'myTestResults.html'; });



var percentCompleted

//required images: truck.jpg (question 4), particles.jpg (questions 6-7), pulley.jpg (question 9), particle2.jpg (question )



var questionArray = [
	"An object released from rest at time t=0 slides down a frictionless incline a distance of 1 meter during the first second. The distance traveled by the object during the time interval from t=1 second to t=2 seconds is",
	"The speed v on an automobile moving on a straight road is given in meters per second as a function of time t in seconds by the following situation: \n v = 5 + 2t^3 \n What is the acceleration of the automobile at time t = 5s?",
	"During a certain time interval, a constant force delivers an average power of 4 watts to an object. If the object has an average speed of 2 m/s and the force acts in the direction of motion of the object, the magnitude of the force is",
	"The diagram below shoes two identical wooden planks, A and B, at different incline angles, used to slide concrete blocks from a truck. \n <img class='inlineImg' src='truck.jpg'> \n Compared to the amount of work done against friction by a block sliding down plank A, the work done against friction by a block sliding down plank B is",
	"A child pulls a balloon for 12m with a force of 1.0 N at an angle 60 degrees below horizontal. How much work does the child do on the balloon?",
	"The following three questions relate to five particles that start at x=0 at t=0 and move in one dimension indpeendently of one another. Graphs of the velocity of each particle versus time are shown below. This is question 1 of 3. \n <img class='inlineImg' src='particles.jpg'> \n Which particle moves with a constant nonzero acceleration?",
	"The following three questions relate to five particles that start at x=0 at t=0 and move in one dimension indpeendently of one another. Graphs of the velocity of each particle versus time are shown below. This is question 2 of 3. \n <img class='inlineImg' src='particles.jpg'> \n Which particle is farthest from the origin at 2 seconds?",
	"The following three questions relate to five particles that start at x=0 at t=0 and move in one dimension indpeendently of one another. Graphs of the velocity of each particle versus time are shown below. This is question 3 of 3. \n <img class='inlineImg' src='particles.jpg'> \n Which particle is in its initial position at t=2?",
	"<img class='inlineImg' src='pulley.jpg'> Two 0.6 kg objects are connected by a thread that passes over a light, frictionless pulley, as shown above. The objects are initially held at rest. If a third object with mass=0.3kg is added on top of one of the 0.6kg objects as shown and the bojects are released, the magnitude of the acceleration of the 0.3kg object is most nearly",
	"<img class='inlineImg' src='particle2.jpg'> The motion of a particle along a straight line is represented by the position versus time graph above. At whihch of the labeled points on teh graph is the magnitude of the acceleration of the particle greatest?",
	"<img class='inlineImg' src='tension.jpg'> A system in equilibirum consists of an object of weight W that hangs from three rops, as show. The tensions in the ropes are T1, T2, and T3. Which of teh following are correct values of T2 and T3? (Note: all answers are given in degrees)",
	"A child is riding on a merry-go-round. As the speed of the merry-go-round is doubled, the magnitude of the centripetal force acting on the child",
	"<img class='inlineImg' src='springs.jpg'> Two identical, massless springs are hung from a horizontal support. A block of mass m kilograms is suspending from the pair of springs, as shown above. When the block is in equilibirium, each spring is stretched an additioanl x meters. \n The force constant of each spring is most nearly",
	"Which of the following has the greatest power output?",
	"A paticle of mass m moves along a straight path with a speed v defined by the function v=bt^2 + c, where b and c are constnats and t is time. What is the magnitude F of the net force on the particle at time t=T?",
	"A sports car accelerates uniformly from rest, reaching a speed of 30 m/s in 6 seconds. During those 6 seconds, the car has traveled a distance of",
	];

$(".progress-bar").css({"width": (100/(questionArray.length))+"%"});


var answerArray = [
	["1m","2m","3m","4m","5m"],
	["30 m/s^2","100 m/s^2", "255 m/s^2", "150 m/s^2", "155 m/s^2"],
	["16 N","8 N","6 N","4 N","2 N"],
	["less","more","the same","zero","negative"],
	["-10 J","-6.0 J","6.0 J","12 J","10 J"],
	["a","b","c","d","e"],
	["a","b","c","d","e"],
	["a","b","c","d","e"],
	["10.0 m/s","6.0 m/s","3.0 m/s","2.0 m/s","1.0 m/s"],
	["a","b","c","d","e"],
	["T2: Wtan60 T3: W/cos60", "T2: Wtan60 T3: W/sin60","T2: Wtan60 T3: Wsin60","T2: W/tan60 T3: W/cos60","T2: W/tan60 T3: W/sin60"],
	["remains the same","is doubled","is halved","is quadrupled","is fourthed"],
	["mg/2","mg/(2x)","mgx","mg/x","x/(mg)"],
	["a weightlifter who lifts a 250 weight 2.1m in 3.0s","a mechanic's lift that raises a 1.2e4 N car 2.1 in 12s","a car engine that does 1.2e3 J of work in 5.0s","a crane that lifts a 2.5e4 N beam at a speed of 1.2m/s","a 350kg horse that constantly accelerates to 20m/s in 4s"],
	["bT^2 + c","3mbT + 2c","mbT","mbT + c","2mbT"],
	["15 m","30 m","60 m","90 m","180"],



	
];

var correctAnswers = [
	"3m",
	"150 m/s^2",
	"2 N",
	"more",
	"6.0 J",
	"a",
	"e",
	"c",
	"2.0 m/s",
	"c", //?
	"T2: W/tan60 T3: W/sin60",
	"is quadrupled",
	"mg/(2x)",	
	"a crane that lifts a 2.5e4 N beam at a speed of 1.2m/s",
	"2mbT",
	"90 m",
];

//keeping track of the unit number for each question

//1. Kinematics
//2. Tension
//3. Work/Energy/Power
//4. Uniform Circular Motion
//5. Springs
var unitList =["Kinematics","Tension","Work/Energy/Power","Uniform Circular Motion","Springs"]
var whatUnit = [1,1,3,1,3,1,1,1,2,1,2,4,5,3,1,1]

// TEMP VERSION:
// var questionArray = [
// 	{
// 		questionText: "What is 1+1?",
// 		questionUnit: 1,
// 		anotherProperty: "Another Value"
// 	},
// 	"What's my name?",
// 	];
// var answerArray = [
// 	["4","2","3","6","8"],
// 	["Alex","Aaron","Mr. Meyers","Maxine","Johnathan"],
// ];

// var correctAnswers = [
// 	"2",
// 	"Maxine",
// ];
// var whatUnit = [1,2]

// var unitList = ["Math","Real Life"]



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
	//Hides the "you didn't select an answer" alert
	$(".alert").hide()
	//shows the question text at questionCounter
	document.getElementById("questionText").innerHTML = questionArray[questionCounter];
}

var displayAnswers = function(){
	//makes sure no buttons are checked already
	$("input").removeAttr("checked");
	//selects just the inner answer array
if (questionCounter<questionArray.length){
	var answers = answerArray[questionCounter]
	console.log("answer array at question counter is" + answerArray[questionCounter])
	for (var i=0; i<answers.length; i++){
		var answerText = answers[i]
		var choiceName = "choice" + (i+1);
		document.getElementById(choiceName).innerHTML = answerText;
		}
	}
}

var displayQuestionNumber = function(){
	document.getElementById("questionIndicator").innerHTML = "Question "+ (questionCounter+1) + "/" + questionArray.length
}
//the function below checks your answer
var buttonClicked = function(){
	questionCounter++;
	percentCompleted = ((questionCounter+1)/questionArray.length)*100
	$(".progress-bar").css({"width": percentCompleted + "%"});

	var radioButtons = document.getElementsByClassName("radioButton");
	var checkedFlag = false;
	for (var i=0; i<answerArray[0].length; i++){
		var currentButton = radioButtons[i];
			if (currentButton.checked === true) {
				checkedFlag = true;
			var choiceName = "choice" + (i+1);
			var selection = document.getElementById(choiceName).innerHTML;
			selectedAnswers.push(selection);
			console.log(selectedAnswers)
				if (selection === correctAnswers[questionCounter-1]){
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


	if (questionCounter===(questionArray.length-1)){
		$("#doneButton").show()
		$("#submitButton").hide()
	}

	// if (questionCounter>=questionArray.length){
	// 	alert(correctCounter);
	// 	//end test
	// 	//display score report, send scores to data base, etc.
	// 	return;
		
	if (questionCounter===(questionArray.length)){
		console.log("test is over")
		showResults()
	}
	
	displayQuestion();
	displayAnswers();
	displayQuestionNumber();
	console.log(correctCounter);
	console.log("% done = " + percentCompleted)
	
	
}

console.log(selectedAnswers)

var showResults = function(){
	for (var i=0; i<unitList.length; i++){
		var id = "unit" + String(i+1)
		document.getElementById(id).innerHTML = unitList[i]
	}

	var unitTrues = [0,0,0,0,0];
	var unitTotals = [0,0,0,0,0];

	document.getElementById("score").innerHTML = parseInt(100*(correctCounter/questionArray.length)) + "%";
	$("#theQuestions").hide()
	$("#theResults").show()
	for (var i=0; i<questionArray.length; i++){
		var itIsCorrect = true
		var list = document.createElement("ul")


	unitTotals[whatUnit[i]-1] = unitTotals[whatUnit[i]-1] + 1
		for (var j=0; j<answerArray[0].length; j++){
			var listItem = document.createElement("li")
			listItem.innerHTML = answerArray[i][j]
			list.appendChild(listItem);
			if (answerArray[i][j]===correctAnswers[i]){
				$(listItem).css("color","green")
				$(listItem).css("font-weight","bold")
				$(listItem).css("font-style","italic")

			}
			else if (answerArray[i][j]===selectedAnswers[i]){
				$(listItem).css("color","red")

			}
			if ((answerArray[i][j]===selectedAnswers[i])&&(answerArray[i][j]!==correctAnswers[i])){
				itIsCorrect = false;
			}
			
		}	
		var questionWithAnswers = document.createElement("div")
		if (itIsCorrect===false){
			questionWithAnswers.innerHTML = "<span class='glyphicon glyphicon-remove' aria-hidden='true'></span>" + (i+1) + ". " + questionArray[i];
		console.log('false')
		}
		else if (itIsCorrect===true){
			unitTrues[whatUnit[i]-1] = unitTrues[whatUnit[i]-1] + 1
			questionWithAnswers.innerHTML = "<span class='glyphicon glyphicon-ok' aria-hidden='true'></span>" + (i+1) + ". " + questionArray[i];
		console.log('true')

		}
		questionWithAnswers.appendChild(list);
		var tempId = "unit" + whatUnit[i] + "Questions"
		document.getElementById(tempId).appendChild(questionWithAnswers);
	}


//score for each unit
for (var k=0; k<unitList.length; k++){
	var id = "unit" + (k+1) + "Score";
	console.log("id is " + id)
	console.log("total = "+unitTotals[k]);
		console.log("true = "+unitTrues[k]);

	document.getElementById(id).innerHTML = parseInt(100*(unitTrues[k]/unitTotals[k])) + "%"
}


}
// showResults();



