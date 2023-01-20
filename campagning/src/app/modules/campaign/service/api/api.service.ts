import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  

  constructor(private http: HttpClient) {
   
   }

  setCampaign() {
    return this.http.get(
     "localhost:6000/bot/" + "form/:id")
  }

}
