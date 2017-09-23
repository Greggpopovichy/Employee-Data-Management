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
var emplyMothsWorked = 0;
var emplyMonthlyRate = 0;
var emplyBilled = 0;

