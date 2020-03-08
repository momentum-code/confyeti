import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private http: HttpClient) { }

  registerUser(email: string, password: string): Observable<any> {
    const body = { Email: email, Password: password };
    return this.http.post('https://nm3qol4jy1.execute-api.us-east-1.amazonaws.com/Development/users', body);
  }
}
