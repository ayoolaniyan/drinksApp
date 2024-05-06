
import { Component, OnInit } from '@angular/core';
import { Drinks } from '../../models/drinks.model';
import { DrinkData } from "../../models/drinkData.model";
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { DrinksService } from '../../../../services/drinks.service';

@Component({
  selector: 'app-drink-detail',
  templateUrl: './drink-detail.page.html',
  styleUrls: ['./drink-detail.page.scss'],
})
export class DrinkDetailPage implements OnInit {
  drinks: DrinkData[][] = [];
  isLoading = false;
  data: any;
  id!: string | null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private navCtrl: NavController,
    private drinkService: DrinksService) { }

  ngOnInit() {
    // this.drinkService.getDrink('14029').subscribe((data) => {

    //   this.drinks = data;
    //   console.log('the drink: ', this.drinks);
    // });
    this.route.paramMap.subscribe((paramMap) => {
      this.id = paramMap.get('idDrink');
      this.drinkService.getDrink(this.id!).subscribe((data) => {
        this.drinks = data;
        console.log('the drink: ', this.drinks);
        console.log('drinks subscription: ', data);
      });
      console.log('PARAMmap ', this.id);
      console.log('PARAM ', paramMap);
    });
  }

  ionViewWillEnter() {
    this.isLoading = true;
    this.drinkService.getDrink('14029').subscribe((data) => {
      // this.drinks = data;

      console.log('the drink: ', data);
      this.isLoading = false;
    });
  }

}
