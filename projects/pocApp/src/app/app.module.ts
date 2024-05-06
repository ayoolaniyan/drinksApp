import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { JsonAppConfigService } from './config/json-app-config.service';
import { AppConfiguration } from './config/app.config';

// export function initializerFn(JsonAppConfigService: JsonAppConfigService) {
//   return () => {
//     return JsonAppConfigService.load();
//   };
// }

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    // { provide: AppConfiguration, deps: [HttpClient], useExisting: JsonAppConfigService },
    // { provide: APP_INITIALIZER, multi: true, deps: [JsonAppConfigService], useFactory: initializerFn }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
