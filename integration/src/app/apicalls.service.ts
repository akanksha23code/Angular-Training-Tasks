import { Injectable, Pipe } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApicallsService {

  constructor(private httpclient:HttpClient) { 
  }

  apiurl='http://localhost:3000/users/signin'
  getlist(id:number):Observable<any>{
    const url = `${this.apiurl}?id=${id}`;
    return this.httpclient.get<any>(url);
  }
 
}
