import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ClientGestionStockProduit';

  showhide:boolean=false;

  onSidebarchange(showhide: boolean){
    this.showhide=showhide;

  }
}
