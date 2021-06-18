import { Component } from '@angular/core';
import { NgsRevealConfig } from 'ngx-scrollreveal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'firstapp';

  constructor(private scrollconfig: NgsRevealConfig) {
    scrollconfig.origin = 'left';
    scrollconfig.distance = '300px';
  }
}
