import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Transaction } from '../model/transaction';
import { Account } from '../model/account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  baseEmployeeUrl="http://localhost:8080/users";
  client : HttpClient;
  
  constructor( client : HttpClient ) { 
    this.client = client;
  }

  getAccount(userId): Observable<Account>{
    console.log(userId);
    let url=this.baseEmployeeUrl+"/"+userId+"/account";

    let result:Observable<Account>= this.client.get<Account>(url);
    console.log(result);
    return result;
  }

  addMoney(userId, transaction:Transaction): Observable<Account>{
    console.log(userId);
    let url=this.baseEmployeeUrl+"/"+userId+"/account/addmoney";

    let result:Observable<Account>= this.client.put<Account>(url,transaction);
    console.log(result);
    return result;
  }

  sendMoney(userId, transaction:Transaction): Observable<Account>{
    console.log(userId);
    let url=this.baseEmployeeUrl+"/"+userId+"/account/sendmoney";

    let result:Observable<Account>= this.client.put<Account>(url,transaction);
    console.log(result);
    return result;
  }
  
}
