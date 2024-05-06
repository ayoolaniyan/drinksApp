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
  private _drinks = new BehaviorSubject<Drinks[]>([]);
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
      drinks: { [key: string]: Drinks }
    }>('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic')
      .pipe(map((resData) => {
        const drinksDetails: Drinks[] = [];
        for (const key in resData.drinks) {
          // if (resData.hasOwnProperty(key)) {
          drinksDetails.push(
            new Drinks(
              resData.drinks[key].idDrink,
              resData.drinks[key].strDrink,
              resData.drinks[key].strDrinkThumb
            )
          );
          // }
        }
        // console.log(drinksDetails);
        return drinksDetails;
      }),
        tap(drinksDetails => {
          this._drinks.next(drinksDetails);
          // console.log('incoming data', drinksDetails);
        })
      );
  }


  getDrink(id: string) {
    return this.http.get<{
      drinks: DrinkData[]
    }>(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      .pipe(map(data => {
        console.log('THE DRINKS: ', data.drinks[0].idDrink);

        const drinksData: DrinkData[][] = [];
        drinksData.push(
          data.drinks,
        );
        console.log('drinks data ', drinksData);
        return drinksData;
      })
        ,
        tap(drinksData => {
          this._drink.next(drinksData);
        })
      );
  }
}


