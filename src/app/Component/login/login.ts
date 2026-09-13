import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Auth } from '../../services/auth';
import { LoginModel } from '../../models/employee-model';
import { Route,Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnInit {

  loginData! : FormGroup;

  constructor(private auth : Auth, private fb : FormBuilder, private router : Router) {}

  ngOnInit(): void {

    this.loginData = this.fb.group({  
      UserName : ['',Validators.required],
      Password : ['',Validators.required],
    })
  }

  login(){

     this.loginData.markAllAsTouched();
       if(this.loginData.invalid){
      return;
    }

    this.auth.Login(this.loginData.value).subscribe({
      next : (response)=>{
        console.log(response);
        localStorage.setItem('token',response.token);

        alert('Login Successfull');
        this.router.navigate(['/employee-list'])
      },
      error(err) {
        console.error(err);
        alert('Invalid Username Or Password')
      },
    })
  }

}
