import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetUserService {

  constructor(private http: HttpClient) { }
  userLinkLogIn = 'http://localhost:3000/logIn';
  userLinkSignUp = 'http://localhost:3000/createUser';
  getUser(): Observable<any> {
    return this.http.get<any>(this.userLinkLogIn);
  }
  sendLogIn(data): any {
    return this.http.post(this.userLinkLogIn, data);
  }
  sendSignUp(data) {
    return this.http.post(this.userLinkSignUp, data);
  }
}
