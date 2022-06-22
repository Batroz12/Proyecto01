import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Auto } from '../interfaces/auto';

@Injectable({
  providedIn: 'root'
})
export class ApiCService {

  constructor(
    private http: HttpClient
  ) { }

  getProductos(){
    const datos = this.http.get<Auto[]>('http://localhost:3500/api/v1/autos');
    console.log(datos);
    return datos;
  }
}
