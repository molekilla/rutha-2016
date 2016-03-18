var Hapi = require('hapi');
var Boom = require('boom');
var debug = require('debug')('frontend:authentication');

// Rutha says: You should AJAX authentication calls
exports.login = function(request, reply) {

    var server = request.server;
    var UserModel = server.app.mongoose.models.User;

    UserModel.findOne({ email: request.payload.email }, function(err, user) {

      if (err) {
        return reply().redirect('/#login/');
        server.app.logger.error(err);
      }

      if (!user) {
        return reply(Boom.notFound('User not found'));
        return;      }

      if (user && user.validPassword(request.payload.password)) {
        request.cookieAuth.set(user);
        return reply().code(201);
      } else {
        return reply(Boom.badRequest('Invalid password'));
      }

    });

};

exports.logout = function(request, reply) {
   request.cookieAuth.clear();
   reply().redirect('/');
 };

exports.signup = function(request, reply) {
      var server = request.server;
      var UserModel = server.app.mongoose.models.User;

      UserModel.signup({
        email: request.payload.email,
        password: request.payload.password
      }, function(err, model) {
        if (err) {
          var internalErr = Boom.internal('Failed signup user', err);
          reply(internalErr);
          server.app.logger.error(err);
          return;
        }

        if (model) {
          return reply().code(201);
        } else {
          return reply(Boom.badRequest('Username already exists'));
        }
      });
};