import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input()
  showhide!:boolean;

  @Output()
  Showsedidebar:EventEmitter<boolean>=new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }
  afficherSideBar(){
    this.showhide=!this.showhide;
    this.Showsedidebar.emit(this.showhide);

  }
  logout(){
    
  }

}
