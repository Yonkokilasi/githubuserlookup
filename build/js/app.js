(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = '3ce11fded2614014fe6bd2892541217f34e487e0';
},{}],2:[function(require,module,exports){
//var apiKey = require('./../.env').apiKey;
//Look = function () {
//
//}
//Look.prototype.getUser = function (user, displayFunction) {
//    .get('https://api.github.com/users/' + user + '/repos?access_token=' + apiKey).then(function (response) {
//
//        displayFunction(user, response[0].name);
//    }).fail(function (error) {
//        $("#founduser")
//            .text(error.responseJSON.message);
//    })
//};
//exports.lookModule = Look;
},{}],3:[function(require,module,exports){
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
            $("#founduser")     .append(error.responseJSON.message);
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

},{"./../.env":1,"./../js/scripts.js":2}]},{},[3]);
