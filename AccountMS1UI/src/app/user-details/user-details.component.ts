import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../model/user';
import { ParamMap, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  public id;
  public flag : boolean = false;
  public errormsg : String ;

  constructor(private userService : UserService,private route : ActivatedRoute) {
  }
  user : User;
  ngOnInit(): void {

      this.route.paramMap.subscribe((params : ParamMap) => {
        let id1= parseInt(params.get('id'));
        this.id = id1;
      });

      console.log(this.id);
      let result : Observable<User> =this.userService.getUser(this.id); 
      console.log(result);
        result.subscribe((user:User)=>{
          this.user=user;
        },
        err=>{
          this.flag=true;
          console.log("err="+err);
          this.errormsg = err.error;
          
        } );
  }

}
