import { HttpHeaders } from '@angular/common/http';


export const apiUrl = 'http://192.168.1.102:5000/api/';

export const apiHeaders = new HttpHeaders({
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json',
    'Accept': 'application/json'
});
