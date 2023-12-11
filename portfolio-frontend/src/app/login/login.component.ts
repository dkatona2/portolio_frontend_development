import {Component} from '@angular/core';
import {AuthService} from "../auth.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',

  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  });

  constructor(private authService: AuthService, private router: Router) {
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const email = this.loginForm.get('email')?.value;
      const password = this.loginForm.get('password')?.value;

      if (typeof email === 'string' && typeof password === 'string') {
        this.authService.signin({email, password}).subscribe(
          response => {
            localStorage.setItem('authToken', response.token);
            this.router.navigate(['/blog']);
          },
          error => {
            console.error('Login error:', error);
            // Handle error here
          }
        );
      } else {
        console.error('Email or Password is missing');
        // Handle missing email or password here
      }
    } else {
      console.error('Form is not valid');
      // Handle invalid form here
    }
  }
}
