import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NutrientRoutingModule } from './nutrient-routing.module';
import { NutrientComponent } from './nutrient.component';
import { BrandMostNutrientComponent } from './brand-most-nutrient/brand-most-nutrient.component';
import { SharedModule } from '../shared/shared.module';
import { NutrientTableComparisionComponent } from './nutrient-table-comparision/nutrient-table-comparision.component';

@NgModule({
  declarations: [NutrientComponent, BrandMostNutrientComponent, 
    NutrientTableComparisionComponent],
  imports: [
    CommonModule,
    NutrientRoutingModule,
    SharedModule
  ]
})
export class NutrientModule { }
