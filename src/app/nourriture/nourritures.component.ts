import { Component, OnInit } from '@angular/core';
import { Nourriture } from '../model/Nourriture.model';
import { AuthService } from '../services/auth.service';
import { NourrritureService } from '../services/nourriture.service';


@Component({
  selector: 'app-produits',
  templateUrl: './nourritures.component.html',
  styleUrls: ['./nourritures.component.css']
})
export class NourrituresComponent implements OnInit {
  nourritures! : Nourriture[]; //un tableau de Produit
  constructor(private nourrritureService: NourrritureService, 
    public authService: AuthService) {
     //this.produits=[];
  }


  
    ngOnInit(): void {
      this.chargerNourriture();
      }
      chargerNourriture(){
        this.nourrritureService.listeNourriture().subscribe(nourts => {
        console.log(nourts);
        this.nourritures = nourts;
      });
      }
      supprimerNourriture(p: Nourriture)
      {
      let conf = confirm("Etes-vous sûr ?");
      if (conf)
         this.nourrritureService.supprimerNourriture(p.idNourriture!).subscribe(() => {
         console.log("Nourriture supprimé");
         this.chargerNourriture();
      });
      } 
}
