import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { UserFrontComponent } from './user-front/user-front.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { SendMoneyComponent } from './send-money/send-money.component';
import { AddMoneyComponent } from './add-money/add-money.component';


const routes: Routes = [
  {path : '', redirectTo: '/register' , pathMatch: 'full' },
  {path : "register", component : AddUserComponent},
  { path : 'user/:id' ,
    component : UserFrontComponent,
    children : [
      {path : 'userdetails' , component : UserDetailsComponent},
      {path : 'accountdetails' , component : AccountDetailsComponent},
      {path : 'addmoney' , component : AddMoneyComponent},
      {path : 'sendmoney' , component : SendMoneyComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
