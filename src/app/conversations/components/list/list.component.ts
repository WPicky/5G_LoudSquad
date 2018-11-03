import { Component, OnInit } from '@angular/core';
import { Conversation } from '@models/conversation';
import { ApiResponse } from '@models/api-response';
import { ConversationsService } from '@services/conversations.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { environment } from '@env/environment';

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
    private route: ActivatedRoute,
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
      });
  }

  showConversation(conv) {
    this.conversationService.changeCurrentConversation(conv);
    this.router.navigate([{ outlets: { authenticatedRouter: ['conversation', conv.id] } }], {relativeTo: this.route});
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
