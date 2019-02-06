import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Display } from '../model/display.model';

@Injectable({
  providedIn: 'root'
})
export class DisplayService {

  constructor(private http: HttpClient) { }

  getdisplay(): Observable<Display[]> {
    return this.http.get<Display[]>('api/display');
  }
}
