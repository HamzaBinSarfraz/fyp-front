import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
// tslint:disable-next-line:class-name
export class users {

  constructor(private http: HttpClient) { }

  // Post Api Method
  post(api: string, data: any) {
    return this.http.post<any>(api, data, this.getHeaders());
  }

  // Get Api Method
  get(api: string) {
    return this.http.get<any>(api, this.getHeaders());
  }

  getOne(api: string, id: string) {
    return this.http.get<any>(api + '/' + id);
  }

  getOnestudent(id: string) {
    return this.http.get<any>(environment.studinfo + '/' + id, this.getHeaders());
  }

  updateOnestudent(id: string, data: any) {
    return this.http.put<any>(environment.studinfo + '/' + id, data, this.getHeaders());
  }

  getOnecirruclum(id: string) {
    return this.http.get<any>(environment.Curriculum + '/' + id, this.getHeaders());
  }

  updateOnecirruclum(id: string, data: any) {
    return this.http.put<any>(environment.Curriculum + '/' + id, data, this.getHeaders());
  }

  updatePassword(id: string, data: any) {
    return this.http.put<any>(environment.login + '/' + id, data, this.getHeaders());
  }

  delete(api: string, id: string) {
    return this.http.delete<any>(api + '/' + id, this.getHeaders());
  }

  deleteStudent(api: string, id: string) {
    return this.http.delete<any>(api + '/' + id, this.getHeaders());
  }
  // Headers Method
  getHeaders() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + (localStorage.getItem('token'))
        //  ? localStorage.getItem('token') : ''
      })
    };
  }

  handleError(errorType, user) {

  }
}
