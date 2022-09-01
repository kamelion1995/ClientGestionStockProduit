import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produit } from './produit';

@Injectable({
  providedIn: 'root'
})
export class ServiceproduitService {

  private baseUrl="http://localhost:8081/api/produit"

  constructor(private http:HttpClient) { }

getProduit(): Observable<any>{
    return this.http.get<any>(`${this.baseUrl}`);
  }

  addProduit(produit:Produit):Observable<any>{
    return this.http.post<any>(`${this.baseUrl}`,produit);
  }

updateProduit(id:number,produit:Produit):Observable<Object>{
  return this.http.put(`${this.baseUrl}/${id}`,produit);
}

deleteProduit(id:number):Observable<Object>{
  return this.http.delete(`${this.baseUrl}/${id}`);
}

getProduitById(id:number):Observable<Produit>{
  return this.http.get<Produit>(`${this.baseUrl}/${id}`);
}
}
