import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginModel, LoginResponse } from '../models/employee-model';

@Injectable({
  providedIn: 'root',
})
export class Auth {

  private baseURL = "https://localhost:7148/api/Auth/"; 
  
  constructor(private http : HttpClient){}

    Login(loginData : LoginModel) : Observable<LoginResponse>{
        return this.http.post<LoginResponse>(`${this.baseURL}Login`,loginData); 
      }

      Logout(){
        localStorage.removeItem('token');
      }
  
}
