import { Component, OnDestroy, OnInit } from '@angular/core';
import { DrinksService } from '../../../services/drinks.service';
import { Drinks } from "../models/drinks.model";
import { Subscription } from 'rxjs';
import { MenuController } from '@ionic/angular';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.page.html',
  styleUrls: ['./drinks.page.scss'],
})
export class DrinksPage implements OnInit, OnDestroy {
  loadedDrinks: Drinks[] = [];
  relevantDrinks: Drinks[] = [];
  isLoading = false;
  private drinksSub: Subscription = new Subscription;

  constructor(
    private drinksService: DrinksService,
    private menuCtrl: MenuController,
    private router: Router) { }

  ngOnInit() {
    this.drinksService.fetchDrinks().subscribe((data) => {
      this.loadedDrinks = data;
      this.relevantDrinks = this.loadedDrinks;
      console.log(data);
    });
  }

  ionViewWillEnter() {
    this.isLoading = true;
    this.drinksService.fetchDrinks().subscribe(() => {
      this.isLoading = false;
    });
  }

  openDetailsPage() {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(this.loadedDrinks.map((item) => item.idDrink))
      }
    };

    this.router.navigate(['/products/drinks/drink-detail'], navigationExtras);
  }

  ngOnDestroy(): void {
    if (this.drinksSub) {
      this.drinksSub.unsubscribe();
    }
  }

}
