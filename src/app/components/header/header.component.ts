import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  navbarOpen = false;
  url:string;
  isMobile: boolean;
  enviroment:boolean;
  constructor(private deviceService: DeviceDetectorService) {
    this.url = environment.urlGoBice;
   }

  ngOnInit() {
    this.enviroment = environment.production;
    this.isMobile = this.deviceService.isMobile();
    this.url = this.isMobile ? environment.urlGoBice : '#creaCliente' ;
  }


  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  scroll(id) {
    let elmnt = document.getElementById(id);
    elmnt.scrollIntoView();
  }


}
