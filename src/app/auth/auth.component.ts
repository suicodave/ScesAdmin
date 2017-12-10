import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm, EmailValidator } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { UserToken } from '../interfaces/user-token';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AuthComponent implements OnInit {
  token = '';
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  authenticate(form: NgForm, isEmailInvalid) {

    if (isEmailInvalid) {

      return false;
    }

    this.authService.signIn(form.value.email, form.value.password)
      .subscribe(
      (res: UserToken) => {
        this.token = res.token;
      },
      (error: HttpErrorResponse) => {
        // console.log(error.error.message);
        // console.log(error.status);


      }

      );

  }

}
