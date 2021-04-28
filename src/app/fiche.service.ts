import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const url='http://localhost:8060/api/fiche';
const urlPost='http://localhost:8060/api/fiches';

const headers = new HttpHeaders()
            .set('Access-Control-Allow-Origin', '*');
@Injectable({
  providedIn: 'root'
})
export class FicheService {

  constructor(private http: HttpClient) { }
  getfiches(): Observable<any>{
    return this.http.get(url);
  }
  create(data: any): Observable<any> {
    console.log("data inside create fiche : "+JSON.stringify(data));
    return this.http.post(urlPost, data);
  }

}
