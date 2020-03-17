import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatTabsModule} from '@angular/material/tabs';
import {MatListModule} from '@angular/material/list';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';

import { AgGridModule } from 'ag-grid-angular';
import { ChartsModule } from 'ng2-charts';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { IngredientsListComponent } from './ingredients-list/ingredients-list.component';
import { NutrientComparisionComponent } from './nutrient-comparision/nutrient-comparision.component';
import { UpDownIndicationComponent } from './up-down-indication/up-down-indication.component';
import { AbsPipe } from './pipe/abs.pipe';

@NgModule({
  declarations: [IngredientsListComponent, NutrientComparisionComponent, UpDownIndicationComponent, AbsPipe],
  imports: [
    CommonModule, AgGridModule, MatSelectModule, MatCardModule,
    MatInputModule,  MatProgressSpinnerModule, ChartsModule,
    ReactiveFormsModule, FormsModule
  ],
  exports: [
    IngredientsListComponent,
    NutrientComparisionComponent,
    UpDownIndicationComponent,
    
    MatCardModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatSelectModule,
    MatTabsModule,
    MatListModule,
    MatProgressBarModule,
    
    AgGridModule,
    ChartsModule,

    ReactiveFormsModule,
    FormsModule
  ]
})
export class SharedModule { }
