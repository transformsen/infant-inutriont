import { Component, OnInit, Input } from '@angular/core';
import { Observable, combineLatest, zip, of } from 'rxjs';
import { ChartCompData } from 'src/app/model/nutrient.interface';
import { NutrientService } from '../../nutrient/nutrient.service';
import { FormControl } from '@angular/forms';
import { IngredientsService } from 'src/app/ingredients/ingredients.service';
import { switchMap, map } from 'rxjs/operators';
import { ChartType, ChartOptions } from 'chart.js';
import { Color } from 'ng2-charts';

@Component({
  selector: 'app-nutrient-comparision',
  templateUrl: './nutrient-comparision.component.html',
  styleUrls: ['./nutrient-comparision.component.scss']
})
export class NutrientComparisionComponent implements OnInit {

  @Input() defaultSearch?: string;

  chartCompData$: Observable<ChartCompData>;
  products$: Observable<string[]>;

  search1 : FormControl = new FormControl('')
  search2 : FormControl = new FormControl('')

  barChartType: ChartType = 'horizontalBar';
  barChartLegend = true;
  barChartOptions: ChartOptions = {
    responsive: true,
    scales:{
      xAxes:[{
        gridLines:{
          display: false
        }
      }],
      yAxes:[{
        gridLines:{
          display: false
        }
      }]
    }
  };
  colors: Color[] = [{backgroundColor: 'turquoise'}, {backgroundColor: 'blue'}]

  constructor(private nutrientService: NutrientService,
    private ingredientsService: IngredientsService) { }

  ngOnInit(): void {
    this.products$ = this.ingredientsService.getProductsList();
    const search1$ = (this.defaultSearch) ? of(this.defaultSearch) : this.search1.valueChanges;
    this.chartCompData$ = combineLatest([search1$, this.search2.valueChanges])
      .pipe(switchMap(([search1, search2])=>{
        return zip(...[this.nutrientService.getNutrientPrcentage(search1),
          this.nutrientService.getNutrientPrcentage(search2)])
          .pipe(map(([result1, result2])=>{
            const nutrient: string[] = [];
            const data1 = [];
            const  data2 = [];
            for(const r of result1){
              nutrient.push(r.nutrient.toUpperCase())
              data1.push(r.percentage)
            }
            for(const r of result2){
              if(!nutrient.includes(r.nutrient.toUpperCase()))
                nutrient.push(r.nutrient.toUpperCase())
              data2.push(r.percentage)
            }
            const chartCompData: ChartCompData = {
              label: nutrient,
              data: [{data: data1, barThickness: 10, borderWidth: 0, label: search1.toUpperCase()},
                {data: data2, barThickness: 10, borderWidth: 0, label: search2.toUpperCase()}]
            }
            return chartCompData; 
          }))
      }))
    
  }

}
