import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'product-information',
    loadChildren: () => import('./product-information/product-information.module').then(m => m.ProductInformationModule)
  },
  { path: 'ingredients', loadChildren: () => import('./ingredients/ingredients.module').then(m => m.IngredientsModule) },
  { path: 'nutrient', loadChildren: () => import('./nutrient/nutrient.module').then(m => m.NutrientModule) },
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: '', redirectTo:'dashboard', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
