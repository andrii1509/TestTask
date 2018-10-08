import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  content = 'http://localhost:3000/content';
  constructor(
    private http: HttpClient
  ) { }
  getContent(): Observable<any> {
    return this.http.get<any>(this.content);
  }
}
