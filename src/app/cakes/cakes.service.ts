import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

import { Cake } from './cake';

@Injectable({
  providedIn: 'root'
})
export class CakesService {
  private url = "http://localhost:3000/cakes/";
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Cake[]> {
    return this.httpClient.get<Cake[]>(this.url);
  }

  get(id): Observable<Cake> {
    return this.httpClient.get<Cake>(this.url + id);
  }

  create(cake): Observable<Cake> {
    return this.httpClient.post<Cake>(this.url, JSON.stringify(cake), this.httpOptions);
  }

  update(cake): Observable<Cake> {
    return this.httpClient.put<Cake>(this.url + cake.id, JSON.stringify(cake), this.httpOptions);
  }
}