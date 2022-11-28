import { Injectable } from '@angular/core';
import { Categorie } from '../model/categorie.model';
import { Nourriture } from '../model/Nourriture.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { apiURL } from '../config';
import { CategorieWrapper } from '../model/CategorieWrapped.model';

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};

@Injectable({
providedIn: 'root'
})
export class NourrritureService {
  apiURLCat: string = 'http://localhost:8080/nouriture/cat' ;
 
  
  
  
    
  
nourritures! : Nourriture[]; //un tableau de Produit
//produit! : Produit;
// categories : Categorie[];
constructor(private http : HttpClient) {
// this.categories = [ {idCat : 1, nomCat : "PC"},
// {idCat : 2, nomCat : "Imprimante"}];
// this.produits = [
// { idProduit : 1, nomProduit : "PC Asus", prixProduit : 3000.600,
// dateCreation : new Date("01/14/2011"), categorie : {idCat : 1, nomCat : "PC"}},
// { idProduit : 2, nomProduit : "Imprimante Epson", prixProduit : 450,
// dateCreation : new Date("12/17/2010"), categorie : {idCat : 2, nomCat : "Imprimante"}},
// { idProduit : 3, nomProduit :"Tablette Samsung", prixProduit : 900.123,
// dateCreation : new Date("02/20/2020"),categorie : {idCat : 1, nomCat : "PC"}}
// ];
}
listeNourriture(): Observable<Nourriture[]>{
  return this.http.get<Nourriture[]>(apiURL);
  }

  ajouterNourriture( prod: Nourriture):Observable<Nourriture>{
    return this.http.post<Nourriture>(apiURL, prod, httpOptions);
    }
    supprimerNourriture(id : number) {
      const url = `${apiURL}/${id}`;
      return this.http.delete(url, httpOptions);
      }
      consulterNourriture(id: number): Observable<Nourriture> {
        const url = `${apiURL}/${id}`;
        return this.http.get<Nourriture>(url);
        }
        updateNourriture(prod :Nourriture) : Observable<Nourriture>
        {
        return this.http.put<Nourriture>(apiURL, prod, httpOptions);
        }

        listeCategories():Observable<CategorieWrapper>{
          return this.http.get<CategorieWrapper>(this.apiURLCat);
          }
          rechercherParCategorie(idCat: number):Observable< Nourriture[]> {
            const url = `${apiURL}/norrscat/${idCat}`;
             return this.http.get<Nourriture[]>(url);
            }
            rechercherParNom(nom: string):Observable< Nourriture[]> {
              const url = `${apiURL}/prodsByName/${nom}`;
              return this.http.get<Nourriture[]>(url);
              }
        
  ajouterCategorie( cat: Categorie):Observable<Categorie>{
      return this.http.post<Categorie>(this.apiURLCat, cat, httpOptions);
      }
   
  
  updateNourriture(p:Nourriture):Observable<Categorie>
  {
  return this.http.put<Nourriture>(this.apiURL,p,httpOptions)
        }
      }
  
  







  
    

  
  



