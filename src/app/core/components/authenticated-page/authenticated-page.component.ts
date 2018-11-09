import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { AuthenticationService } from '@services/authentication.service';
import { UsersService } from '@services/users.service';
import { User } from '@models/user';
import { MatRipple, MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-authenticated-page',
  templateUrl: './authenticated-page.component.html',
  styleUrls: ['./authenticated-page.component.scss']
})
export class AuthenticatedPageComponent implements OnInit {
  user: User;

  constructor(
    private authService: AuthenticationService,
    private usersService: UsersService,
  ) { }

  ngOnInit() {
    this.usersService.currentLoggedInUser.subscribe(user => {
      this.user = user;
    });

    this.usersService.changeLoggedInUser(this.usersService.getLoggedIn());
  }
}
