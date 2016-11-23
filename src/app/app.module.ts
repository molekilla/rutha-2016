import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LayoutComponent } from './layout'
import { IndexComponent } from './main/index';
import { SignupComponent } from './main/signup';
import { LoginComponent } from './main/login';
import { DashboardComponent } from './main/dashboard';
import { USER_SERVICE_PROVIDER } from './common/services/UserServiceProvider';


const appRoutes: Routes = [
  { path: '', component: IndexComponent },
  { path: '/main', component: IndexComponent },
  { path: '/login/:action', component: LoginComponent },
  { path: '/signup', component: SignupComponent },
  { path: '/dashboard', component: DashboardComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
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
  ]
})
export class AppModule { }
