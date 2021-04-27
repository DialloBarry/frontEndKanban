import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const urlPost='http://localhost:8060/api/user';
const url='http://localhost:8060/api/user/all';
const headers = new HttpHeaders()
            .set('Access-Control-Allow-Origin', '*');


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor( private http: HttpClient) { }

  getusers(): Observable<any>{
    return this.http.get(url);
  }

  create(data: any): Observable<any> {
    console.log("data inside create user : "+JSON.stringify(data));
    return this.http.post(urlPost, data);
  }


  /*
  deleteCustomer(id: number): Observable {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }*/

}

