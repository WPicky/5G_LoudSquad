import { Component, OnInit } from '@angular/core';
import { ConversationsService } from '@services/conversations.service';
import { ApiResponse } from '@models/api-response';
import { MatDialog } from '@angular/material';
import { CreateModalComponent } from '@app/conversations/components/create-modal/create-modal.component';
import { Conversation } from '@models/conversation';

@Component({
  selector: 'conversation-create-button',
  templateUrl: './create-button.component.html',
  styleUrls: ['./create-button.component.css']
})
export class CreateButtonComponent implements OnInit {
  newConversation: Conversation = {
    id: null,
    label: '',
    status: 'creator',
  };
  newList: Conversation[];

  constructor(
    private conversationsService: ConversationsService,
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
  }

  openCreateConversationModal(): void {
    const dialogRef = this.dialog.open(CreateModalComponent, {
      width: '250px',
      data: {conv: this.newConversation}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.createConversation(result);
      }
    });
  }

  createConversation(data) {
    const postData = {
      discussionId: null,
      discussionName: data.label || null,
      members: data.members || null,
    };

    this.conversationsService.getOrCreate(postData)
      .subscribe((res) => {
        this.conversationsService.changeCurrentConversation(res.payload);

        this.newList = [res.payload];

        this.conversationsService.currentConversationsList.subscribe(list => {
          this.newList = this.newList.concat(list);
        });

        console.log('send new list', this.newList)

        this.conversationsService.changeCurrentConversationsList(this.newList);
      });
  }
}
