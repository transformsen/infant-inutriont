import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { BrandPriceUpdated } from 'src/app/model/dashboard.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-brand-price-updated',
  templateUrl: './brand-price-updated.component.html',
  styleUrls: ['./brand-price-updated.component.scss']
})
export class BrandPriceUpdatedComponent implements OnInit {

  brandPriceUpdated$: Observable<BrandPriceUpdated[]>
  
  constructor(
    private dashboardService: DashboardService
  ) { }

  ngOnInit(): void {
    this.brandPriceUpdated$ = this.dashboardService.getBrandPriceUpdated();
  }

}
