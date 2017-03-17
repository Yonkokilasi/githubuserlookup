var Lookup = require('./../js/scripts.js').lookupModule;
var apiKey = require('./../.env').apiKey;

$(document).ready(function () {
    $("#blanks").submit(function (event) {
        event.preventDefault();
        var user = $("#lookup").val();
        $.get('https://api.github.com/users/' + user + '/repos?access_token=' + apiKey).then(function (response) {
            console.log(response);

            console.log(answer);
            $("#founduser").text("You searched for" + response[0].description)
        }).fail(function (error) {
            $("#founduser")
                .text(error.responseJSON.message);
        })
    });

});
