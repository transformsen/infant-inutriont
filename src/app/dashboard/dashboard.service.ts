import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BrandTrandingInMarket, BrandPriceUpdated, RecentUpdatedBrand,
  BrandReview, BrandRatings, RatingDetails } from '../model/dashboard.interface';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  apiUrl: string = environment.apiUrl;

  constructor(private httpClinet: HttpClient) { }

  getBrandTrendingInmarket(month: string): Observable<BrandTrandingInMarket[]> {
    return this.httpClinet.get<BrandTrandingInMarket[]>(`${this.apiUrl}/brand-tranding-inmarket?month=${month}`);
  }

  getBrandPriceUpdated(): Observable<BrandPriceUpdated[]> {
    return this.httpClinet.get<BrandPriceUpdated[]>(`${this.apiUrl}/brand-price-updated`);
  }

  getRecentUpdatedBrand(): Observable<RecentUpdatedBrand> {
    return this.httpClinet.get<RecentUpdatedBrand>(`${this.apiUrl}/recent-update-brand`);
  }

  getBrandReview(brand: string): Observable<BrandReview[]> {
    return this.httpClinet.get<BrandReview[]>(`${this.apiUrl}/brand-review?brand=${brand}`);
  }

  getBrandRatings(): Observable<BrandRatings[]> {
    return this.httpClinet.get<BrandRatings[]>(`${this.apiUrl}/brand-rating`);
  }

  getRatingDetails(): Observable<RatingDetails[]> {
    return this.httpClinet.get<RatingDetails[]>(`${this.apiUrl}/rating-details`);
  }

}
