import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../model/category.model';
import { Turn } from '../model/turn.model';

@Injectable({
  providedIn: 'root'
})
export class KioskService {

  constructor(private http: HttpClient ) { }

  getcategories(): Observable<Category[]> {
    return this.http.get<Category[]>('/api/categories'); 
  }

  public  getTurn(id: number): Observable<Turn> {
    return this.http.post<Turn>('/api/categories/'+id+'/turns', null);
  }
}
