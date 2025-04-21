import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ProduitListeComponent } from './produit-liste/produit-liste.component';
import { PanierComponent } from './panier/panier.component';
import { CommandeComponent } from './commande/commande.component';
import { FactureComponent } from './facture/facture.component';
import { AjoutFournisseurComponent } from './components/ajout-fournisseur/ajout-fournisseur.component';
import { ReclamationComponent } from './reclamation/reclamation.component';
<<<<<<< HEAD
import { ShipmentComponent } from './Logistics/shipment/shipment.component'; 
=======
>>>>>>> e6f18f61c3d6cd2b5d2c79c823868cccfebe16bb

const routes: Routes = [
  // Route par défaut : redirige vers la liste des produits
  { path: '', redirectTo: '/produits', pathMatch: 'full' },
<<<<<<< HEAD

  // Routes for commandes and factures
  { path: 'commande/:id', component: CommandeComponent },
  { path: 'facture/commande/:id', component: FactureComponent },
  { path: 'facture/:id', component: FactureComponent },

  // Routes for produits and fournisseur
  { path: 'produits', component: ProduitListeComponent },
  { path: 'ajouter-fournisseur', component: AjoutFournisseurComponent },

  // Reclamation Routes
  { path: 'reclamation', component: ReclamationComponent },
  { path: 'admin/reclamationList', component: ReclamationComponent },

  // Panier Route
  { path: 'panier', component: PanierComponent },

  // Admin Routes
=======
  { path: 'commande/:id', component: CommandeComponent },
  { path: 'facture/commande/:id', component: FactureComponent },
  { path: 'facture/:id', component: FactureComponent },// Charger facture existante
  { path: 'produits', component: ProduitListeComponent },
  { path: 'ajouter-fournisseur', component: AjoutFournisseurComponent },

  { path: 'reclamation', component: ReclamationComponent },
  { path: 'admin/reclamationList', component: ReclamationComponent },

  // Route pour le panier
  { path: 'panier', component: PanierComponent },

  // Routes pour l'admin
>>>>>>> e6f18f61c3d6cd2b5d2c79c823868cccfebe16bb
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'admin/reclamationList', component: ReclamationComponent },
<<<<<<< HEAD
      { path: 'admin/shipments', component: ShipmentComponent },  // Shipment route under admin
    ]
  },

  // Shipment Routes
  { path: 'shipments', component: ShipmentComponent },  // Shipment component route for regular users

  // Route de secours pour les URLs non trouvées
=======

    ]
  },

  // Route de secours pour les URLs non trouvées (optionnel)
>>>>>>> e6f18f61c3d6cd2b5d2c79c823868cccfebe16bb
  { path: '**', redirectTo: '/produits', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
