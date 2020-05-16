import { Component, OnInit } from '@angular/core';
import { Transaction } from '../model/transaction';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Account } from '../model/account';
import { AccountService } from '../services/account.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-money',
  templateUrl: './add-money.component.html',
  styleUrls: ['./add-money.component.css']
})
export class AddMoneyComponent implements OnInit {

  accountService : AccountService ;
  public userId;
  transaction : Transaction = null;
  account : Account;
  public flag : boolean = false;
  public errormsg : String;

  constructor(accountService : AccountService, private route : ActivatedRoute) {
        this.accountService = accountService;
  }

  ngOnInit(): void {

    this.route.paramMap.subscribe((params : ParamMap) => {
      let id1= parseInt(params.get('id'));
      this.userId = id1;
    });

  }

  addMoney(form:any){
        let details=form.value;
        let amount=details.amount;
        this.transaction=new Transaction();
        this.transaction.amount = amount;
        
        
        let result : Observable <Account>=this.accountService.addMoney(this.userId,this.transaction); 
        result.subscribe(( account : Account ) => {
          this.account=account;
        },
        err=>{
          this.flag = true; 
          console.log("err="+err);
          this.errormsg = err.error;
        } );
        form.reset();
        
      }

}