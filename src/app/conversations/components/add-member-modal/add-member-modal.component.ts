import { Component, Inject, OnInit } from '@angular/core';
import { ConversationsService } from '@services/conversations.service';
import { ApiResponse } from '@models/api-response';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { CreateButtonComponent } from '@app/conversations/components/create-button/create-button.component';
import { CreateConversationModalData } from '@models/create-conversation-modal-data';
import { UsersService } from '@services/users.service';
import { User } from '@models/user';

@Component({
  selector: 'app-add-member-modal',
  templateUrl: './add-member-modal.component.html',
  styleUrls: ['./add-member-modal.component.scss']
})
export class AddMemberModalComponent implements OnInit {
  usersList: User[];

  constructor(
    public dialogRef: MatDialogRef<CreateButtonComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CreateConversationModalData,
    private conversationsService: ConversationsService,
    private usersService: UsersService,
  ) { }

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers(): void {
    this.usersService.getAll()
    .subscribe((res: ApiResponse) => {
      this.usersList = res.payload;
    });
  }

  addMembers() {
    const data = {
      discussionId: '',
      newMembers: [],
    };

    this.conversationsService.addMembers(data)
    .subscribe((res: ApiResponse) => {
      console.log(res);
    });
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
