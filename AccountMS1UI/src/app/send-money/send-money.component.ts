import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { ParamMap, ActivatedRoute } from '@angular/router';
import { Transaction } from '../model/transaction';
import { Account } from '../model/account';
import { Observable } from 'rxjs';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-send-money',
  templateUrl: './send-money.component.html',
  styleUrls: ['./send-money.component.css']
})
export class SendMoneyComponent implements OnInit {

  accountService:AccountService;
  transaction : Transaction = null;
  account : Account = null;
  
  public userId;
  constructor(accountService : AccountService, private route : ActivatedRoute) {
        this.accountService = accountService;
  }

  

  allUserId:Array<number>=[];

  public id;
  public errormsg:String;
  public flag:boolean = false;
  public amount;

  ngOnInit(): void {

    this.route.paramMap.subscribe((params : ParamMap) => {
      let id1= parseInt(params.get('id'));
      this.userId = id1;
    });

  }

  sendMoney(form:any){
        let details=form.value;
        let recieverAccountId = details.recieverAccountId;
        let amount=details.amount;
        this.transaction=new Transaction();
        this.transaction.recieverAccountId=recieverAccountId;
        this.transaction.amount = amount;

        let result:Observable<Account>=this.accountService.sendMoney(this.userId,this.transaction); 
        result.subscribe((account:Account)=>{
          this.account=account;
        },
        error =>{
          this.flag=true;
          console.log(error);
          this.errormsg = error.error;
          console.log(this.errormsg);
        }
        );
        form.reset();
        
      }

}
