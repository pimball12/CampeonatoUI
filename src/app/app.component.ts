import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';
import { Team } from './models/team';
import { AuthService } from './services/auth.service';
import { environment } from 'src/environments/environment';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  currentRoute: string = '';

  constructor(private apiService: ApiService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {

    this.router.events.subscribe(() => {

      this.currentRoute = this.router.url;
      console.log(this.currentRoute)
    });

    if (!!!this.authService.getAuthToken() && this.currentRoute != '/login' && this.currentRoute != '/register')  {

      this.router.navigate(['/login']);
    }
  }

  loggedIn: boolean = !!this.authService.getAuthToken();

  login() {

    this.authService.login('mella.neto@gmail.com', 'password').then(() => {

      this.loggedIn = !!this.authService.getAuthToken();
      console.log(this.authService.getAuthToken(), this.loggedIn);
    });
  };

  logout() {

    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
