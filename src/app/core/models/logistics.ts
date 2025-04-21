export interface Shipment {
    id: number;
    trackingNumber: string;
    carrier: string;
    status: string;
    destination: string;
    shipmentDate: string;
    estimatedDeliveryDate: string | null;
  }
  