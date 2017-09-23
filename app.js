//firebase config
var config = {
    apiKey: "AIzaSyB9DUnSCsHNxWQoIiEuzMxSTwTU0QOqlWs",
    authDomain: "employeedataactivity.firebaseapp.com",
    databaseURL: "https://employeedataactivity.firebaseio.com",
    projectId: "employeedataactivity",
    storageBucket: "",
    messagingSenderId: "224258114961"
};

firebase.initializeApp(config);

var database = firebase.database();

var emplyName = "";
var emplyRole = "";
var emplyStartDate = "";
var emplyMonthsWorked = 0;
var emplyMonthlyRate = 0;
var emplyBilled = 0;

$("#add-employee").on("click", function(event){
	event.preventDefault();

	//grab data
	emplyName = $("#name-input").val().trim();
	emplyRole = $("#role-input").val().trim();
	emplyStartDate= $("#date-input").val().trim();
	emplyMonthlyRate = $("#rate-input").val().trim();

	database.ref().push({
		name: emplyName,
		role: emplyRole,
		startdate: emplyStartDate,
		rate: emplyMonthlyRate
	});
});

database.ref().on("child_added", function(snapshot) {

      // Log everything that's coming out of snapshot

      console.log(snapshot.val());

      console.log(snapshot.val().name);

      console.log(snapshot.val().role);

      console.log(snapshot.val().startdate);

      console.log(snapshot.val().rate);

      $("#dynamic-row").append("<div class='well'><span id='name-display'> " + snapshot.val().name +
        " </span><span id='role-display'> " + snapshot.val().role +
        " </span><span id='date-display'> " + snapshot.val().date +
        " </span><span id='monthsworked-display'> " + "" + " </span><span id='rate-display'>" + snapshot.val().rate +
         "</span><span id='totalbilled-display>"+""+"</span></div>");

      // Change the HTML to reflect

      /*$("#name-display").text(snapshot.val().name);

      $("#role-display").text(snapshot.val().role);

      $("date-display").text(snapshot.val().startdate);

      $("#rate-display").text(snapshot.val().rate);*/

    // Handle the errors

    }, function(errorObject) {

      console.log("Errors handled: " + errorObject.code);
});