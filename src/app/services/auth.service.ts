import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { apiUrl } from '../interfaces/global';
import { } from '@angular/common/http/src/headers';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  headers = new HttpHeaders({
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  });


  constructor(private http: HttpClient, private router: Router ) {

  }


  signIn(email, password) {
    const body = {
      email: email,
      password: password
    };
    return this.http.post(apiUrl + 'users/login', body, {
      headers: this.headers,
    });
  }

  signOut() {
    localStorage.removeItem('auth');
    this.router.navigate(['auth']);

  }

  checkToken() {
    return localStorage.getItem('auth');
  }

}
