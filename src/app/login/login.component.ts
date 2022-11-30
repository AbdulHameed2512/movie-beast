import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
  
})
export class LoginComponent implements OnInit {
  username =" ";
  password = " ";
  errormsg =" ";
  

  constructor(private auth: AuthService , private router: Router) { }

  ngOnInit(): void {
    
  }

  login(){
    if(this.username.trim().length === 0){
      this.errormsg = "Username is required";
    }
    else if(this.password.trim().length === 0){
      this.errormsg = "Password is required";
    }
    else{
      this.errormsg = "";
      let res = this.auth.login(this.username, this.password);
      if(res === false){
        this.router.navigate(['/Home']);
      }
      if(res === true){
        this.errormsg = 'invalid credentials'
      }
    }

  }
  
}
