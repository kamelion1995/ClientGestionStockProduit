import { Component, OnInit } from '@angular/core';
import { Produit } from '../produit';

import { ProduitserviceService } from '../produitservice.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  produit!:Produit[];
  constructor(private Produitservice:ProduitserviceService) { }

  ngOnInit(): void {

    this.produit=this.Produitservice.getProduit();
  }

}
