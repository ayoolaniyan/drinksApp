import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DrinksPageRoutingModule } from './drinks-routing.module';

import { DrinksPage } from './drinks.page';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { PocLibModule } from 'pocLib';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DrinksPageRoutingModule,
    ScrollingModule,
    PocLibModule
  ],
  declarations: [DrinksPage]
})
export class DrinksPageModule { }
