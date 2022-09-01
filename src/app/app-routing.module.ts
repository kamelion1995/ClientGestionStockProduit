import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProduitComponent } from './produit/produit.component';
import { UpdateproduitComponent } from './updateproduit/updateproduit.component';

const routes: Routes = [
  {path:'produit',component:ProduitComponent},
  {path: 'dashboard',component:DashboardComponent},
  {path: 'updateproduit/:id',component:UpdateproduitComponent},
  {path: 'login',component:LoginComponent},
  {path: 'home', component:HomeComponent},
  {path:'', redirectTo:'/home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
