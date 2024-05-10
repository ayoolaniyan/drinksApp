import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DrinksService } from 'src/app/services/drinks.service';
import { DrinkData } from '../product/models/drinkData.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit, OnDestroy {
  drinks: DrinkData[][] = [];
  isLoading = false;
  private drinksSub: Subscription = new Subscription;

  constructor(private drinksService: DrinksService) { }

  ngOnInit() {
    this.drinksSub = this.drinksService.getDrink('15423').subscribe((data) => {
      console.log(data);
      this.drinks = data;
    })
  }

  ionViewWillEnter() {
    this.isLoading = true;
    this.drinksService.fetchDrinks().subscribe(() => {
      this.isLoading = false;
    });
  }

  ngOnDestroy(): void {
    if (this.drinksSub) {
      this.drinksSub.unsubscribe();
    }
  }

}
