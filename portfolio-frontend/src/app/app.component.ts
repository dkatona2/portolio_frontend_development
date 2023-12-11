import { Component } from '@angular/core';
// Other imports remain the same

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers: [AuthService] // This line is optional. If AuthService is provided in AppModule, it's not needed here
})
export class AppComponent {
  title = 'portfolio-frontend';
}
