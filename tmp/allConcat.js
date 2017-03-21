var Lookup = require('./../js/scripts.js').lookupModule;
var apiKey = require('./../.env').apiKey;

$(document).ready(function () {
    $("#blanks").submit(function (event) {
        event.preventDefault();
        var user = $("#lookup").val();
        $.get('https://api.github.com/users/' + user + '/repos?access_token=' + apiKey).then(function (response) {
            console.log(response);
            for (var i = 0; i < response.length; i++) {
                $("#founduser").append("<li>You searched for " + response[i].name +"</li>")
            }
        }).fail(function (error) {
            $("#founduser")
                .text(error.responseJSON.message);
        });
    });
});
