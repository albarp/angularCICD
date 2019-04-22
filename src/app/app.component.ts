import { Component } from '@angular/core';
import appConfig from '../config.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = appConfig.envName;
}
