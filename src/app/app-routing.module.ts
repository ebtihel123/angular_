import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProduitComponent } from './add-nourriture/add-nourriture.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { ListeCategoriesComponent } from './liste-categories/liste-categories.component';
import { LoginComponent } from './login/login.component';
import { ProduitGuard } from './produit.guard';

import { ProduitsComponent } from './nourriture/nourritures.component';
import { RechercheParCategorieComponent } from './recherche-par-categorie/recherche-par-categorie.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';

import { UpdateProduitComponent } from './update-nourriture/update-produit.component';

const routes: Routes = [{path: "produits", component : ProduitsComponent},
{path : "add-produit", component : AddProduitComponent, canActivate:[ProduitGuard]},
{ path: "", redirectTo: "produits", pathMatch: "full" },
{path: "rechercheParNom", component : RechercheParNomComponent},
{path: "rechercheParCategorie", component : RechercheParCategorieComponent},
{path: "listeCategories", component : ListeCategoriesComponent},
{path: 'login', component: LoginComponent},
{path: 'app-forbidden', component: ForbiddenComponent},
{path: "updateNourriture/:id", component: UpdateProduitComponent}];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
