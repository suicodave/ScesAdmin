import { Injectable } from '@angular/core';
import { apiHeaders, apiUrl } from '../interfaces/global';
import { AuthService } from './auth.service';
import { HttpClient, HttpParams } from '@angular/common/http';
@Injectable()
export class RegistrarService {

  constructor(private authService: AuthService, private http: HttpClient) { }

  getRegistrars(items = 15, orderBy = 'id', orderValue = 'desc') {
    const params = new HttpParams()
      .set('items', items.toString())
      .set('orderBy', orderBy)
      .set('orderValue', orderValue);
    return this.http.get(apiUrl + 'registrars', {
      headers: apiHeaders.append('Authorization', `Bearer ${this.authService.checkToken()}`),
      params: params
    });
  }

  deleteRegistrar(id: number) {
    return this.http.delete(apiUrl + `registrars/${id}`, {
      headers: apiHeaders.append('Authorization', `Bearer ${this.authService.checkToken()}`),

    });
  }
  getDeletedRegistrars(items = 15, orderBy = 'id', orderValue = 'desc') {
    const params = new HttpParams()
      .set('items', items.toString())
      .set('orderBy', orderBy)
      .set('orderValue', orderValue);
    return this.http.get(apiUrl + 'registrars/trashed/index', {
      headers: apiHeaders.append('Authorization', `Bearer ${this.authService.checkToken()}`),
      params: params
    });
  }

  restoreRegistrar(id: number) {

    return this.http.put(apiUrl + `registrars/trashed/${id}`, {}, {
      headers: apiHeaders.append('Authorization', `Bearer ${this.authService.checkToken()}`),
    });
  }

  registerRegistrar(firstname: string, middlename: string, lastname: string, email: string, password: string) {

    const body = {
      first_name: firstname,
      middle_name: middlename,
      last_name: lastname,
      email: email,
      password: password
    };
    return this.http.post(apiUrl + `registrars`, body, {
      headers: apiHeaders.append('Authorization', `Bearer ${this.authService.checkToken()}`)
    });
  }

}
