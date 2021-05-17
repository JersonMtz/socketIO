import Server from './server/server';
import router from './controller/index.controller';

const server = Server.instance;

server.app.use('/', router);

server.start(() => console.log(`SERVER IN PORT ${ server.port }`));