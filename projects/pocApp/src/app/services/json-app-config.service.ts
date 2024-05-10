import { Injectable } from '@angular/core';
import { AppConfiguration } from '../config/app.config';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class JsonAppConfigService extends AppConfiguration {

  constructor(private http: HttpClient) {
    super();
  }

  async load() {
    try {
      const data = await this.http.get<AppConfiguration>('assets/app.config.json')
        .toPromise();
      console.log('yes data ', data);
      if (data) {
        this.title = data.title;
        this.drinkUrl = data.drinkUrl;
        this.drinksUrl = data.drinksUrl;
      }
    } catch {
      console.error('Could not load Configurations');
    }
  }
}
