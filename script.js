
// Initialize Firebase
var config = {
    apiKey: "AIzaSyBZDk1mlXyUJPGYPb5ZgooXcAQpHMI6fIU",
    authDomain: "rock-paper-scissors-ed2ac.firebaseapp.com",
    databaseURL: "https://rock-paper-scissors-ed2ac.firebaseio.com",
    projectId: "rock-paper-scissors-ed2ac",
    storageBucket: "rock-paper-scissors-ed2ac.appspot.com",
    messagingSenderId: "951950759397"
};
firebase.initializeApp(config);

var database = firebase.database();

var connectionsRef = database.ref("/connections");
var connectedRef = database.ref(".info/connected");


// var player = []; con?

// Adds new users to connectionsRef list and removes when disconnected
connectedRef.on("value", function (snapshot) {
    if (snapshot.val()) {
        var con = connectionsRef.push(true);
        con.onDisconnect().remove();
    }
});

// When new connectionsRef added, do:   
connectionsRef.on("value", function (snapshot) {
    console.log(snapshot.numChildren());
    // $("#win-or-lose").text(snapshot.numChildren()); not working
});

$("input:radio").on("click", function () {
    
    
    
    
    
    // if ($('input[name=p1-button]:checked').length != 0 && $('input[name=p2-button]:checked').length != 0) {
    //     console.log("yes");
    // } else {
    //     console.log("no");
    // }  WORKING!!!
});

$("#player-1-start").on("click", function() {
    console.log("clicked!");
    $(".p1-buttons-body").css("visibility", "visible");
    $(".p1-final-body").css("visibility", "visible");
    $("#player-1-start").css("visibility", "hidden");
    $("#player-2-start").css("visibility", "hidden");
});

$("#player-2-start").on("click", function() {
    console.log("clicked!");
    $(".p2-buttons-body").css("visibility", "visible");
    $(".p2-final-body").css("visibility", "visible");
    $("#player-2-start").css("visibility", "hidden");
    $("#player-1-start").css("visibility", "hidden");
});






// $("#add-player-btn").on("click", function(event) { // create button later
//     event.preventDefault();

//     var playerName = $("#player-name-input").val().trim();

//     var newPlayer = {
//       name: playerName,
//     };

//     database.ref().push(newPlayer);

//     // Logs everything to console
//     console.log(newPlayer.name);

//     // Clears all of the text-boxes
//     $("#employee-name-input").val("");
//     $("#role-input").val("");
//   });