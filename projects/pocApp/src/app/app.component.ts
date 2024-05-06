import { Component } from '@angular/core';
import { AppConfiguration } from './config/app.config';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  title = "default";

  constructor() {
    // private appConfig: AppConfiguration
    // this.title = appConfig.title;

    // console.log(appConfig.drinkUrl);
    // console.log(appConfig.drinksUrl);
  }
}
