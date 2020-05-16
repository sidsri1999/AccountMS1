import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
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

  constructor(private accountService : AccountService,private route : ActivatedRoute) {
  }
  public account : Account = null;
  ngOnInit(): void {

      this.route.paramMap.subscribe((params : ParamMap) => {
        let id1= parseInt(params.get('id'));
        this.userId = id1;
      });

      console.log(this.userId);
      let result : Observable<Account> =this.accountService.getAccount(this.userId); 
      console.log(result);
      result.subscribe((account:Account)=>{
        this.account=account;
      },
      err=>{
        this.flag = true;
        console.log("err="+err);
        this.errormsg = err.error;
      } );
      
  }

}
