import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat/chat.component';
import { ChatExample1RoutingModule } from './chat-example1.routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ChatService } from './services/chat.service';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ChatComponent],
  imports: [
    ChatExample1RoutingModule,
    CommonModule,
    FormsModule
  ],
  providers: [
    ChatService
  ]
})
export class ChatExample1Module { }
