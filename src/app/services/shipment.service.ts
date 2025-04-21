import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Shipment } from '../core/models/logistics';

@Injectable({
  providedIn: 'root'
})
export class ShipmentService {

  private baseUrl = 'http://localhost:8098/shipments';  // Backend URL for shipments

  constructor(private http: HttpClient) { }

  // Get all shipments
  getShipments(): Observable<Shipment[]> {
    return this.http.get<Shipment[]>(`${this.baseUrl}`);
  }

  // Get shipment by ID
  getShipmentById(id: number): Observable<Shipment> {
    return this.http.get<Shipment>(`${this.baseUrl}/${id}`);
  }

  // Create a new shipment
  createShipment(shipment: Shipment): Observable<Shipment> {
    return this.http.post<Shipment>(`${this.baseUrl}/add`, shipment);
  }

  // Update an existing shipment
  updateShipment(shipment: Shipment): Observable<Shipment> {
    return this.http.put<Shipment>(`${this.baseUrl}/${shipment.id}`, shipment);
  }

  // Delete a shipment by ID
  deleteShipment(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
