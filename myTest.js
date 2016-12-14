$(".alert").hide()
$("#doneButton").hide()
// $("#submitButton").hide()
$("#theResults").hide()
// $('#doneButton').on('click', function() { window.location = 'myTestResults.html'; });



var percentCompleted

//required images: truck.jpg (question 4), particles.jpg (questions 6-7), pulley.jpg (question 9), particle2.jpg (question )
var database = firebase.database();

function writeUserData(questionText, answerArray, correctAnswer, unitNumber, questionNumber) {
  firebase.database().ref('users/' + userId).set({
    questionText: questionText,
    answerArray: answerArray,
    correctAnswer: correctAnswer,
    unitNumber: unitNumber,
    questionNumber: questionNumber,

  });

for (var i=0; i<questionArray.length; i++){
	writeUserData(questionArray[i].questionText,questionArray[i].answerArray,questionArray[i].correctAnswer,questionArray[i].unitNumber,questionArray[i].questionNumber)
}


}

var questionArray = [
	{
		questionText: "An object released from rest at time t=0 slides down a frictionless incline a distance of 1 meter during the first second. The distance traveled by the object during the time interval from t=1 second to t=2 seconds is",
		answerArray: ["1m","2m","3m","4m","5m"],
		correctAnswer: "3m",
		unitNumber: 1,
		questionNumber: 1

	}, 
	{
		questionText: "The speed v on an automobile moving on a straight road is given in meters per second as a function of time t in seconds by the following situation: \n v = 5 + 2t^3 \n What is the acceleration of the automobile at time t = 5s?",
		answerArray: ["30 m/s^2","100 m/s^2", "255 m/s^2", "150 m/s^2", "155 m/s^2"],
		correctAnswer: "150 m/s^2",
		unitNumber: 1,
		questionNumber: 2

	},
	{
		questionText: "During a certain time interval, a constant force delivers an average power of 4 watts to an object. If the object has an average speed of 2 m/s and the force acts in the direction of motion of the object, the magnitude of the force is",
		answerArray: ["16 N","8 N","6 N","4 N","2 N"],
		correctAnswer: "2 N",
		unitNumber: 3,
		questionNumber: 3

	},
	{
		questionText: "The diagram below shoes two identical wooden planks, A and B, at different incline angles, used to slide concrete blocks from a truck. \n <img class='inlineImg' src='truck.jpg'> \n Compared to the amount of work done against friction by a block sliding down plank A, the work done against friction by a block sliding down plank B is",
		answerArray: ["less","more","the same","zero","negative"],
		correctAnswer: "more",
		unitNumber: 1,
		questionNumber: 4

	},
	{
		questionText: "A child pulls a balloon for 12m with a force of 1.0 N at an angle 60 degrees below horizontal. How much work does the child do on the balloon?",
		answerArray: ["-10 J","-6.0 J","6.0 J","12 J","10 J"],
		correctAnswer: "6.0 J",
		unitNumber: 3,
		questionNumber: 5

	},
	{
		questionText: "The following three questions relate to five particles that start at x=0 at t=0 and move in one dimension indpeendently of one another. Graphs of the velocity of each particle versus time are shown below. This is question 1 of 3. \n <img class='inlineImg' src='particles.jpg'> \n Which particle moves with a constant nonzero acceleration?",
		answerArray: ["a","b","c","d","e"],
		correctAnswer: "a",
		unitNumber: 1,
		questionNumber: 6

	},
	{
		questionText: "The following three questions relate to five particles that start at x=0 at t=0 and move in one dimension indpeendently of one another. Graphs of the velocity of each particle versus time are shown below. This is question 2 of 3. \n <img class='inlineImg' src='particles.jpg'> \n Which particle is farthest from the origin at 2 seconds?",
		answerArray: ["a","b","c","d","e"],
		correctAnswer: "e",
		unitNumber: 1,
		questionNumber: 7

	},
	{
		questionText: "The following three questions relate to five particles that start at x=0 at t=0 and move in one dimension indpeendently of one another. Graphs of the velocity of each particle versus time are shown below. This is question 3 of 3. \n <img class='inlineImg' src='particles.jpg'> \n Which particle is in its initial position at t=2?",
		answerArray: ["a","b","c","d","e"],
		correctAnswer: "c",
		unitNumber: 1,
		questionNumber: 8

	},
	{
		questionText: "<img class='inlineImg' src='pulley.jpg'> Two 0.6 kg objects are connected by a thread that passes over a light, frictionless pulley, as shown above. The objects are initially held at rest. If a third object with mass=0.3kg is added on top of one of the 0.6kg objects as shown and the bojects are released, the magnitude of the acceleration of the 0.3kg object is most nearly",
		answerArray: ["10.0 m/s","6.0 m/s","3.0 m/s","2.0 m/s","1.0 m/s"],
		correctAnswer: "2.0 m/s",
		unitNumber: 2,
		questionNumber: 9

	},
	{
		questionText: "<img class='inlineImg' src='particle2.jpg'> The motion of a particle along a straight line is represented by the position versus time graph above. At whihch of the labeled points on the graph is the magnitude of the acceleration of the particle greatest?",
		answerArray: ["a","b","c","d","e"],
		correctAnswer: "c",
		unitNumber: 1,
		questionNumber: 10

	},
	{
		questionText: "<img class='inlineImg' src='tension.jpg'> A system in equilibirum consists of an object of weight W that hangs from three rops, as show. The tensions in the ropes are T1, T2, and T3. Which of the following are correct values of T2 and T3? (Note: all answers are given in degrees)",
		answerArray: ["T2: Wtan60 T3: W/cos60", "T2: Wtan60 T3: W/sin60","T2: Wtan60 T3: Wsin60","T2: W/tan60 T3: W/cos60","T2: W/tan60 T3: W/sin60"],
		correctAnswer: "T2: W/tan60 T3: W/sin60",
		unitNumber: 2,
		questionNumber: 11

	},
	{
		questionText: "A child is riding on a merry-go-round. As the speed of the merry-go-round is doubled, the magnitude of the centripetal force acting on the child",
		answerArray: ["remains the same","is doubled","is halved","is quadrupled","is fourthed"],
		correctAnswer: "is quadrupled",
		unitNumber: 4,
		questionNumber: 12

	},
	{
		questionText: "<img class='inlineImg' src='springs.jpg'> Two identical, massless springs are hung from a horizontal support. A block of mass m kilograms is suspending from the pair of springs, as shown above. When the block is in equilibirium, each spring is stretched an additioanl x meters. \n The force constant of each spring is most nearly",
		answerArray: ["mg/2","mg/(2x)","mgx","mg/x","x/(mg)"],
		correctAnswer: "mg/(2x)",
		unitNumber: 5,
		questionNumber: 13

	},
	{
		questionText: "Which of the following has the greatest power output?",
		answerArray: ["a weightlifter who lifts a 250 weight 2.1m in 3.0s","a mechanic's lift that raises a 1.2e4 N car 2.1 in 12s","a car engine that does 1.2e3 J of work in 5.0s","a crane that lifts a 2.5e4 N beam at a speed of 1.2m/s","a 350kg horse that constantly accelerates to 20m/s in 4s"],
		correctAnswer: "a crane that lifts a 2.5e4 N beam at a speed of 1.2m/s",
		unitNumber: 3,
		questionNumber: 14

	},
	{
		questionText: "A paticle of mass m moves along a straight path with a speed v defined by the function v=bt^2 + c, where b and c are constnats and t is time. What is the magnitude F of the net force on the particle at time t=T?",
		answerArray: ["bT^2 + c","3mbT + 2c","mbT","mbT + c","2mbT"],
		correctAnswer: "2mbT",
		unitNumber: 1,
		questionNumber: 15

	},
	{
		questionText: "A sports car accelerates uniformly from rest, reaching a speed of 30 m/s in 6 seconds. During those 6 seconds, the car has traveled a distance of",
		answerArray: ["15 m","30 m","60 m","90 m","180"],
		correctAnswer: "90 m",
		unitNumber: 1,
		questionNumber: 16

	},
	
	];

$(".progress-bar").css({"width": (100/(questionArray.length))+"%"});

console.log((questionArray[0].answerArray)[0])

//keeping track of the unit number for each question

//1. Kinematics
//2. Tension
//3. Work/Energy/Power
//4. Uniform Circular Motion
//5. Springs
var unitList =["Kinematics","Tension","Work/Energy/Power","Uniform Circular Motion","Springs"]

// TEMP VERSION:
// var questionArray = [
// 	{
// 		questionText: "What is 1+1",
//		answerArray: ["4","2","3","6","8"],
//		correctAnswer: "2",
//		unitNumber: 1
//		questionNumber: 1
// 	},
//	{
// 		questionText: "What's my name?",
//		answerArray: ["Alex","Aaron","Mr. Meyers","Maxine","Johnathan"],
//		correctAnswer: "Maxine",
//		unitNumber: 2
//		questionNumber: 2
// 	},
// 	
// 	];

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
	document.getElementById("questionText").innerHTML = questionArray[questionCounter].questionText;
}

var displayAnswers = function(){
	//makes sure no buttons are checked already
	$("input").removeAttr("checked");
	//selects just the inner answer array
if (questionCounter<questionArray.length){
	var answers = questionArray[questionCounter].answerArray
	console.log("answer array at question counter is" + questionArray[questionCounter].answerArray)
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
	for (var i=0; i<(questionArray[0].answerArray).length; i++){
		var currentButton = radioButtons[i];
			if (currentButton.checked === true) {
				checkedFlag = true;
			var choiceName = "choice" + (i+1);
			var selection = document.getElementById(choiceName).innerHTML;
			questionArray[questionCounter-1].selectedAnswer = selection
			console.log(selection)
				if (selection === questionArray[questionCounter-1].correctAnswer){
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


	unitTotals[(questionArray[i].unitNumber)-1] = unitTotals[(questionArray[i].unitNumber)-1] + 1
		for (var j=0; j<(questionArray[0].answerArray).length; j++){
			var listItem = document.createElement("li")
			listItem.innerHTML = (questionArray[i].answerArray)[j]
			//flagging the above/below lines cause they might not work
			list.appendChild(listItem);
			if ((questionArray[i].answerArray)[j]===questionArray[i].correctAnswer){
				$(listItem).css("color","green")
				$(listItem).css("font-weight","bold")
				$(listItem).css("font-style","italic")

			}
			else if ((questionArray[i].answerArray)[j]===questionArray[i].selectedAnswer){
				$(listItem).css("color","red")

			}
			if (((questionArray[i].answerArray)[j]===questionArray[i].selectedAnswer)&&((questionArray[i].answerArray)[j]!==questionArray[i].correctAnswer)){
				console.log("you got it wrong")
				itIsCorrect = false;
			}
			
		}	
		var questionWithAnswers = document.createElement("div")
		if (itIsCorrect===false){
			questionWithAnswers.innerHTML = "<span class='glyphicon glyphicon-remove' aria-hidden='true'></span>" + (i+1) + ". " + questionArray[i].questionText;
		console.log('false')
		}
		else if (itIsCorrect===true){
			unitTrues[(questionArray[i].unitNumber)-1] = unitTrues[(questionArray[i].unitNumber)-1] + 1
			questionWithAnswers.innerHTML = "<span class='glyphicon glyphicon-ok' aria-hidden='true'></span>" + (i+1) + ". " + questionArray[i].questionText;
		console.log('true')

		}
		questionWithAnswers.appendChild(list);
		var tempId = "unit" + (questionArray[i].unitNumber) + "Questions"
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


