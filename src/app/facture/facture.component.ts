import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FactureService } from '../services/facture.service';
import { Facture } from '../core/models/facture';

@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.css']
})
export class FactureComponent implements OnInit {
  facture?: Facture;
  error: string = '';

  constructor(
    private route: ActivatedRoute,
    private factureService: FactureService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    const isCommandeRoute = this.route.snapshot.url.some(segment => segment.path === 'commande');

    console.log('FactureComponent - URL:', this.route.snapshot.url.map(s => s.path).join('/'));
    console.log('FactureComponent - ID:', id, 'IsCommandeRoute:', isCommandeRoute);

    if (isCommandeRoute && id) {
      this.generateFacture(+id);
    } else if (!isCommandeRoute && id) {
      this.loadFacture(+id);
    } else {
      this.error = 'ID manquant dans l\'URL.';
      console.error('ID manquant');
      this.router.navigate(['/produits']);
    }
  }

  generateFacture(commandeId: number): void {
    console.log('Génération facture pour commande ID:', commandeId);
    this.factureService.createFactureFromCommande(commandeId).subscribe({
      next: (data: Facture) => {
        console.log('Facture générée avec succès:', data);
        this.facture = data;
      },
      error: (err) => {
        this.error = `Erreur lors de la génération de la facture: ${err.message}`;
        console.error('Erreur API:', err);
      }
    });
  }

  loadFacture(factureId: number): void {
    console.log('Chargement facture ID:', factureId);
    this.factureService.getFactureById(factureId).subscribe({
      next: (data: Facture) => {
        console.log('Facture chargée:', data);
        this.facture = data;
      },
      error: (err) => {
        this.error = `Erreur lors du chargement de la facture: ${err.message}`;
        console.error('Erreur API:', err);
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/produits']);
  }

  payerFacture() {
    // Logique de paiement ici
    console.log('Paiement de la facture', );
    // Exemple : rediriger vers un service de paiement
  }

}
