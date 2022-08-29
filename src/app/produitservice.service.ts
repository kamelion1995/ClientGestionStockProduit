import { StyleCompiler } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Produit } from './produit';


@Injectable({
  providedIn: 'root'
})
export class ProduitserviceService {

getProduit(){
  return [
    {
      ref:"livre", quantite:50, prixUnitaire:30
    },
    {
      ref:"cahier", quantite:30, prixUnitaire:60

    },

   {
  ref: "stylo", quantite:50, prixUnitaire:20
  }

  ];
}
  constructor() {
     }
   
} 
