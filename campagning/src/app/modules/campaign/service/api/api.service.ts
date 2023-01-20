import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  boto(value:any) {
    this.http.post("http://localhost:6000/bot/form/:id",value).subscribe();

}
}