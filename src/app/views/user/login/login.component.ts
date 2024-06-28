import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private authService: AuthService, private router: Router){}

  email: string = '';
  password: string = '';

  login() {

    if (this.email.trim().length && this.password.trim().length)  {

      this.authService.login(this.email, this.password)
      .then(response => {

        this.router.navigate(['/']);
      })
      .catch(error =>   {

        alert('Login incorreto!');
      });
    }
  }
}
