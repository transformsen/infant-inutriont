import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { WebProductRankComponent } from './web-product-rank/web-product-rank.component';
import { ProductAnalysisComponent } from './product-analysis/product-analysis.component';
import { ProductSalesComponent } from './product-sales/product-sales.component';
import { SharedModule } from '../shared/shared.module';
import { ProductInformationRoutingModule } from './product-information-routing/product-information-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NutrientModule } from '../nutrient/nutrient.module';



@NgModule({
  declarations: [ProductsListComponent, 
    ProductDetailComponent, 
    WebProductRankComponent, 
    ProductAnalysisComponent, 
    ProductSalesComponent],
  imports: [
    CommonModule, 
    SharedModule,
    HttpClientModule,
    ProductInformationRoutingModule
  ]
})
export class ProductInformationModule { }
