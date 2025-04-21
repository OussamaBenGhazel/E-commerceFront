// src/app/services/reclamation.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Reclamation {
  id?: number;
  description: string;
  email: string;
  type: string;
  etat: string;
}

@Injectable({
  providedIn: 'root'
})
export class ReclamationService {
<<<<<<< HEAD
  private apiUrl = 'http://localhost:8099/Rec/reclamation';
=======
  private apiUrl = 'http://localhost:8065/Rec/reclamation';
>>>>>>> e6f18f61c3d6cd2b5d2c79c823868cccfebe16bb

  constructor(private http: HttpClient) {}

  getAll(): Observable<Reclamation[]> {
    return this.http.get<Reclamation[]>(this.apiUrl);
  }

  getById(id: number): Observable<Reclamation> {
    return this.http.get<Reclamation>(`${this.apiUrl}/${id}`);
  }
  add(reclamation: any): Observable<any> {
    return this.http.post(this.apiUrl, reclamation);
  }

  create(reclamation: Reclamation): Observable<Reclamation> {
    return this.http.post<Reclamation>(this.apiUrl, reclamation);
  }

  update(id: number, reclamation: Reclamation): Observable<Reclamation> {
    return this.http.put<Reclamation>(`${this.apiUrl}/${id}`, reclamation);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
