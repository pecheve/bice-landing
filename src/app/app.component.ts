import { Component } from '@angular/core';
import { GoogleTagManagerService } from 'angular-google-tag-manager';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  constructor(private gtmService: GoogleTagManagerService,) {
    this.gtmService.addGtmToDom();
  }
  title = 'landing-go-bice';
}
