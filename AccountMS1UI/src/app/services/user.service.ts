import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  client:HttpClient ;
  baseEmployeeUrl="http://localhost:8080/users";

  constructor(client:HttpClient ){
    this.client=client;
  }

  addUser(user:User): Observable<User>{
    console.log(user);
    let url=this.baseEmployeeUrl+"/add";

    let result:Observable<User>= this.client.post<User>(url,user);
    console.log(result);
    return result;
  }

  getUser(userId): Observable<User>{
    console.log(userId);
    let url=this.baseEmployeeUrl+"/"+userId;

    let result:Observable<User>= this.client.get<User>(url);
    console.log(result);
    return result;
  }

  

  // getAllUserIds() : Observable<number[]>{
  //   let url = this.baseEmployeeUrl + "/getalluserids";
    
  //   let result:Observable<number[]>=this.client.get<number[]>(url);
  //   return result;
  // }

}