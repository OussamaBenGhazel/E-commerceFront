import { Component, OnInit } from '@angular/core';
import { ShipmentService } from '../../services/shipment.service';
import { Shipment } from '../../core/models/logistics';

@Component({
  selector: 'app-shipment',
  templateUrl: './shipment.component.html',
  styleUrls: ['./shipment.component.css']
})
export class ShipmentComponent implements OnInit {

  shipments: Shipment[] = [];
  newShipment: Shipment = {
    id: 0,
    trackingNumber: '',
    carrier: '',
    status: '',
    destination: '',
    shipmentDate: new Date().toISOString(),
    estimatedDeliveryDate: null
  };
  selectedShipment: Shipment | null = null;

  constructor(private shipmentService: ShipmentService) {}

  ngOnInit(): void {
    this.loadShipments();
  }

  loadShipments() {
    this.shipmentService.getShipments().subscribe(shipments => {
      this.shipments = shipments;
    });
  }

  createShipment() {
    this.shipmentService.createShipment(this.newShipment).subscribe(() => {
      this.loadShipments();
      this.newShipment = {
        id: 0,
        trackingNumber: '',
        carrier: '',
        status: '',
        destination: '',
        shipmentDate: new Date().toISOString(),
        estimatedDeliveryDate: null
      };
    });
  }

  editShipment(shipment: Shipment) {
    this.selectedShipment = { ...shipment };
  }

  updateShipment() {
    if (this.selectedShipment) {
      this.shipmentService.updateShipment(this.selectedShipment).subscribe(() => {
        this.loadShipments();
        this.selectedShipment = null;
      });
    }
  }

  deleteShipment(id: number) {
    this.shipmentService.deleteShipment(id).subscribe(() => {
      this.loadShipments();
    });
  }
}
