const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
    const server = Hapi.server({
        port : 5000,
        host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
        routes: {
            cors: {
                origin:['*'],
            },
          },
    });
    
    await server.start();
    console.log(`Server berjalan di ${server.info.uri}`);

    server.route(routes);
};

init();
