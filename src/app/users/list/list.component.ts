import { Component, OnInit } from '@angular/core';
import { UsersService } from '@app/services/users.service';
import { User } from '@app/models/user';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
    private users: User[];

    constructor(private usersCtrl: UsersService) { }

    ngOnInit() {
        console.log('hey');
        this.users = this.usersCtrl.getAll();
    }

}
