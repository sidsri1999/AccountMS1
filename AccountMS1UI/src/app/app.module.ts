import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddUserComponent } from './add-user/add-user.component';
import { HttpClientModule } from '@angular/common/http';
import { UserFrontComponent } from './user-front/user-front.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { AddMoneyComponent } from './add-money/add-money.component';
import { SendMoneyComponent } from './send-money/send-money.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    UserFrontComponent,
    UserDetailsComponent,
    AccountDetailsComponent,
    AddMoneyComponent,
    SendMoneyComponent,
    UserHomeComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
