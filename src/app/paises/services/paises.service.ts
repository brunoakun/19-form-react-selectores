import { IPaisMini, IPaisBorders } from './../interfaces/paises';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  // Propiedades
  private urlApi: string = 'https://restcountries.com/v3.1';
  private _regiones: string[] = ['africa', 'america', 'europe', 'asia', 'oceania'];

  // Getters & Setters
  get regiones(): string[] {
    return ([...this._regiones]);
  }

  // Constructor
  constructor(private http: HttpClient) { }

  // Métodos
  getPaisesPorRegion(region: string): Observable<IPaisMini[]> {
    return (this.http.get<IPaisMini[]>(`${this.urlApi}/region/${region}?fields=name,cca3`))
  }

  getPaisPorCodigo(codPais: string): Observable<IPaisBorders | null> {
    // Si no se pasa codPais, devolvemos un observable nulo
    if (!codPais) return of(null);
    return this.http.get<IPaisBorders>(`${this.urlApi}/alpha/${codPais}?fields=borders,name,cca3`)
  }
 

}
