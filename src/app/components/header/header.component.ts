import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  navbarOpen = false;
  url:string;
  constructor() {
    this.url = environment.urlGoBice;
   }

  ngOnInit() {
  }


  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }



}
