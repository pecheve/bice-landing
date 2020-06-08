import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  scroll(id) {
    let elmnt = document.getElementById(id);
    elmnt.scrollIntoView();
  }
}
