var Lookup = require('./../js/scripts.js').lookupModule;
var apiKey = require('./../.env').apiKey;

$(document).ready(function () {

    $("#blanks").submit(function (event) {
        event.preventDefault();
        var user = $("#lookup").val();
        $("#lookup").val("");
        $.get('https://api.github.com/users/' + user + '/repos?access_token=' + apiKey).then(function (response) {
            console.log(response);
            $("#search").hide();
            for (var i = 0; i < response.length; i++) {
                $("searches").prepend("These are the projects for " + user);
                $("#founduser").append("<li>You searched for " + response[i].name + "</li>")
            }

        }).fail(function (error) {
            $("#founduser")
        .append(error.responseJSON.message);
        });
        $("#searcha").show();
        $("#searcha").click(function (event) {
            $("ul li").remove();
            event.preventDefault();
            var user = $("#lookup").val();
            $("#lookup").val("");
            $.get('https://api.github.com/users/' + user + '/repos?access_token=' + apiKey).then(function (response) {
                console.log(response);
                $("#search").hide();
                for (var i = 0; i < response.length; i++) {
                    $("searches").prepend("These are the projects for " + user);
                    $("#founduser").append("<li>You searched for " + response[i].name + "</li>")
                }

            }).fail(function (error) {
                $("#founduser")
                    .append(error.responseJSON.message);
            });
        });
    });
});
