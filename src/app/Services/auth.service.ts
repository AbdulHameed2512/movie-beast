import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private router : Router) { }
  login(username:any ,password:any){
    if(username === "Abdul" && password === 123){
      return true;
    }else{
      return false;
    }

  }
  logout(){
    this.router.navigate(['Login']);
  }
  
}
