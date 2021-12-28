import { MessageType } from '../model/message-type'

export class Message {
    public sender: string;
    public content: string;
    public type: MessageType;
}