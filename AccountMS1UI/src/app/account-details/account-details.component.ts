import { Component, OnInit } from '@angular/core';
import { Account } from '../model/account';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { AccountService } from '../services/account.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {

  public userId;
  public flag : boolean = false;
  public errormsg : String;
  public account : Account = null;

  constructor(private accountService : AccountService,private route : ActivatedRoute){}
  
  ngOnInit(): void {

      this.route.paramMap.subscribe((params : ParamMap) => {
        let id1= parseInt(params.get('id'));
        this.userId = id1;
      });

      console.log(this.userId);
      let result : Observable<Account> =this.accountService.getAccount(this.userId); 
      console.log(result);
      result.subscribe((account:Account)=>{
        console.log(account);
        this.account=account;
        console.log(this.account);
        // if(this.account.accountBalance==null){
        //   this.account.accountBalance=0.0;
        //   console.log(this.account.accountBalance);
        // }
      },
      err=>{
        this.flag = true;
        console.log("err="+err);
        this.errormsg = err.error;
      } );
      
  }

}
