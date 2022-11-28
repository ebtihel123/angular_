import { Categorie } from "./categorie.model";
export class Nourriture {
    idNourriture? : number;
    nomNourriture? : string;
    prixNourriture? : number;
     dateCreation? : Date ;
     categorie! : Categorie;
    }
    