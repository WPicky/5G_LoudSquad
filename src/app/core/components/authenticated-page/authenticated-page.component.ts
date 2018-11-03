import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '@services/authentication.service';

@Component({
  selector: 'app-authenticated-page',
  templateUrl: './authenticated-page.component.html',
  styleUrls: ['./authenticated-page.component.scss']
})
export class AuthenticatedPageComponent implements OnInit {

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
  }
}
