var isTrueFirst = false;
function firstIqTask() {
	var firstIqInput = parseInt(document.getElementById("first").value);
	alert(firstIqInput);
	
	if (firstIqInput == 33) {
	isTrueFirst = true;
	alert("The aswer is correct");
	}
	 else {
	 	isTrueFirst = false;
		alert("The aswer is incorrect");
	}
	checkAllAnswers();
}
var isTrueSecond = false;
function secondIqTask() {
	var secondIqInput = parseInt(document.getElementById("second").value);
	alert(secondIqInput);
	
	if (secondIqInput == 20) {
		isTrueSecond = true;
		alert("The aswer is correct");
	}
	else {
		isTrueSecond = false;
		alert("The aswer is incorrect");
	}
	checkAllAnswers();
}
var isTrueThird = false;
function thirdIqTask() {
	var thirdIqInput = parseInt(document.getElementById("third").value);
	alert(thirdIqInput) ;
	
	if (thirdIqInput == 5){
		isTrueThird = true;
		alert("The aswer is correct");
	}
	else {
		isTrueThird = false;
		alert("The aswer is incorrect");
	}
	checkAllAnswers();
}
var isTrueFourth = false;
function fourthIqTask() {
	var fourthIqInput = parseInt(document.getElementById("fourth").value);
	alert(fourthIqInput);
	
	if (fourthIqInput == 36) {
		isTrueFourth = true;
		alert("The aswer is correct");
	}
	else {
		isTrueFourth = false;
		alert("The aswer is incorrect");
	}
	checkAllAnswers()
}
function checkAllAnswers(){
	if(isTrueFirst && isTrueSecond && isTrueThird && isTrueFourth){
		alert("VICTORY!")
		window.location.replace("franceska.html");
	}
}
