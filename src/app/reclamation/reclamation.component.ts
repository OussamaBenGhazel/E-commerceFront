import { Component, OnInit } from '@angular/core';
import { ReclamationService } from '../services/reclamation.service';

@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.css']
})
export class ReclamationComponent implements OnInit {

  reclamations: any[] = [];
  newReclamation = {
    id: null,
    type: '',
    email: '',
    description: '',
    etat: ''
  };
  constructor(private reclamationService: ReclamationService) {}

  ngOnInit() {
    this.getAllReclamations();
  }

  getAllReclamations() {
    this.reclamationService.getAll().subscribe(data => {
      this.reclamations = data;
    });
  }

  addReclamation() {
    this.reclamationService.add(this.newReclamation).subscribe(() => {
      this.getAllReclamations();
      this.newReclamation = { id: null, type: '', email: '' ,  description: '',
    etat: ''};
    });
  }

  updateReclamation(reclamation: any) {
    this.reclamationService.update(reclamation.id, reclamation).subscribe(() => {
      this.getAllReclamations();
    });
  }

  deleteReclamation(id: number) {
    this.reclamationService.delete(id).subscribe(() => {
      this.getAllReclamations();
    });
  }
}
