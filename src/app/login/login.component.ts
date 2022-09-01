import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from '../app.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
   
    credentials = {
    username: '',
    password: ''


  };

  constructor(private fb: FormBuilder, private appservice:AppService, private router:Router) { }

  ngOnInit(): void {

    this.loginForm = this.fb.group({
      username: ['', Validators.required, Validators.minLength(3)],
      password: ['', Validators.required, Validators.minLength(3)]
    });
  }

  login(){
      this.appservice.authenticate(this.credentials, ()=>{
        this.router.navigateByUrl('/home');
     
      })
  }

}
