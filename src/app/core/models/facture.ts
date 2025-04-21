import { Commande } from './commande';

export enum StatusFacture {
  PAYE = 'PAYE',
  EN_ATTENTE = 'EN_ATTENTE',
  ANNULEE = 'ANNULEE'
}

export class Facture {
  id?: number;
  montantTotal: number;
  dateFacture: Date;
  status: StatusFacture;
  commande: Commande;

  constructor(
    montantTotal: number,
    dateFacture: Date,
    status: StatusFacture,
    commande: Commande,
    id?: number
  ) {
    this.id = id;
    this.montantTotal = montantTotal;
    this.dateFacture = dateFacture;
    this.status = status;
    this.commande = commande;
  }
}
