import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, RouteReuseStrategy, ActivatedRoute } from '@angular/router';
import { NgForm, EmailValidator } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { UserToken } from '../interfaces/user-token';
import { MatSnackBar } from '@angular/material';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AuthComponent implements OnInit {

  redirectTo = '';
  constructor(private router: Router, private route: ActivatedRoute, private authService: AuthService, private snackBar: MatSnackBar) {

    this.route.queryParams
      .filter(params => params.lastVisit)
      .subscribe(
        (params) => {
          this.redirectTo = params.lastVisit;
        }
      );

    const token = this.authService.checkToken();
    if (token != null) {

      this.router.navigate([this.redirectTo]);
    }

  }

  ngOnInit() {
  }

  authenticate(form: NgForm, isEmailInvalid) {

    if (isEmailInvalid) {

      return false;
    }

    this.authService.signIn(form.value.email, form.value.password)
      .subscribe(
      (res: UserToken) => {
        localStorage.setItem('auth', res.token);
        this.router.navigate([this.redirectTo]);
      },
      (error: HttpErrorResponse) => {

        this.snackBar.open(error.error.message, 'Okay', {
          duration: 5000
        });

      }

      );

  }

}
