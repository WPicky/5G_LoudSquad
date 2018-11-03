import { Component, OnInit } from '@angular/core';
import { Conversation } from '@models/conversation';
import { ApiResponse } from '@models/api-response';
import { ConversationsService } from '@services/conversations.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'conversations-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  conversations: Conversation[];
  filteredConversations: Conversation[];

  constructor(
    private conversationService: ConversationsService,
    private router: Router,
    public snackBar: MatSnackBar,
  ) { }

  ngOnInit() {
    this.getAllConversations();

    this.conversationService.currentConversationsList.subscribe(list => {
      this.conversations = list;
      this.filteredConversations = list;
    });
  }

  getAllConversations(): void {
    this.conversationService.getAll()
      .subscribe((res: ApiResponse) => {
        this.conversationService.changeCurrentConversationsList(res.payload);
        this.filteredConversations = res.payload;
        // this.conversations = res.payload;
      });
  }

  showConversation(conv) {
    this.conversationService.changeCurrentConversation(conv);
    this.router.navigate(['/conversation', conv.id]);
  }

  deleteConversation(id) {
    const data = {
      discussionId: id,
      force: true,
    };
    this.conversationService.leave(data)
      .subscribe((res: ApiResponse) => {
        console.log(res);
        this.snackBar.open(res.description, '', {
          duration: 3000,
        });
      });
  }
}
