import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Headers, RequestOptions } from '@angular/http';



@Injectable()
export class MultiuserhandleService {
  private baseUrl = 'http://192.168.2.1:8000/api';
  headers: Headers = new Headers();
  options: any;

  constructor(private http: HttpClient) {

    this.headers.append('enctype', 'multi-part/form-data');
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('X-Requested-With', 'XMLHttpRequest');

    this.options = new RequestOptions({ headers: this.headers });
   }

  multiuserhandleforuser(data) {
    console.log(data)
    return this.http.post(`${this.baseUrl}/multiuserhandleforuser`, data);
  }
  removmultiuserhandle(data) {
    return this.http.post(`${this.baseUrl}/removmultiuserhandle`, data);
  }
}
