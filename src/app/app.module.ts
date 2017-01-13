import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { LayoutComponent } from './layout'
import { IndexComponent } from './main/index';
import { SignupComponent } from './main/signup';
import { LoginComponent } from './main/login';
import { DashboardComponent } from './main/dashboard';
import {UserService} from './common/services/UserService';
import {UserService2} from './common/services/UserService2';

const appRoutes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'main', component: IndexComponent },
  { path: 'login/:action', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
  ],
  declarations: [
    LayoutComponent,
    IndexComponent,
    DashboardComponent,
    LoginComponent,
    SignupComponent
  ],
  bootstrap: [
    LayoutComponent
  ],
  providers: [
    UserService
  ]
})
export class AppModule { 
  constructor() {
    
  }
}
