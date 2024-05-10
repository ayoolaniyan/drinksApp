import { Component, OnDestroy, OnInit } from '@angular/core';
import { DrinkData } from "../../models/drinkData.model";
import { ActivatedRoute } from '@angular/router';
import { DrinksService } from '../../../../services/drinks.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-drink-detail',
  templateUrl: './drink-detail.page.html',
  styleUrls: ['./drink-detail.page.scss'],
})
export class DrinkDetailPage implements OnInit, OnDestroy {
  drinks: DrinkData[][] = [];
  isLoading = false;
  data: any;
  id!: string | null;
  private drinksSub: Subscription = new Subscription;

  constructor(
    private route: ActivatedRoute,
    private drinkService: DrinksService) { }

  ngOnInit() {
    this.drinksSub = this.route.paramMap.subscribe((paramMap) => {
      this.id = paramMap.get('idDrink');
      this.drinkService.getDrink(this.id!).subscribe((data) => {
        this.drinks = data;
      });
    });
  }

  ionViewWillEnter() {
    this.isLoading = true;
    this.drinkService.getDrink('14029').subscribe(() => {
      this.isLoading = false;
    });
  }

  ngOnDestroy(): void {
    if (this.drinksSub) {
      this.drinksSub.unsubscribe();
    }
  }
}
