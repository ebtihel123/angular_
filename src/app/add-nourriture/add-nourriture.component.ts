import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categorie } from '../model/categorie.model';
import { Nourriture} from '../model/Nourriture.model';
import { NourrritureService } from '../services/nourriture.service';
@Component({
  selector: 'app-add-nourriture',
  templateUrl: './add-nourriture.component.html',
  styleUrls: ['./add-nourriture.component.css']
})
export class AddNourritureComponent implements OnInit {
  newNourriture = new Nourriture();
  message!: string;
  categories! : Categorie[];
   newIdCat! : number;
  newCategorie! : Categorie;
  constructor(private nourrritureService: NourrritureService ,private router :Router)  { }

  ngOnInit() {this.nourrritureService.listeCategories().
    subscribe(cats => {this.categories = cats._embedded.categories;
    console.log(cats);
    });
    }
    
  
    addNourriture(){
    this.newNourriture.categorie = this.categories.find(cat => cat.idCat == this.newIdCat)!;
    this.nourrritureService.ajouterNourriture(this.newNourriture).subscribe(prod => {
    console.log(prod);
    this.router.navigate(['noirriture']);
   });
    }
    
    

}
