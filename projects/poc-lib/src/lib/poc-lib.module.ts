import { NgModule } from '@angular/core';
import { PocLibComponent } from './poc-lib.component';
import { PocMaterialModule } from './poc-material.module';



@NgModule({
  declarations: [
    PocLibComponent
  ],
  imports: [
    PocMaterialModule
  ],
  exports: [
    PocLibComponent,
    PocMaterialModule
  ]
})
export class PocLibModule { }
