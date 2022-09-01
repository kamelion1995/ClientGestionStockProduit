import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Produit } from '../produit';

import { ProduitserviceService } from '../produitservice.service';
import { ServiceproduitService } from '../serviceproduit.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  produit!:Produit[];
  produits =new Produit();

  constructor(private serviceproduit:ServiceproduitService, private router:Router) {
   
   }

  ngOnInit(): void {

   this.loadProduit();

  }

  loadProduit(){
    this.serviceproduit.getProduit().subscribe(data =>{
      this.produit=data;
    },
      (error: any) =>{console.log('error')},
    () =>{console.log('loading application')}
    );
  }

      addProduit(){
      this.serviceproduit.addProduit(this.produits).subscribe(
      data => {
        this.produits=data;
      }
    )
  }

  deleteProduit(id:number){
    this.serviceproduit.deleteProduit(id).subscribe(
      data=>{
        console.log(data);
        this.loadProduit();
      }
    )

  }
  updateproduit(id:number){
    this.router.navigate(['updateproduit',id]);
    
  }

}
