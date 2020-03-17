import { Component, OnInit, Input } from '@angular/core';
import { ProductInformationService } from '../product-information.service';
import { Observable } from 'rxjs';
import { BarChartData } from 'src/app/model/dashboard.interface';
import { Color } from 'ng2-charts';
import { ChartType, ChartOptions } from 'chart.js';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-product-sales',
  templateUrl: './product-sales.component.html',
  styleUrls: ['./product-sales.component.scss']
})
export class ProductSalesComponent implements OnInit {

  @Input() product: string

  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartOptions: ChartOptions = {
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
          display: true
        },
        ticks:{
          beginAtZero: false,
          callback: (value)=>{
            if(value >= 1000000000000){
              return `${value/1000000000000}T`
            }else if(value >= 1000000000){
              return `${value/1000000000}B`
            }else if(value >= 1000000){
              return `${value/1000000}M`
            }else if(value >= 1000){
              return `${value/10000}K`
            }
          }
        }
      }]
    }
  };
  colors: Color[] = [{backgroundColor: 'green'}, {backgroundColor: 'blue'}]

  charData$: Observable<BarChartData>;
  constructor(private productInformationService: ProductInformationService) { }

  ngOnInit(): void {
    this.charData$ = this.productInformationService.getProductSales(this.product)
    .pipe(map((results)=>{
      const label = []
      const data1 = []
      const data2 = []
      for(const result of results){
        label.push(result.month.toUpperCase())
        data1.push(result.sales)
        data2.push(result.review)
      }
      const barCharData: BarChartData = {
        label,
        data : [{data: data1, barThickness: 8, borderWidth: 0, borderCapStyle:'round', label:'Sales'},
        {data: data2, barThickness: 8, borderWidth: 0, borderCapStyle:'round', label:'Review'}]
      }
      return barCharData;
    }))
  }

}
