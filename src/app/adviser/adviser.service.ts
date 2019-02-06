import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NextTurn } from '../model/nexTurn.model';
import { Adviser } from '../model/adviser.model';
import { Display } from '../model/display.model';
import { Average } from '../model/average.model';

@Injectable({
  providedIn: 'root'
})
export class AdviserService {

  constructor( private http: HttpClient ) { }

  getlost(): Observable<Display[]> {
    return this.http.get<Display[]>('/api/advisers/lost');
  }

  getlistreport(adviserId: number): Observable<Display[]> {
    return this.http.get<Display[]>('/api/advisers/'+adviserId+'/listReport');
  }

  getaverage(adviserId: number): Observable<Average> {
    return this.http.get<Average>('/api/advisers/'+adviserId+'/average');
  }

  getnextturn(adviserId: number ): Observable<NextTurn> {
    return this.http.get<NextTurn>('/api/advisers/'+adviserId+'/nextTurn');
  }

  getendturn(adviserId: number ): Observable<NextTurn> {
    return this.http.get<NextTurn>('/api/advisers/'+adviserId+'/endTurn');
  }

  getrecalllost(adviserId: number, turnId: number ): Observable<Display> {
    return this.http.get<Display>('/api/advisers/'+adviserId+'/reCallLost/turns/'+turnId);
  }

  getrecall(adviserId: number ): Observable<Display> {
    return this.http.get<Display>('/api/advisers/'+adviserId+'/reCall');
  }

}
