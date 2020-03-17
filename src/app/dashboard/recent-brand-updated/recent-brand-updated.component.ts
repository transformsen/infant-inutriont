import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RecentUpdatedBrand } from 'src/app/model/dashboard.interface';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-recent-brand-updated',
  templateUrl: './recent-brand-updated.component.html',
  styleUrls: ['./recent-brand-updated.component.scss']
})
export class RecentBrandUpdatedComponent implements OnInit {

  recentUpdatedBrand$: Observable<RecentUpdatedBrand>
  constructor(
    private dashboardService: DashboardService
  ) { }


  ngOnInit(): void {
    this.recentUpdatedBrand$ = this.dashboardService.getRecentUpdatedBrand()
  }

}
