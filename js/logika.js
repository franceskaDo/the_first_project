var isTrueFirst = false;
function firstLogTask() {
	var firstLogInput = document.getElementById("first").value;
	alert(firstLogInput);
	
	if (firstLogInput == "Taip") {
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
function secondLogTask() {
	var secondLogInput = parseInt(document.getElementById("second").value);
	alert(secondLogInput);
	
	if (secondLogInput  == 4) {
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
function thirdLogTask() {
	var thirdLogInput = parseInt(document.getElementById("third").value);
	alert( thirdLogInput);
	
	if ( thirdLogInput == 3) {
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
function fourthLogTask() {
	var fourthLogInput = parseInt(document.getElementById("fourth").value);
	alert(fourthLogInput);
	
	if (fourthLogInput == 540) {
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
function fifthLogTask() {
	var fifthLogInput = parseInt(document.getElementById("fifth").value);
	alert(fifthLogInput);
	
	if (fifthLogInput == 1) {
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
function sixthLogTask() {
	var sixthLogInput = parseInt(document.getElementById("sixth").value);
	alert(sixthLogInput);
	
	if (sixthLogInput == 10) {
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
		window.location.replace("marius.html")
	}
}
