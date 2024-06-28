import { Component } from '@angular/core';
import { ApiService } from './services/api.service';
import { Team } from './models/team';
import { AuthService } from './services/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private apiService: ApiService, private authService: AuthService){}

  loggedIn: boolean = !!this.authService.getAuthToken();

  login() {

    this.authService.login('mella.neto@gmail.com', 'password').then(() => {

      this.loggedIn = !!this.authService.getAuthToken();
      console.log(this.authService.getAuthToken(), this.loggedIn);
    });
  };

  logout()  {

    this.authService.logout();
    this.loggedIn = !!this.authService.getAuthToken();
    console.log(this.authService.getAuthToken(), this.loggedIn);
  }
}
