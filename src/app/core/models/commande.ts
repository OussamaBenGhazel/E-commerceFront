export class Commande {
    id?: number;
    orderNumber: string;
    orderDate: Date;
    totalAmount: number;
  
    constructor(
      orderNumber: string,
      orderDate: Date,
      totalAmount: number,
      id?: number
    ) {
      this.id = id;
      this.orderNumber = orderNumber;
      this.orderDate = orderDate;
      this.totalAmount = totalAmount;
    }
  }
  