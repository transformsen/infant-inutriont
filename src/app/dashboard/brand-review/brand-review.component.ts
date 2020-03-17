import { Component, OnInit } from '@angular/core';
import { Label, MultiDataSet, Color } from 'ng2-charts';
import { ChartType, ChartOptions } from 'chart.js';
import { Observable, pipe } from 'rxjs';
import { DashboardService } from '../dashboard.service';
import { IngredientsService } from 'src/app/ingredients/ingredients.service';
import { FormControl } from '@angular/forms';
import { startWith, switchMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-brand-review',
  templateUrl: './brand-review.component.html',
  styleUrls: ['./brand-review.component.scss']
})
export class BrandReviewComponent implements OnInit {

  public chartLabels: Label[] = ['Positive', 'Negative', 'Nutral'];
  public chartType: ChartType = 'doughnut';

  options: ChartOptions = {
    cutoutPercentage: 70
  }

  colors: Color[] = [{backgroundColor: ['turquoise', 'blue', 'aliceblue']},
  {backgroundColor: ['turquoise', 'blue', 'aliceblue']}]

  public chartData$: Observable<MultiDataSet[]>;
  
  productSearchInput : FormControl = new FormControl('enfamil')
  products$: Observable<string[]>;
  
  constructor( private dashboardService: DashboardService,
    private ingredientsService: IngredientsService) { }

  ngOnInit(): void {
    this.chartData$ = this.productSearchInput.valueChanges.pipe(
      startWith(''),
      switchMap((search)=>{
        return this.dashboardService.getBrandReview(search)
          .pipe(map((results)=>{
            const data = []
            for(const result of results){
              data.push([result.positive, result.negative, result.nutral])
            }
            return data;
          }))
      })
    ) 
    this.products$ = this.ingredientsService.getProductsList();
  }

}
