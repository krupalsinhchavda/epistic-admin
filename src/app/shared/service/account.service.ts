import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private apiUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  onsubmit(data: any): Observable<any> {
    return this.http.post(this.apiUrl + '/your end point goes here', data);
  }

}
