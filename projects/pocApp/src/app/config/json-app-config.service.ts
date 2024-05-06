import { Injectable } from "@angular/core";
import { AppConfiguration } from "./app.config";
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})

export class JsonAppConfigService extends AppConfiguration {
  constructor(private http: HttpClient) {
    super();
  }
}
