import { Component, OnInit } from '@angular/core';
import { Fournisseur } from 'src/app/core/models/fournisseur';
import { FournisseurService } from 'src/app/services/fournisseur.service';

@Component({
  selector: 'app-ajout-fournisseur',
  templateUrl: './ajout-fournisseur.component.html',
  styleUrls: ['./ajout-fournisseur.component.css']
})
export class AjoutFournisseurComponent implements OnInit {
  nouveauFournisseur: Fournisseur = new Fournisseur('');
  message: string = '';
  fournisseurs: Fournisseur[] = [];

  constructor(private fournisseurService: FournisseurService) {}

  ngOnInit() {
    this.getAllFournisseurs();
  }

  ajouterFournisseur() {
    if (!this.nouveauFournisseur.nom.trim()) {
      this.message = "Le nom du fournisseur est requis.";
      return;
    }

    this.fournisseurService.addFournisseur(this.nouveauFournisseur).subscribe({
      next: (res) => {
        this.message = `Fournisseur "${res.nom}" ajouté avec succès !`;
        this.nouveauFournisseur = new Fournisseur('');
        this.getAllFournisseurs(); // Refresh list
      },
      error: (err) => {
        console.error(err);
        this.message = "Erreur lors de l'ajout du fournisseur.";
      }
    });
  }

  getAllFournisseurs() {
    this.fournisseurService.getAllFournisseurs().subscribe({
      next: (res) => {
        this.fournisseurs = res;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}
