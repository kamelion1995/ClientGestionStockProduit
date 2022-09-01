import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produit } from '../produit';
import { ServiceproduitService } from '../serviceproduit.service';

@Component({
  selector: 'app-updateproduit',
  templateUrl: './updateproduit.component.html',
  styleUrls: ['./updateproduit.component.css']
})
export class UpdateproduitComponent implements OnInit {

  id!:number;
  produits:Produit=new Produit();
  constructor(private service:ServiceproduitService,private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.id= this.route.snapshot.params['id']
    this.service.getProduitById( this.id).subscribe (data=>{
      this.produits=data;
    },
      error =>console.log(error) 
    );
  }
  onSubmit(){

  }

}
