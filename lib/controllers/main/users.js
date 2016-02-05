var Hapi = require('hapi');
var Boom = require('boom');
var debug = require('debug')('frontend:users');

exports.list = function (request, reply) {

    var server = request.server;
    var UserModel = server.app.mongoose.models.User;

    UserModel.find({},'email created', function (err, users) {

        if (err) {
            server.app.logger.error(err);
        }


        if (users) {
            return reply(users);
        } else {
            return reply(Boom.badRequest('Invalid'));
        }

    });

};