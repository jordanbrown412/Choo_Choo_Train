// Initialize Firebase
  var config = {
    apiKey: "AIzaSyCHuLC1xbrrcFuVC0WSK4CPcgcMaXvUvUY",
    authDomain: "choo-choo-9f046.firebaseapp.com",
    databaseURL: "https://choo-choo-9f046.firebaseio.com",
    storageBucket: "choo-choo-9f046.appspot.com",
    messagingSenderId: "1052478593715"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  $("#add-train-btn").on("click", function(event) {
  event.preventDefault();

  // Grabs user input
  var trainName = $("#train-name-input").val().trim();
  var trainDest = $("#destination-input").val().trim();
  var trainStart = moment($("#start-input").val().trim(), "HH:mm").format("X");
  var trainFrequency = $("#frequency-input").val().trim();

  // Creates local "temporary" object for holding employee data
  var newTrain = {
    name: trainName,
    destination: trainDest,
    start: trainStart,
    frequency: trainFrequency
  };

  database.ref().push(newTrain);

  // Logs everything to console
  console.log(newTrain.name);
  console.log(newTrain.destination);
  console.log(newTrain.start);
  console.log(newTrain.frequency);

  // Clears all of the text-boxes
  $("#train-name-input").val("");
  $("#destination-input").val("");
  $("#start-input").val("");
  $("#frequency-input").val("");

  // Prevents moving to new page
  return false;

});

  database.ref().on("child_added", function(childSnapshot, prevChildKey) {

  console.log(childSnapshot.val());

  // Store everything into a variable.
  var trainName = childSnapshot.val().name;
  var trainDest = childSnapshot.val().destination;
  var trainStart = childSnapshot.val().start;
  var trainFrequency = childSnapshot.val().frequency;

  // Employee Info
  console.log(trainName);
  console.log(trainDest);
  console.log(trainStart);
  console.log(trainFrequency);

  // Prettify the employee start
  var trainStartPretty = moment.unix(trainStart).format("HH:mm");
  console.log(trainStartPretty)
  // Calculate the months worked using hardcore math
  // To calculate the months worked
  // var nextTrain = moment.unix(trainStart, "HH:mm"), "minutes").diff(moment();
  // console.log(nextTrain);

  // Calculate the total billed rate
  // var empBilled = empMonths * empRate;
  // console.log(empBilled);

  // // Add each train's data into the table
  $("#train-table > tbody").append("<tr><td>" + trainName + "</td><td>" + trainDest + "</td><td>" +
  trainFrequency + "</td><td>" + trainStart + "</td><td>");
});