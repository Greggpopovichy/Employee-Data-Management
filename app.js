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
