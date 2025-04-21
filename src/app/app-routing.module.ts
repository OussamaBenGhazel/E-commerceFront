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
import { ShipmentComponent } from './Logistics/shipment/shipment.component'; 

const routes: Routes = [
  // Route par défaut : redirige vers la liste des produits
  { path: '', redirectTo: '/produits', pathMatch: 'full' },

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
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'admin/reclamationList', component: ReclamationComponent },
      { path: 'admin/shipments', component: ShipmentComponent },  // Shipment route under admin
    ]
  },

  // Shipment Routes
  { path: 'shipments', component: ShipmentComponent },  // Shipment component route for regular users

  // Route de secours pour les URLs non trouvées
  { path: '**', redirectTo: '/produits', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
