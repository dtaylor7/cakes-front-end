import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

import { Cake } from './cake';

@Injectable({
  providedIn: 'root'
})
export class CakesService {
  private url = "http://localhost:3000/cakes/";

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Cake[]> {
    return this.httpClient.get<Cake[]>(this.url)
  }

  get(id): Observable<Cake> {
    return this.httpClient.get<Cake>(this.url + id)
  }
}