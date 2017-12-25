import { Injectable } from '@angular/core';
import { apiHeaders, apiUrl } from '../interfaces/global';
import { AuthService } from './auth.service';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class SchoolYearService {

  constructor(private authService: AuthService, private http: HttpClient) { }

  baseMxLength = 4;

  getSchoolYears(items = 15, orderBy = 'id', orderValue = 'desc') {
    const params = new HttpParams()
      .set('items', items.toString())
      .set('orderBy', orderBy)
      .set('orderValue', orderValue);
    return this.http.get(apiUrl + 'school_years', {
      headers: apiHeaders.append('Authorization', `Bearer ${this.authService.checkToken()}`),
      params: params
    });
  }

  addSchoolYear(base: number) {
    const body = {
      base: base
    };
    return this.http.post(apiUrl + 'school_years', body, {
      headers: apiHeaders.append('Authorization', `Bearer ${this.authService.checkToken()}`)
    });
  }

  updateSchoolYear(base: number, id: number) {

    const body = {
      base: base
    };
    return this.http.put(apiUrl + `school_years/${id}`, body, {
      headers: apiHeaders.append('Authorization', `Bearer ${this.authService.checkToken()}`)
    });
  }

  deleteSchoolYear(id: number) {
    return this.http.delete(apiUrl + `school_years/${id}`, {
      headers: apiHeaders.append('Authorization', `Bearer ${this.authService.checkToken()}`),

    });
  }

  getDeletedSchoolYears(items = 15, orderBy = 'id', orderValue = 'desc') {
    const params = new HttpParams()
      .set('items', items.toString())
      .set('orderBy', orderBy)
      .set('orderValue', orderValue);
    return this.http.get(apiUrl + 'school_years/trashed/index', {
      headers: apiHeaders.append('Authorization', `Bearer ${this.authService.checkToken()}`),
      params: params
    });
  }

  restoreSchoolYear(id: number) {

    return this.http.put(apiUrl + `school_years/trashed/${id}`, {}, {
      headers: apiHeaders.append('Authorization', `Bearer ${this.authService.checkToken()}`),
    });
  }

  getActiveSchoolYear(items = 15, orderBy = 'id', orderValue = 'desc') {
    const params = new HttpParams()
      .set('items', items.toString())
      .set('orderBy', orderBy)
      .set('orderValue', orderValue);
    return this.http.get(apiUrl + 'school_years/active/index', {
      headers: apiHeaders.append('Authorization', `Bearer ${this.authService.checkToken()}`),
      params: params
    });
  }

  setActiveSchoolYear( id: number) {

    const body = {
    };
    return this.http.put(apiUrl + `school_years/active/${id}`, body, {
      headers: apiHeaders.append('Authorization', `Bearer ${this.authService.checkToken()}`)
    });
  }

}
