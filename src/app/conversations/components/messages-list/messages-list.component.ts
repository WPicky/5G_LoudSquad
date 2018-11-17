import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ConversationsService } from '@services/conversations.service';
import { ApiResponse } from '@models/api-response';
import { Message } from '@models/message';
import { UsersService } from '@services/users.service';
import { User } from '@models/user';

@Component({
  selector: 'conversation-messages-list',
  templateUrl: './messages-list.component.html',
  styleUrls: ['./messages-list.component.scss']
})
export class MessagesListComponent implements OnChanges, OnInit {
  @Input() conversationId: number;
  messagesList: Message[];
  previewMessage: string;
  user: User;

  constructor(
    private conversationsService: ConversationsService,
    private usersService: UsersService,
  ) { }

  ngOnChanges() {
    this.getMessages(30);
  }

  ngOnInit() {
    this.usersService.currentLoggedInUser.subscribe(user => {
      this.user = user;
    });

    this.usersService.changeLoggedInUser(this.usersService.getLoggedIn());

    this.conversationsService.currentPreviewMessage.subscribe(message => this.previewMessage = message);

    setInterval(() => {
      this.getMessages(30);
    }, 3000);
  }

  private getMessages(messagesNumber): void {
    this.conversationsService.getMessages(this.conversationId, messagesNumber)
      .subscribe((res: ApiResponse) => {
        this.conversationsService.changeCurrentPreviewMessage('');
        this.messagesList = (res.payload || {}).messages;
      });
  }
}
