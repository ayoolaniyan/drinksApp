import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DrinkDetailPageRoutingModule } from './drink-detail-routing.module';

import { DrinkDetailPage } from './drink-detail.page';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { PocLibModule } from 'pocLib';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DrinkDetailPageRoutingModule,
    ScrollingModule,
    PocLibModule
  ],
  declarations: [DrinkDetailPage]
})
export class DrinkDetailPageModule { }
