export class Fournisseur {
  id!: number;
  nom: string;

  constructor(nom: string, id?: number) {
    this.nom = nom;
    if (id !== undefined) {
      this.id = id;
    }
  }
}
