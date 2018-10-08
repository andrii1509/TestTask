import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharingService {

  constructor() { }
  channel: Subject<boolean> = new Subject<boolean>();
}
