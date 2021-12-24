import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat/chat.component';
import { ChatExample1RoutingModule } from './chat-example1.routing.module';



@NgModule({
  declarations: [ChatComponent],
  imports: [
    ChatExample1RoutingModule,
    CommonModule
  ]
})
export class ChatExample1Module { }
