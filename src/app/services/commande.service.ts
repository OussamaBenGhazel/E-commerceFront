import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Commande } from '../core/models/commande';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  private baseUrl = 'http://localhost:8065/commande';

  constructor(private http: HttpClient) {}

  // Créer une commande directement (POST /commande/create)
  createCommande(commande: Commande): Observable<Commande> {
    return this.http.post<Commande>(`${this.baseUrl}/create`, commande);
  }

  // Créer une commande à partir d’un panier (POST /commande/create/{panierId})
  createCommandeFromPanier(panierId: number): Observable<Commande> {
    return this.http.post<Commande>(`${this.baseUrl}/create/${panierId}`, {});
  }

  // Obtenir une commande par ID (GET /commande/{id})
  getCommandeById(id: number): Observable<Commande> {
    return this.http.get<Commande>(`${this.baseUrl}/${id}`);
  }

  // Obtenir toutes les commandes (GET /commande/all)
  getAllCommandes(): Observable<Commande[]> {
    return this.http.get<Commande[]>(`${this.baseUrl}/all`);
  }

  // Mettre à jour une commande (PUT /commande/update/{id})
  updateCommande(id: number, commande: Commande): Observable<Commande> {
    return this.http.put<Commande>(`${this.baseUrl}/update/${id}`, commande);
  }

  // Supprimer une commande (DELETE /commande/delete/{id})
  deleteCommande(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/delete/${id}`);
  }
}
