import { Routes } from '@angular/router';
import {MainPageComponent} from "./main-page/main-page.component";
import {BlogComponent} from "./blog/blog.component";
import {LoginComponent} from "./login/login.component";

export const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'login', component: LoginComponent },
  // Define other routes
];
