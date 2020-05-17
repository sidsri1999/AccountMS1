import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-user-front',
  templateUrl: './user-front.component.html',
  styleUrls: ['./user-front.component.css']
})
export class UserFrontComponent implements OnInit {

  public userId;
  constructor(private router : Router, private route : ActivatedRoute ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params : ParamMap) => {
      let id1= parseInt(params.get('id'));
      console.log(id1);
      this.userId=id1;
    });
  }

  showHome(){
    this.router.navigate(['home'], {relativeTo : this.route})
  }

  showUser(){
    this.router.navigate(['userdetails',{ id : this.userId}], {relativeTo : this.route})
  }

  showAccount(){
    this.router.navigate(['accountdetails',{ id : this.userId}], {relativeTo : this.route})
  }

  addMoney(){
    this.router.navigate(['addmoney',{ id : this.userId}], {relativeTo : this.route})
  }

  sendMoney(){
    this.router.navigate(['sendmoney',{ id : this.userId}], {relativeTo : this.route})
  }

  

}
