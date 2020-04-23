import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-preguntas-frecuentes',
  templateUrl: './preguntas-frecuentes.component.html',
  styleUrls: ['./preguntas-frecuentes.component.less']
})
export class PreguntasFrecuentesComponent implements OnInit {
  isOpen: boolean;
  panelOpenState = false;
  constructor() { }

  ngOnInit() {
  }


}
