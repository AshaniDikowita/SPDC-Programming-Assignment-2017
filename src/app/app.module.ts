import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { MakeReservationsComponent } from './make-reservations/make-reservations.component';
import { HomePageComponent } from './home-page/home-page.component';
import { OnlineOrdersComponent } from './online-orders/online-orders.component';
import { OnlineComponent } from './online/online.component';


const routes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'signup', component: SignUpPageComponent },
  { path: 'makereservations', component: MakeReservationsComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'onlineOrders', component: OnlineOrdersComponent },
  { path: 'placeOrder', component: OnlineComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    SignUpPageComponent,
    MakeReservationsComponent,
    HomePageComponent,
    OnlineOrdersComponent,
    OnlineComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
