import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { environment } from '../../../environments/environment';

import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-hazte-cliente',
  templateUrl: './hazte-cliente.component.html',
  styleUrls: ['./hazte-cliente.component.less']
})
export class HazteClienteComponent implements OnInit {

  isMobile: boolean;
  isDesktopDevice: boolean;
  url: string;

  constructor(private deviceService: DeviceDetectorService, location: Location) { }
  

  ngOnInit() {
    this.isMobile = this.deviceService.isMobile();
    this.isDesktopDevice = this.deviceService.isDesktop();
    this.url = this.isMobile ? environment.urlGoBice : '#creaCliente' ;
    console.log("isMobile= " +this.isMobile);
    console.log("isDesktopDevice= " +this.isDesktopDevice);
  
    console.log("url= " +this.url);
  }

}
