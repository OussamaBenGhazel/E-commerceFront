import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produit } from '../core/models/produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  private apiUrl = 'http://localhost:8065/produit'; // URL de la Gateway

  constructor(private http: HttpClient) {}

 // Correction dans produit.service.ts
getAllProduits(): Observable<Produit[]> {
  return this.http.get<Produit[]>(`${this.apiUrl}/all`); // Changé de getAllProduit à all
}

  addProduit(produit: Produit): Observable<Produit> {
    return this.http.post<Produit>(`${this.apiUrl}/addProduit`, produit);
  }

}
