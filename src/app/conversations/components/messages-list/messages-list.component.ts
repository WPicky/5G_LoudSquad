import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ConversationsService } from '@services/conversations.service';
import { ApiResponse } from '@models/api-response';
import { Message } from '@models/message';

@Component({
  selector: 'conversation-messages-list',
  templateUrl: './messages-list.component.html',
  styleUrls: ['./messages-list.component.scss']
})
export class MessagesListComponent implements OnChanges, OnInit {
  @Input() conversationId: number;
  messagesList: Message[];

  constructor(private conversationsService: ConversationsService) { }

  ngOnChanges() {
    this.getMessages(30);
  }

  ngOnInit() {
    setInterval(() => {
      this.getMessages(30);
    }, 3000);
  }

  private getMessages(messagesNumber): void {
    this.conversationsService.getMessages(this.conversationId, messagesNumber)
      .subscribe((res: ApiResponse) => {
        this.messagesList = (res.payload || {}).messages;
      });
  }
}
