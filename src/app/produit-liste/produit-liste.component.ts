import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../services/produit.service';
import { PanierService } from '../services/panier.service';
import { CommandeService } from '../services/commande.service';
import { Produit } from '../core/models/produit';
import { Router } from '@angular/router'; // Importer Router

@Component({
  selector: 'app-produit-liste',
  templateUrl: './produit-liste.component.html',
  styleUrls: ['./produit-liste.component.css']
})
export class ProduitListeComponent implements OnInit {
  produits: Produit[] = [];
  showCart = false;
  currentPage = 1;
  itemsPerPage = 6;
  pagedProduits: Produit[] = [];
  totalPages = 1;

  constructor(
    private produitService: ProduitService,
    public panierService: PanierService,
    private commandeService: CommandeService, // Injecter CommandeService
    private router: Router // Injecter Router pour la navigation
  ) {}

  ngOnInit(): void {
    this.loadProduits();
  }

  loadProduits(): void {
    this.produitService.getAllProduits().subscribe(data => {
      this.produits = data;
      this.totalPages = Math.ceil(this.produits.length / this.itemsPerPage);
      this.updatePagedProduits();
    });
  }

  updatePagedProduits(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    this.pagedProduits = this.produits.slice(startIndex, startIndex + this.itemsPerPage);
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePagedProduits();
    }
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePagedProduits();
    }
  }

  toggleCart(): void {
    this.showCart = !this.showCart;
  }

  addToPanier(produit: Produit) {
    this.panierService.addToPanier(produit);
    this.showToast(`${produit.name} ajouté au panier`);
  }

  showToast(message: string) {
    const toast = document.createElement('div');
    toast.className = 'cart-toast';
    toast.innerHTML = message;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2000);
  }

  removeFromCart(productId: number): void {
    this.panierService.removeFromCart(productId);
  }
  savePanier(): void {
    this.panierService.savePanier().subscribe((savedPanier) => {
      const panierId = savedPanier.id; // Assure-toi que savePanier() retourne le panier avec ID

      this.commandeService.createCommandeFromPanier(panierId).subscribe(
        (commande) => {
          this.router.navigate(['/commande', commande.id]);
        },
        (error) => {
          console.error('Erreur lors de la création de la commande', error);
        }
      );
    });
  }

}
