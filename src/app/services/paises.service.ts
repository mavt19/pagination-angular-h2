import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class PaisesService {
  // paisesUrl = 'http://localhost:9898/paises?';
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  paisesUrl = 'https://pagination-spring-h2.herokuapp.com/paises?';
  constructor(private httpClient: HttpClient) {}

  public paises(
    page: number,
    size: number,
    order: string,
    asc: boolean
  ): Observable<any> {
    return this.httpClient.post(
      this.paisesUrl + `page=${page}&size=${size}&order=${order}&asc=${asc}`,
      this.httpHeaders
    );
  }
}
