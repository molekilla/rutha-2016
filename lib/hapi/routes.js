module.exports = {
    apiProxy: {
      method: '[GET, POST, PUT, DELETE]',
      path: '/api/*',
      handler: function(req, reply) {
        var app = req.server.app;
        return reply.proxy({
          host: app.config.get('apiServer:host'),
          port: app.config.get('apiServer:port'),
        });
      }
    },
    assets: {
      method: 'GET',
      path: '/public/{a*}',
      handler: {
        directory: {
          path: __dirname + '/../../src'
        }
      }
    },
    health: {
      method: 'GET',
      path: '/health',
      handler: function(req, reply) {
        reply('OK');
      }
    }
};