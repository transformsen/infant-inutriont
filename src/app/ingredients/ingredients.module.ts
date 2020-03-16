import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IngredientsRoutingModule } from './ingredients-routing.module';
import { SharedModule } from '../shared/shared.module';
import { IngredientsDataTableComponent } from './ingredients-data-table/ingredients-data-table.component';
import { IngredientsHomeComponent } from './ingredients-home/ingredients-home.component';


@NgModule({
  declarations: [IngredientsDataTableComponent, IngredientsHomeComponent],
  imports: [
    CommonModule,
    SharedModule,
    IngredientsRoutingModule
  ]
})
export class IngredientsModule { }
