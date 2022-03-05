import { Injectable } from '@angular/core'
import * as signalR from '@microsoft/signalr'
import { HttpClient } from '@angular/common/http'
import { Subject } from 'rxjs';
import { Message } from '../model/message';

@Injectable({
    providedIn: 'root'
})
export class ChatService {

    private connection: any;

    // readonly SEND_MESSAGE_URL = 'https://localhost:44389/api/message';
    private receivedMessage = new Subject<Message>();
    readonly onReceivedMessage = this.receivedMessage.asObservable();

    constructor(private httpClient: HttpClient) {
        this.init();
    }

    private init() {
        this.connection = new signalR.HubConnectionBuilder()
            .withUrl('https://localhost:44389/chatsocket')
            .configureLogging(signalR.LogLevel.Information)
            .build();
        this.connection.onclose(async () => {
            await this.start();
        });
        this.connection.on("ReceiveMessage", (message) => {
            console.log(message);
            this.receivedMessage.next(message)
        });
    }

    public async start() {
        try {
            await this.connection.start();
            console.log('chat started')
        }
        catch (err) {
            console.log(err);
            setTimeout(() => this.start(), 5000);
        }
    }

    public sendMessage(message: Message) {
        this.connection.send("newMessage", message)
            .then(() => { });
    }
}