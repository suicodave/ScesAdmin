import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { apiHeaders, apiUrl } from '../interfaces/global';
import { AuthService } from './auth.service';
@Injectable()
export class YearLevelService {

  nameMxLength = 8;
  constructor(private http: HttpClient, private authService: AuthService) { }


  getYearLevels(items = 15, orderBy = 'id', orderValue = 'desc') {
    const params = new HttpParams()
      .set('items', items.toString())
      .set('orderBy', orderBy)
      .set('orderValue', orderValue);
    return this.http.get(apiUrl + 'year_levels', {
      headers: apiHeaders.append('Authorization', `Bearer ${this.authService.checkToken()}`),
      params: params
    });
  }

  getDepartments(items = 15, orderBy = 'id', orderValue = 'desc') {
    const params = new HttpParams()
      .set('items', items.toString())
      .set('orderBy', orderBy)
      .set('orderValue', orderValue);
    return this.http.get(apiUrl + 'departments', {
      headers: apiHeaders.append('Authorization', `Bearer ${this.authService.checkToken()}`),
      params: params
    });
  }

  updateYearLevel(colName: string, departmentId: number, id: number) {

    const body = {
      name: colName,
      department_id: departmentId
    };
    return this.http.put(apiUrl + `year_levels/${id}`, body, {
      headers: apiHeaders.append('Authorization', `Bearer ${this.authService.checkToken()}`)
    });
  }

  deleteYearLevels(id: number) {
    return this.http.delete(apiUrl + `year_levels/${id}`, {
      headers: apiHeaders.append('Authorization', `Bearer ${this.authService.checkToken()}`),

    });
  }
  getDeletedYearLevels(items = 15, orderBy = 'id', orderValue = 'desc') {
    const params = new HttpParams()
      .set('items', items.toString())
      .set('orderBy', orderBy)
      .set('orderValue', orderValue);
    return this.http.get(apiUrl + 'year_levels/trashed/index', {
      headers: apiHeaders.append('Authorization', `Bearer ${this.authService.checkToken()}`),
      params: params
    });
  }

  restoreYearLevel(id: number) {

    return this.http.put(apiUrl + `year_levels/trashed/${id}`, {}, {
      headers: apiHeaders.append('Authorization', `Bearer ${this.authService.checkToken()}`),
    });
  }
  addYearLevel(name: string, department: number) {
    const body = {
      name: name,
      department_id: department
    };
    return this.http.post(apiUrl + 'year_levels', body, {
      headers: apiHeaders.append('Authorization', `Bearer ${this.authService.checkToken()}`)
    });
  }

}
