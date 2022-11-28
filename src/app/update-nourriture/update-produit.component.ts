import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorie } from '../model/categorie.model';

import { Nourriture } from '../model/Nourriture.model';

import { NourrritureService } from '../services/nourriture.service';


@Component({
  selector: 'app-update-produit',
  templateUrl: './update-produit.component.html',
  styles: [
  ]
})
export class UpdateProduitComponent implements OnInit {
  currentNourritures= new Nourriture();
  categories! : Categorie[];
updatedCatId! : number;

  constructor(private activatedRoute: ActivatedRoute,
    private router :Router,

    private produitService: NourrritureService) { }

    ngOnInit(): void {
      this.produitService.listeCategories().
      subscribe(cats => {this.categories = cats._embedded.categories;
      console.log(cats);
      });
      this.produitService.consulterNourriture(this.activatedRoute.snapshot.params['id']).
      subscribe( prod =>{ this.currentNourritures = prod;
      this.updatedCatId =
      this.currentNourritures.categorie.idCat;
      } ) ;}
      updateProduit() {
        this.currentNourritures.categorie = this.categories.
       find(cat => cat.idCat == this.updatedCatId)!;
       this.produitService.updateNourriture(this.currentNourritures).subscribe(prod => {
      this.router.navigate(['produits']); }
       );

        }



}
