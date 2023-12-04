import {Component} from '@angular/core';
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button'
import {AuthService} from "../auth.service";
import {FormControl, FormGroup, FormsModule, Validators} from "@angular/forms";
import {Router, RouterModule} from "@angular/router";
import { LoginCredentialsModel } from '../models/login-credentials.model';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    FormsModule,
    RouterModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  model: LoginCredentialsModel = {email: '', password: ''};

  constructor(private authService: AuthService, private router: Router) {
  }

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  onSubmit() {
    if (this.loginForm.valid) {
      const credentials: LoginCredentialsModel = {
        email: this.loginForm.value.username!, // The '!' non-null assertion operator tells TypeScript that this will not be null or undefined
        password: this.loginForm.value.password! // Same here
      };

      this.authService.signin(credentials).subscribe(
        localStorage.setItem('authToken', response.token); // Example, adjust based on actual response

      // Redirect to /blog
      this.router.navigate(['/blog']);
        },
        error => {
          // Handle error response
          // ...
        }
      );
    } else {
      // Handle the case where the form is not valid
      // You can show validation errors or disable the submit button until the form is valid
    }
  }
}
