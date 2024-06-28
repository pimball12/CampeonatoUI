import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private authService: AuthService, private router: Router){}

  name: string = '';
  email: string = '';
  password: string = '';
  password_confirmation: string = '';

  register()  {

    if (this.name.trim().length && this.email.trim().length && this.password.trim().length && this.password_confirmation.trim().length)   {

      this.authService.register(this.name, this.email, this.password, this.password_confirmation)
      .then(response => {

        this.router.navigate(['/']);
      })
      .catch(error =>   {

        alert('erro');
        console.log('erro');
      });
    }
  }
}
