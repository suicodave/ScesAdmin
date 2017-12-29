import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { apiUrl, apiHeaders } from '../interfaces/global';

@Injectable()
export class ComelecService {

  constructor(private authService: AuthService, private http: HttpClient) { }

  getComelecs(items = 15, orderBy = 'id', orderValue = 'desc') {
    const params = new HttpParams()
      .set('items', items.toString())
      .set('orderBy', orderBy)
      .set('orderValue', orderValue);
    return this.http.get(apiUrl + 'comelecs', {
      headers: apiHeaders.append('Authorization', `Bearer ${this.authService.checkToken()}`),
      params: params
    });
  }

  getDeletedComelecs(items = 15, orderBy = 'id', orderValue = 'desc') {
    const params = new HttpParams()
      .set('items', items.toString())
      .set('orderBy', orderBy)
      .set('orderValue', orderValue);
    return this.http.get(apiUrl + 'comelecs/trashed/index', {
      headers: apiHeaders.append('Authorization', `Bearer ${this.authService.checkToken()}`),
      params: params
    });
  }

  deleteComelec(id: number) {
    return this.http.delete(apiUrl + `comelecs/${id}`, {
      headers: apiHeaders.append('Authorization', `Bearer ${this.authService.checkToken()}`),

    });
  }

  restoreComelec(id: number) {

    return this.http.put(apiUrl + `comelecs/trashed/${id}`, {}, {
      headers: apiHeaders.append('Authorization', `Bearer ${this.authService.checkToken()}`),
    });
  }

  registerComelec(firstname: string, middlename: string, lastname: string, email: string, password: string) {

    const body = {
      first_name: firstname,
      middle_name: middlename,
      last_name: lastname,
      email: email,
      password: password
    };
    return this.http.post(apiUrl + `comelecs`, body, {
      headers: apiHeaders.append('Authorization', `Bearer ${this.authService.checkToken()}`)
    });
  }

}
