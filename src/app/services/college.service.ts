import { Injectable } from '@angular/core';
import { apiHeaders, apiUrl } from '../interfaces/global';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { College } from '../interfaces/college';

@Injectable()
export class CollegeService {

  nameMxLength = 60;
  nameMnLength = 3;

  headMxLength = 20;
  headMnLength = 2;

  constructor(private http: HttpClient, private authService: AuthService) {
  }

  getColleges(items = 15, orderBy = 'id', orderValue = 'desc') {
    const params = new HttpParams()
      .set('items', items.toString())
      .set('orderBy', orderBy)
      .set('orderValue', orderValue);
    return this.http.get(apiUrl + 'colleges', {
      headers: apiHeaders.append('Authorization', `Bearer ${this.authService.checkToken()}`),
      params: params
    });
  }

  addCollege(colName: string, colHead: string) {
    const body = {
      name: colName,
      head: colHead
    };
    return this.http.post(apiUrl + 'colleges', body, {
      headers: apiHeaders.append('Authorization', `Bearer ${this.authService.checkToken()}`)
    });
  }

  updateCollege(colName: string, colHead: string, id: number) {

    const body = {
      name: colName,
      head: colHead
    };
    return this.http.put(apiUrl + `colleges/${id}`, body, {
      headers: apiHeaders.append('Authorization', `Bearer ${this.authService.checkToken()}`)
    });
  }

  getDeletedColleges(items = 15, orderBy = 'id', orderValue = 'desc') {
    const params = new HttpParams()
      .set('items', items.toString())
      .set('orderBy', orderBy)
      .set('orderValue', orderValue);
    return this.http.get(apiUrl + 'colleges/trashed/index', {
      headers: apiHeaders.append('Authorization', `Bearer ${this.authService.checkToken()}`),
      params: params
    });
  }

  deleteCollege(id) {
    return this.http.delete(apiUrl + `colleges/${id}`, {
      headers: apiHeaders.append('Authorization', `Bearer ${this.authService.checkToken()}`)
    });
  }

  restoreCollege(id) {
    return this.http.put(apiUrl + `colleges/trashed/${id}`, {}, {
      headers: apiHeaders.append('Authorization', `Bearer ${this.authService.checkToken()}`)
    });
  }


}
