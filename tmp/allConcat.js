var Lookup = require('./../js/scripts.js').lookModule;
var apiKey = require('./../.env').apiKey;
var displayUser = function (user, userData) {
    $("#founduser").text("You searched for " + user + "Here are their repos" + userData)
}
$(document).ready(function () {
    $("#blanks").submit(function (event) {
        event.preventDefault();
        var user = $("#lookup").val();
        currentLookObject.getUser(user, displayUser);
    });

});
