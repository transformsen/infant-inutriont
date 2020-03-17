import { Component, OnInit, Input } from '@angular/core';
import { DashboardService } from 'src/app/dashboard/dashboard.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Color, Label } from 'ng2-charts';
import { ChartType, ChartOptions, ChartDataSets } from 'chart.js';
import { ProductAnalysis } from 'src/app/model/product-information';
import { ProductInformationService } from '../product-information.service';

@Component({
  selector: 'app-product-analysis',
  templateUrl: './product-analysis.component.html',
  styleUrls: ['./product-analysis.component.scss']
})
export class ProductAnalysisComponent implements OnInit {

  @Input() product: string;
  chartData$: Observable<any>;

  label: Label[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartOptions: ChartOptions = {
    responsive: false,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        gridLines: {
          display: false
        }
      }],
      yAxes: [{
        gridLines: {
          display: true
        },
        ticks: {
          beginAtZero: false,
          callback: (value) => {
            if (value >= 1000000000000) {
              return `${value / 1000000000000}T`;
            } else if (value >= 1000000000) {
              return `${value / 1000000000}B`;
            } else if (value >= 1000000) {
              return `${value / 1000000}M`;
            } else if (value >= 1000) {
              return `${value / 10000}K`;
            }
          }
        }
      }]
    }
  };
  colors: Color[] = [ {backgroundColor: 'blue'}];

  constructor(
    private productInformationService: ProductInformationService
  ) { }

  ngOnInit(): void {
    this.chartData$ =  this.productInformationService.getProductAnalysis(this.product)
    .pipe(map((results) => {
      return {data: [{data: results.ratings,  barThickness: 8, borderWidth: 0}],
      percentage: results.percentage, totalRatings: results.totalRating};
    }));
  }

}
