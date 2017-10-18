function check(){


//console.log(check)
	var question1 = document.forms["quiz"]["question1"].value;
	var question2 = document.forms["quiz2"]["question2"].value;
	var question3 = document.forms["quiz3"]["question3"].value;
	var question4 = document.forms["quiz4"]["question4"].value;
	var question5 = document.forms["quiz5"]["question5"].value;
	var question6 = document.forms["quiz6"]["question6"].value;
	var question7 = document.forms["quiz7"]["question7"].value;
	var question8 = document.forms["quiz8"]["question8"].value;
	var question9 = document.forms["quiz9"]["question9"].value;
	var question10 = document.forms["quiz10"]["question10"].value;
	var question11 = document.forms["quiz11"]["question11"].value;
	var question12 = document.forms["quiz12"]["question12"].value;
	var question13 = document.forms["quiz13"]["question13"].value;
	var question14 = document.forms["quiz14"]["question14"].value;
	var question15 = document.forms["quiz15"]["question15"].value;
	var correct = 0;


		if (question1 === "RunDMC") {
			correct++;
		}

		if (question2 === "30") {
			correct++;
		}


		if (question3 === "False") {
			correct++;
		}

		if (question4 === "Fast Times at Ridgemont High") {
			correct++;
		}

		if (question5 === "Adidas") {
			correct++;
		}


		if (question6 === "to prevent kids from skipping school to shop for shoes") {
			correct++;
		}

		if (question7 === "Collectible Nike sneaker designers") {
			correct++;
		}

		if (question8 === "Kareem Abdul-Jabbar") {
			correct++;
		}


		if (question9 === "False") {
			correct++;
		}

		if (question10 === "H-Town Sneaker Summit") {
			correct++;
		}

		if (question11 === "False") {
			correct++;
		}


		if (question12 === "A sneakerhead who only buys shoes based on buzz around its release") {
			correct++;
		}

		if (question13 === "True") {
			correct++;
		}

		if (question14 === "90,300") {
			correct++;
		}


		if (question15 === "22 years") {
			correct++;
		}


	var messages = ["Sneaker Head", "Hypebeast", "Shoebarn Shopper"];
	
	var range;

		if (correct < 1) {
			range = 2;
		}	

		if (correct > 0 && correct < 3) {
			range = 1;
		}

		if (correct > 2) {
			range = 0;
		}

	document.getElementById("done").style.visibility = "visible";

	document.getElementById("message").innerHTML = messages[range];
	document.getElementById("numcorrect").innerHTML = "You got " + correct + " correct.";

}