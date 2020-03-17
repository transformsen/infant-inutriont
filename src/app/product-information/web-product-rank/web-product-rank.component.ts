import { Component, OnInit, Input } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Label, Color } from 'ng2-charts';
import { FormControl } from '@angular/forms';
import { BarChartData } from 'src/app/model/dashboard.interface';
import { Observable } from 'rxjs';
import { startWith, switchMap, map } from 'rxjs/operators';
import { ProductInformationService } from '../product-information.service';

@Component({
  selector: 'app-web-product-rank',
  templateUrl: './web-product-rank.component.html',
  styleUrls: ['./web-product-rank.component.scss']
})
export class WebProductRankComponent implements OnInit {

    @Input() product: string
    options: ChartOptions = {
    responsive: false,
    maintainAspectRatio: false,
    scales:{
      xAxes:[{
        gridLines:{
          display: false
        }
      }],
      yAxes:[{
        gridLines:{
          display: false
        },
      }]
    }
  }
  public colors: Color[] = [
    {
      backgroundColor: 'turquoise',
    },
  ];
  public lineChartLegend = false;
  public chartType = 'line';
  public lineChartPlugins = [];

  charData$: Observable<BarChartData>;
  monthSearch : FormControl = new FormControl('Monthly')
  months: string[] = ['Monthly', 'Yearly', 'Weekly']

  
  constructor(private productInformationService: ProductInformationService) { }

  ngOnInit(): void {
    this.charData$ = this.monthSearch.valueChanges.pipe(
      startWith('Monthly'),
      switchMap((search)=>{
        return this.productInformationService.getProductRank(search)
          .pipe(map((results)=>{
            const label = []
            const data = []
            for(const r of results){
              label.push(r.yAxis)
              data.push(r.rank)
            }
            return {label, data: [{data: data}]}
          })
          )
        })
    )
  }

}
