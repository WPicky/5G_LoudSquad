import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ConversationsService } from '@services/conversations.service';
import { ApiResponse } from '@models/api-response';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  messages;

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private conversationsService: ConversationsService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log('id', params.id);
      this.getMessages(params.id);
    });
  }

  getMessages(conversationId): void {
    this.conversationsService.getMessages(conversationId, 30)
      .subscribe((res: ApiResponse) => {
        this.messages = res.payload;
        console.log('ok fetched messages', this.messages);
      });
  }
}
