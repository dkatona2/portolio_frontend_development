import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { BlogComponent } from "./blog/blog.component";
import { LoginComponent } from "./login/login.component";

// Import required Angular Material modules
import { MatCardModule } from "@angular/material/card";
import {MatFormFieldModule, MatLabel} from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import {AuthService} from "./auth.service";
import {BlogService} from "./blog.service";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {CommonModule} from "@angular/common";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ToolbarComponent,
    BlogComponent,
    LoginComponent,
    // ... other components
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    CommonModule
    // ... other modules
  ],
  providers: [
    AuthService,
    BlogService
    // ... other services you provide
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
