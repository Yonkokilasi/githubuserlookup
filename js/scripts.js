var apiKey = require('./../.env').apiKey;
Look = function () {

}
Look.prototype.getUser = function (user, displayFunction) {
    .get('https://api.github.com/users/' + user + '/repos?access_token=' + apiKey).then(function (response) {

        displayFunction(user, response[0].name);
    }).fail(function (error) {
        $("#founduser")
            .text(error.responseJSON.message);
    })
};
exports.lookModule = Look;
