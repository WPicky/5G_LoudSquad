import { Component, OnInit } from '@angular/core';
import { Conversation } from '@models/conversation';
import { ApiResponse } from '@models/api-response';
import { ConversationsService } from '@services/conversations.service';
import { Router } from '@angular/router';

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
  ) { }

  ngOnInit() {
    this.getAllConversations();
  }

  getAllConversations(): void {
    this.conversationService.getAll()
    .subscribe((res: ApiResponse) => {
      this.conversations = res.payload;
      this.filteredConversations = this.conversations;
    });
  }

  showConversation(id) {
    console.log('go to ', id);
    this.router.navigate(['/conversation', id]);
  }
}
