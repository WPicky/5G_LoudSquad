import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { AuthenticationService } from '@services/authentication.service';
import { UsersService } from '@services/users.service';
import { User } from '@models/user';
import { MatRipple } from '@angular/material';

@Component({
  selector: 'app-authenticated-page',
  templateUrl: './authenticated-page.component.html',
  styleUrls: ['./authenticated-page.component.scss']
})
export class AuthenticatedPageComponent implements OnInit, OnDestroy {
  user: User;
  heartBeatInterval;
  @ViewChild(MatRipple) ripple: MatRipple;

  constructor(
    private authService: AuthenticationService,
    private usersService: UsersService,
  ) { }

  ngOnInit() {
    this.usersService.currentLoggedInUser.subscribe(user => {
      this.user = user;
    });

    this.usersService.changeLoggedInUser(this.usersService.getLoggedIn());

    this.heartBeatInterval = setInterval(() => {
      this.authService.heartBeat().subscribe(res => {
        if (res.code === 'T0002') {
          this.launchRipple();
        } else if (res.code === 'E0003') {
          this.authService.logout();
        }
      });
    }, 5000);
  }

  ngOnDestroy() {
    clearInterval(this.heartBeatInterval);
  }

  launchRipple() {
    const rippleRef = this.ripple.launch({
      persistent: true,
    });

    rippleRef.fadeOut();
  }

  logout() {
    this.authService.logout();
  }
}
