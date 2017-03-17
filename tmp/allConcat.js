var Lookup = require('./../js/scripts.js').lookupModule;
var apiKey = require('./../.env').apiKey;

$(document).ready(function () {
    $("#blanks").submit(function (event) {
        event.preventDefault();
        var user = $("#lookup").val();
        $.get('https://api.github.com/users/' + user + '/repos?access_token=' + apiKey).then(function (response) {
            console.log(response);
            $("#founduser").text("You searched for " + response[0].name)
        }).fail(function (error) {
            $("#founduser")
                .text(error.responseJSON.message);
        })
    });

});
