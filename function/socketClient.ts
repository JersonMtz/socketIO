import { Socket, Server } from 'socket.io';

export default class SocketClient {
    
    public static offline(client: Socket) {
        client.on('disconnect', () => console.log('cliente desconectado'));
    }

    public static newMessage(client: Socket, io: Server) {
        client.on('new_message', (data) => {
            const { from, message } = data;
            io.emit('new_message', { from, message, detail: Date.now() });
        });
        
    }

}