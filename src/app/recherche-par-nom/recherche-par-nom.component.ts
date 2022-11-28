import { Component, OnInit } from '@angular/core';
import { Nourriture } from '../model/Nourriture.model';


import { NourrritureService } from '../services/nourriture.service';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styles: [
  ]
})
export class RechercheParNomComponent implements OnInit {
nomNourriture!:string ;
nourritures!:Nourriture[];
allNourritures! : Nourriture[];
searchTerm!: string;
  constructor(private nourrritureService :NourrritureService  ) { }

  ngOnInit(): void {this.nourrritureService.listeNourriture().subscribe(prods => {
    console.log(prods);
    this.nourritures = prods;
    });
  }
  rechercherProds(){
    this.nourrritureService.rechercherParNom(this.nomNourriture).
subscribe(prods => {
this.nourritures = prods;
console.log(prods)});
   
    }
  onKeyUp(filterText : string){
    this.nourritures = this.allNourritures.filter(item =>item.nomNourriture!.toLowerCase().includes(filterText));
  }
      


}
