import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Panier } from '../core/models/panier';
import { Produit } from '../core/models/produit';

@Injectable({
  providedIn: 'root'
})
export class PanierService {
  private apiUrl = 'http://localhost:8065/panier';
  private panier: Panier = { id: 0, owner: 'Utilisateur', produits: [] }; // Panier local

  constructor(private http: HttpClient) {}

  // Ajouter un produit au panier local
  addToPanier(produit: Produit): void {
    if (!this.panier.produits.find(p => p.id === produit.id)) {
      this.panier.produits.push(produit);
    }
  }

  // Obtenir le panier local
  getPanier(): Panier {
    return this.panier;
  }

  // Calculer le total du panier
  getTotalPrice(): number {
    return this.panier.produits.reduce((total, produit) => total + produit.price, 0);
  }

  // Sauvegarder le panier dans le backend
  savePanier(): Observable<any> {
    const panierDto = {
      produits: this.panier.produits.map(p => ({ id: p.id })) // On n'envoie que les IDs des produits
    };
    return this.http.post<any>(`${this.apiUrl}/addPanier`, panierDto);
  }

  // Vider le panier
  clearPanier(): void {
    this.panier.produits = [];
  }

// Dans PanierService
getCartItemCount(): number {
  return this.panier.produits.length;
}

getPanierById(id: number): Observable<Panier> {
  return this.http.get<Panier>(`${this.apiUrl}/getPanier/${id}`);
}


removeFromCart(productId: number): void {
  this.panier.produits = this.panier.produits.filter(p => p.id !== productId);
}
}
