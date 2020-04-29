import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
@Component({
  selector: 'app-crea-cuenta',
  templateUrl: './crea-cuenta.component.html',
  styleUrls: ['./crea-cuenta.component.less']
})
export class CreaCuentaComponent implements OnInit {
  enviroment:boolean;
  constructor() { 
    this.enviroment = environment.production;
  }

  ngOnInit() {
  }

}
