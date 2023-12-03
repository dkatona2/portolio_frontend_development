import {Component} from '@angular/core';
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button'
import {AuthService} from "../auth.service";
import {FormsModule} from "@angular/forms";
import {Router, RouterModule} from "@angular/router";
import { LoginCredentials } from './login-credentials.model';

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
    LoginCredentials
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  model: any = {};

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService.signin(this.model).subscribe(
      response => {
        // Assuming the response contains a token
        localStorage.setItem('token', response.token);
        // Redirect to /blog
        this.router.navigate(['/blog']);
      },
      error => {
        // Handle error response
        console.error(error);
      }
    );
  }

}
