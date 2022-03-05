import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ChatService } from '../services/chat.service';
import { Message } from '../model/message';
import { MessageType } from '../model/message-type';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  messages: Message[] = [];
  nameInput: string;
  messageInput: string;

  constructor(
    private chatService: ChatService,
    private changeDetector: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.chatService.onReceivedMessage
      .subscribe(m => {
        this.messages.push(m);
        this.changeDetector.detectChanges();
      })
    this.chatService.start();
  }

  send() {
    let message: Message = { content: this.messageInput, sender: this.nameInput, type: MessageType.out };
    this.chatService.sendMessage(message);
  }
}
