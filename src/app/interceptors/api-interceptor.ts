import { HttpInterceptorFn,HttpErrorResponse } from '@angular/common/http';
import { throwError,catchError } from 'rxjs';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const apiInterceptor: HttpInterceptorFn = (req, next) => {
  //console.log('API Request :',req.url);

const router = inject(Router);

  const token = localStorage.getItem('token');
  let request = req;

  if(token){
    request = req.clone({
      setHeaders : {
        Authorization: `Bearer ${token}` 
      }
    });
    // return next (clonedRequest);
  }

  return next(request).pipe(
    catchError((error:HttpErrorResponse)=>{
      console.error('API Error : ',error.status, error.message);

      if(error.status === 401 && token){
        localStorage.removeItem('token');

        router.navigate(['/login-page']);
      }

      return throwError(()=> error)
    }
    ))
  
};
