document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.collapsible');
    var options = {
    	outDuration: 2000,
    	inDuration: 500,
    };
    var instances = M.Collapsible.init(elems, options);
  });

var isTrueFirst = false;
function firstGeoTask() {
	var firstGeoInput = parseInt(document.getElementById("one").value);
	alert(firstGeoInput);
	
	if (firstGeoInput == 3) {
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
function secondGeoTask() {
	var secondGeoInput = parseInt(document.getElementById("two").value);
	alert(secondGeoInput);
	
	if (secondGeoInput == 40) {
		isTrueSecond  = true;
		alert("The answer is correct");
	}
	else {
		isTrueSecond  = false;
		alert("The answer is incorrect");
	}
	checkAllAnswers();
}
var isTrueThird = false;
function thirdGeoTask() {
	var thirdGeoInput = parseInt(document.getElementById("three").value);
	alert(thirdGeoInput) ;
	
	if (thirdGeoInput == 3) {
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
function fourthGeoTask() {
	var fourthGeoInput = parseInt(document.getElementById("four").value);
	alert(fourthGeoInput);
	
	if (fourthGeoInput == 90) {
		isTrueFourth= true;
		alert("The answer is correct");
	}
	else {
		isTrueFourth = false;
		alert("The answer is incorrect");
	}
	checkAllAnswers();
}
var isTrueFifth = false;
function fifthGeoTask() {
	var fifthGeoInput = parseInt(document.getElementById("five").value);
	alert(fifthGeoInput);
	
	if (fifthGeoInput == 40) {
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
function sixthGeoTask() {
	var sixthGeoInput = parseInt(document.getElementById("six").value);
	alert(sixthGeoInput);
	
	if (sixthGeoInput == 2640) {
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
		window.location.replace("bogdan.html");
	}
}

