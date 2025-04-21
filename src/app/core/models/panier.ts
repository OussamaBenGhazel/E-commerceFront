import { Produit } from './produit';

export interface Panier {
  id: number;
  owner: string;
  produits: Produit[];
}
