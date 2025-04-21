import { Component } from '@angular/core';
import { Panier } from '../core/models/panier';
import { PanierService } from '../services/panier.service';


@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent {
  panier: Panier;
  router: any;
  

  constructor(private panierService: PanierService) {
    
    this.panier = this.panierService.getPanier();
  }

  getTotalPrice(): number {
    return this.panierService.getTotalPrice();
  }

  savePanier(): void {
    this.panierService.savePanier().subscribe(() => {
      alert('Panier sauvegardé !');
      this.panierService.clearPanier();
      this.router.navigate(['/commande']);  // Redirection vers /commande

    });
  }
}
