import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  constructor(private http: HttpClient,private _router:Router) { }

  
  getProduct(){
    return this.http.get<any>("https://localhost:44308/api/Product")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}