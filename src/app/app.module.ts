import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProduitListeComponent } from './produit-liste/produit-liste.component';
import { PanierComponent } from './panier/panier.component';
import { CommandeComponent } from './commande/commande.component';
import { RouterModule } from '@angular/router';
import { FactureComponent } from './facture/facture.component';
import { AjoutFournisseurComponent } from './components/ajout-fournisseur/ajout-fournisseur.component';
import { ReclamationComponent } from './reclamation/reclamation.component';
<<<<<<< HEAD
import { ShipmentComponent } from './Logistics/shipment/shipment.component';
=======
>>>>>>> e6f18f61c3d6cd2b5d2c79c823868cccfebe16bb

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AdminComponent,
    DashboardComponent,
    ProduitListeComponent,
    PanierComponent,
    CommandeComponent,
    FactureComponent,
    AjoutFournisseurComponent,
<<<<<<< HEAD
    ReclamationComponent,
    ShipmentComponent
=======
    ReclamationComponent
>>>>>>> e6f18f61c3d6cd2b5d2c79c823868cccfebe16bb





  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
