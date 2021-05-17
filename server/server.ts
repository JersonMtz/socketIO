import { SERVER_PORT } from '../global/enviroment';
import express from 'express';
import http from 'http';
import socketIO from 'socket.io';
import SocketClient from '../function/socketClient';

export default class Server {

    private static _instance: Server;
    private httpServer: http.Server;
    public app: express.Application;
    public port: number;
    public io: socketIO.Server;

    private constructor() {
        this.app = express();
        this.app.use(express.json());
        this.port = SERVER_PORT;
        this.httpServer = new http.Server(this.app);
        this.io = new socketIO.Server(this.httpServer, { cors: { origin: true, credentials: true } });
        this.listenSocket();
    }

    private listenSocket() {

        this.io.on('connection', client => {

            SocketClient.newMessage(client, this.io);
            SocketClient.offline(client);

        });

    }

    public start(callback: Function) {
        this.httpServer.listen(this.port, callback());
    }

    public static get instance() {
        return this._instance || (this._instance = new this());
    }

}