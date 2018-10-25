import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../services/users.service';
import { User } from '../../../models/user';
import { ApiResponse } from '@models/api-response';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  users: User[];

  constructor(private usersCtrl: UsersService) { }

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers(): void {
    this.usersCtrl.getAll()
      .subscribe((res: ApiResponse) => {
        this.users = res.payload;
      });
  }
}
