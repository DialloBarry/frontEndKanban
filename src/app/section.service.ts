import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const url='http://localhost:8060/api/section/all';
const urlPost='http://localhost:8060/api/section';

@Injectable({
  providedIn: 'root'
})
export class SectionService {

  constructor( private http: HttpClient) { }
  getSection(): Observable<any>{
    return this.http.get(url);
  }

  create(data: any): Observable<any> {
    console.log("data inside create fiche : "+JSON.stringify(data));
    return this.http.post(urlPost, data);
  }
}

