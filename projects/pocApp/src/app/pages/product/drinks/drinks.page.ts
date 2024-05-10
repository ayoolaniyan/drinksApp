import { Component, OnDestroy, OnInit } from '@angular/core';
import { DrinksService } from '../../../services/drinks.service';
import { Drinks } from "../models/drinks.model";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.page.html',
  styleUrls: ['./drinks.page.scss'],
})
export class DrinksPage implements OnInit, OnDestroy {
  loadedDrinks: Drinks[][] = [];
  isLoading = false;
  private drinksSub: Subscription = new Subscription;

  constructor(private drinksService: DrinksService) { }

  ngOnInit() {
    this.drinksSub = this.drinksService.fetchDrinks().subscribe((data) => {
      this.loadedDrinks = data;
    });
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
