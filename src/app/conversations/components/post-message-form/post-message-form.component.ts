import { Component, Input } from '@angular/core';
import { ConversationsService } from '@services/conversations.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'conversation-post-message-form',
  templateUrl: './post-message-form.component.html',
  styleUrls: ['./post-message-form.component.scss']
})
export class PostMessageFormComponent {
  @Input() conversationId: number;
  message: string;

  constructor(
    private conversationsService: ConversationsService,
    public snackBar: MatSnackBar,
  ) {}

  sendMessage() {
    this.postPreviewMessage();

    const data = {
      discussionId: this.conversationId,
      message: this.message,
    };

    this.conversationsService.postMessage(data)
    .subscribe((res) => {
      if (res.code === 'T0012') {
        this.message = '';
      } else if (res.code === 'E0009') {
        this.showSnack(res.description);
      }
    });
  }

  private postPreviewMessage() {

  }

  private showSnack(message) {
    this.snackBar.open(message, '', {
      duration: 3000,
    });
  }
}
