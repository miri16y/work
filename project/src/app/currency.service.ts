import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  baseUrl = 'https://localhost:44301/Currency/';

  constructor(private http : HttpClient) { }

  getAll() {
    return this.http.get(`${this.baseUrl}`).pipe(
      map((res: any) => {
        return res;
      })
    );
    
}
}
