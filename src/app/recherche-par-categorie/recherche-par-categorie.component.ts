import { Component, OnInit } from '@angular/core';
import { Categorie } from '../model/categorie.model';

import { Nourriture } from '../model/Nourriture.model';

import { NourrritureService } from '../services/nourriture.service';

@Component({
  selector: 'app-recherche-par-categorie',
  templateUrl: './recherche-par-categorie.component.html',
  styles: [
  ]
})
export class RechercheParCategorieComponent implements OnInit {
  nourritures! : Nourriture[];
  IdCategorie! : number;
  categories! : Categorie[];
  constructor(private nourritureservice :NourrritureService ) { }

  ngOnInit(): void {
    this.nourritureservice.listeCategories().subscribe(cats => {this.categories = cats._embedded.categories;
    console.log(cats);
    });
    }
    onChange() {
      this.nourritureservice.rechercherParCategorie(this.IdCategorie).
      subscribe(prods =>{this.nourritures=prods});
      }
    

}
