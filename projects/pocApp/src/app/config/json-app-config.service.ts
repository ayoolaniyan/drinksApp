import { Injectable } from "@angular/core";
import { AppConfiguration } from "./app.config";
import { HttpClient } from "@angular/common/http";
import { tap, map } from 'rxjs/operators';
import { interval, take, lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class JsonAppConfigService extends AppConfiguration {
  constructor(private http: HttpClient) {
    super();
  }



  async load() {
    const source$ = this.http.get<AppConfiguration>('app.config.json').pipe(take(10));
    const finalNumber = await lastValueFrom(source$);
    console.log(`The final number is ${finalNumber}`);
  }


  // Expected output:
  // "The final number is 9"
  // async load() {
  //   return this.http.get<AppConfiguration>('config/app.config.json')
  //     .toPromise()
  //     .then(data => {
  //       console.log('loaded data ', data);
  //       this.title = "data.title";
  //       this.drinksUrl = "data.drinksUrl";
  //       this.drinkUrl = "data.drinkUrl";
  //     })
  //     .catch((e) => {
  //       console.error('Could not load configurations', e);
  //     })
  // }
  // async load() {
  //   try {
  //     const data = await this.http.get<AppConfiguration>('app.config.json')
  //       .toPromise();
  //     console.log('loaded data ', data);
  //     this.title = "data.title";
  //     this.drinksUrl = "data.drinksUrl";
  //     this.drinkUrl = "data.drinkUrl";
  //   } catch (e) {
  //     console.error('Could not load configurations', e);
  //   }
  // }
}

