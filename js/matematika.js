var isTrueFirst = false;
function firstMathTask() {
	var firstMathInput = parseInt(document.getElementById("first").value);
	alert(firstMathInput);
	
	if (firstMathInput == 6) {
		isTrueFirst = true;
		alert("The answer is correct");
	}
	 else {
	 	isTrueFirst = false;
		alert("The answer is incorrect");
	}
	checkAllAnswers();
}
var isTrueSecond = false;
function secondMathTask() {
	var secondMathInput = parseInt(document.getElementById("second").value);
	alert(secondMathInput);
	
	if (secondMathInput == 186) {
		 isTrueSecond = true;
		alert("The answer is correct");
	}
	else {
		 isTrueSecond = false;
		alert("The answer is incorrect");
	}
	checkAllAnswers();
}
var isTrueThird = false;
function thirdMathTask() {
	var thirdMathInput = parseInt(document.getElementById("third").value);
	alert(thirdMathInput) ;
	
	if (thirdMathInput == 9)	{
		isTrueThird = true;
		alert("The answer is correct");
	}
	else {
		isTrueThird = false;
		alert("The answer is incorrect");
	}
	checkAllAnswers();
}
var isTrueFourth = false;
function fourthMathTask() {
	var fourthMathInput = parseInt(document.getElementById("fourth").value);
	alert(fourthMathInput);
	
	if (fourthMathInput == 24) {
		isTrueFourth = true;
		alert("The answer is correct");
	}
	else {
		isTrueFourth = false;
		alert("The answer is incorrect");
	}
	checkAllAnswers();
}
var isTrueFifth = false;
function fifthMathTask() {
	var fifthMathInput = parseInt(document.getElementById("fifth").value);
	alert(fifthMathInput);
	
	if (fifthMathInput == 25) {
		isTrueFifth = true;
		alert("The answer is correct");
	}
	else {
		isTrueFifth = false;
		alert("The answer is incorrect");
	}
	checkAllAnswers();
}
var isTrueSixth = false;
function sixthMathTask() {
	var sixthMathInput = parseInt(document.getElementById("sixth").value);
	alert(sixthMathInput);
	
	if (sixthMathInput == 240) {
		isTrueSixth = true;
		alert("The answer is correct");
	}
	else {
		isTrueSixth = false;
		alert("The answer is incorrect");
	}
	checkAllAnswers();
}
function checkAllAnswers(){
	if(isTrueFirst && isTrueSecond && isTrueThird && isTrueFourth && isTrueFifth && isTrueSixth){
	alert("VICTORY!")
	window.location.replace("turi.html");
	}
}
