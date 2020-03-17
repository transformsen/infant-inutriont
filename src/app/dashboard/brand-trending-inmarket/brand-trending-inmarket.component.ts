import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { Color } from 'ng2-charts';
import { DashboardService } from '../dashboard.service';
import { Observable } from 'rxjs';
import { BarChartData } from 'src/app/model/dashboard.interface';
import { FormControl } from '@angular/forms';
import { switchMap, map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-brand-trending-inmarket',
  templateUrl: './brand-trending-inmarket.component.html',
  styleUrls: ['./brand-trending-inmarket.component.scss']
})
export class BrandTrendingInmarketComponent implements OnInit {

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
  colors: Color[] = [{backgroundColor: 'turquoise'}, {backgroundColor: 'aliceblue'}];

  charData$: Observable<BarChartData>;
  monthSearch: FormControl = new FormControl('January');
  months: string[] = ['January', 'February', 'March', 'April',
  'May', 'June', 'July', 'Augest', 'September', 'October', 'November', 'December'];

  constructor(
    private dashboardService: DashboardService
  ) { }

  ngOnInit(): void {
    this.charData$ = this.monthSearch.valueChanges.pipe(
      startWith('January'),
      switchMap((search) => {
        return this.dashboardService.getBrandTrendingInmarket(search)
          .pipe(map((results) => {
            const label = [];
            const data1 = [];
            const data2 = [];
            for (const result of results) {
              label.push(result.brand.toUpperCase());
              data1.push(result.trend);
              data2.push(result.overallTrend);
            }
            const barCharData: BarChartData = {
              label,
              data : [{data: data1, barThickness: 10, borderWidth: 0, label: 'Trend', stack: 'a'},
              {data: data2, barThickness: 10, borderWidth: 0, label: 'Overall Trend', stack: 'a'}]
            };
            return barCharData;
          }));
      })
    );
  }

}
