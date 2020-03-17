import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { BrandTrendingInmarketComponent } from './brand-trending-inmarket/brand-trending-inmarket.component';
import { RecentBrandUpdatedComponent } from './recent-brand-updated/recent-brand-updated.component';
import { BrandPriceUpdatedComponent } from './brand-price-updated/brand-price-updated.component';
import { BrandRatingsComponent } from './brand-ratings/brand-ratings.component';
import { BrandRatingsDetailsComponent } from './brand-ratings-details/brand-ratings-details.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [DashboardComponent, BrandTrendingInmarketComponent, RecentBrandUpdatedComponent, BrandPriceUpdatedComponent,
    BrandRatingsComponent, BrandRatingsDetailsComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
