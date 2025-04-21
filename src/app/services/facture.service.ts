import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Facture } from '../core/models/facture';

@Injectable({
  providedIn: 'root'
})
export class FactureService {
  private apiUrl = 'http://localhost:8065/factures';

  constructor(private http: HttpClient) {}

  createFacture(facture: Facture): Observable<Facture> {
    return this.http.post<Facture>(this.apiUrl, facture).pipe(
      catchError(this.handleError)
    );
  }

  createFactureFromCommande(commandeId: number): Observable<Facture> {
    return this.http.post<Facture>(`${this.apiUrl}/from-commande/${commandeId}`, {}).pipe(
      catchError(this.handleError)
    );
  }

  updateFacture(id: number, facture: Facture): Observable<Facture> {
    return this.http.put<Facture>(`${this.apiUrl}/${id}`, facture).pipe(
      catchError(this.handleError)
    );
  }

  deleteFacture(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  getFactureById(id: number): Observable<Facture> {
    return this.http.get<Facture>(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  getAllFactures(): Observable<Facture[]> {
    return this.http.get<Facture[]>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'Une erreur est survenue';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Erreur: ${error.error.message}`;
    } else {
      errorMessage = `Code: ${error.status}, Message: ${error.message}`;
      if (error.status === 404) {
        errorMessage = 'Commande ou facture non trouvée';
      }
    }
    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}
