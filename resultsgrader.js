function gradeResult() {
      var myResult = parseInt(document.getElementById("value1").value);
	  var myResult = parseInt(document.getElementById("value2").value);
	  var myResult = parseInt(document.getElementById("value3").value);
      var grade;
if (!myResult) {
	alert(" please enter a result");
} 
else {
	if (myResult > 90) {
		grade = 'A';
	} else if (myResult > 80) {
		grade = 'B';
	} else if (myResult > 70) {
		grade = 'B-'
	} else if (myResult > 60) {
		grade = 'c'
	} else if (myResult > 50) {
		grade = 'c-'
	} else if (myResult > 40) {
		grade = 'D'
	} else {
		grade = 'F';
	}
	var message = 'Your result of' + myResult + ' gets you a grade ' + grade;
	console.log (message);
document.getElementById("resultsentence").innerHTML = message; 
}
}
		
		