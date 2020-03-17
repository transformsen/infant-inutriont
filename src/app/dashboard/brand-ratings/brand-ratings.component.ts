import { Component, OnInit } from '@angular/core';
import { BrandRatings } from 'src/app/model/dashboard.interface';
import { Observable } from 'rxjs';
import { DashboardService } from '../dashboard.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-brand-ratings',
  templateUrl: './brand-ratings.component.html',
  styleUrls: ['./brand-ratings.component.scss']
})
export class BrandRatingsComponent implements OnInit {

  brandRatings$: Observable<BrandRatings[]>;

  constructor(
    private dashboardService: DashboardService
  ) { }

  ngOnInit(): void {
    this.brandRatings$ =  this.dashboardService.getBrandRatings()
    .pipe(map((results) => {
      for (const result of results) {
        const marginTop = `${Math.abs((result.ratings / 1000) * 2 - 50)}px`;
        result.marginTop = marginTop;
      }
      return results;
    }));
  }

}
