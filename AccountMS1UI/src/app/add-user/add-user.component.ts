import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../model/user';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  userService:UserService;

  constructor(userService : UserService) {
    this.userService = userService;
  }

  public flag : boolean = false;
  public errormsg : String ;
  addUserData : User = null;
  addedUser : User = null;

  ngOnInit(): void {
  }

  addUser(form:any){
        let details=form.value;
        let userName=details.name;
        let password=details.password;
        let phoneNumber=details.phone; 
        this.addUserData=new User();
        this.addUserData.userName = userName;
        this.addUserData.password = password;
        this.addUserData.phoneNumber = phoneNumber;
        this.addedUser=null;
        this.flag=false;
       
        let result=this.userService.addUser(this.addUserData); 
        result.subscribe((user:User)=>{
          this.addedUser=user;
          console.log(this.addedUser);
        },
        err=>{
          this.flag = true;
          console.log("err="+err);
          this.errormsg="User Already Exists!";
          console.log("Hello" + this.errormsg);

        } );
        form.reset();
        
      }

}
