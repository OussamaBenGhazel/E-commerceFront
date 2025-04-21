import { Component, OnInit } from '@angular/core';
import { CommandeService } from '../services/commande.service';
import { PanierService } from '../services/panier.service';
import { Commande } from '../core/models/commande';
import { Router } from '@angular/router';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {
  commande?: Commande;
  message: string = '';
  error: string = '';
  totalPrice: number = 0;
  selectedAction: string = 'view';

  constructor(
    private commandeService: CommandeService,
    private panierService: PanierService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.totalPrice = this.panierService.getTotalPrice();
    this.createCommande();
  }

  createCommande(): void {
    const panierId = 1;
    this.commandeService.createCommandeFromPanier(panierId).subscribe({
      next: (data: Commande) => {
        this.commande = data;
        if (this.commande) {
          this.commande.totalAmount = this.totalPrice;
        }
        this.message = 'Commande créée avec succès !';
        console.log('Commande créée:', this.commande);
      },
      error: (err) => {
        console.error('Erreur création commande:', err);
        this.error = 'Erreur lors de la création de la commande.';
      }
    });
  }

  selectAction(action: string): void {
    this.selectedAction = action;
    console.log(`Action sélectionnée : ${action}`);
  }

  goToProductList(): void {
    this.router.navigate(['/produits']);
  }

  goToFacture(): void {
    if (this.commande?.id) {
      console.log('Navigation vers /facture/commande avec commandeId:', this.commande.id);
      this.router.navigate(['/facture/commande', this.commande.id]);
    } else {
      console.error('ID de commande manquant');
      this.error = 'Commande non trouvée.';
    }
  }
}
