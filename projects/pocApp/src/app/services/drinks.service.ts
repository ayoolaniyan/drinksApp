import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { tap, map } from 'rxjs/operators';
import { Drinks } from "../pages/product/models/drinks.model";
import { DrinkData } from "../pages/product/models/drinkData.model";

@Injectable({
  providedIn: 'root'
})

export class DrinksService {
  private _drinks = new BehaviorSubject<Drinks[][]>([]);
  private _drink = new BehaviorSubject<DrinkData[][]>([]);

  get drinks() {
    return this._drinks.asObservable();
  }

  get drink() {
    return this._drink.asObservable();
  }

  constructor(private http: HttpClient) { }

  fetchDrinks() {
    return this.http.get<{
      drinks: Drinks[]
    }>('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic')
      .pipe(map((data) => {
        console.log(data.drinks);
        const drinksDetails: Drinks[][] = [];
        drinksDetails.push(data.drinks);

        return drinksDetails;
      }),
        tap(drinksDetails => {
          this._drinks.next(drinksDetails);
        })
      );
  }

  getDrink(id: string) {
    return this.http.get<{
      drinks: DrinkData[]
    }>(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      .pipe(map(data => {
        const drinksData: DrinkData[][] = [];
        drinksData.push(
          data.drinks,
        );
        return drinksData;
      }),
        tap(drinksData => {
          this._drink.next(drinksData);
        })
      );
  }
}


