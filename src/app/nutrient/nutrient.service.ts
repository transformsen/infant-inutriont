import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BrandMostNutrient, NutrientPrcentage } from '../model/nutrient.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NutrientService {

  apiUrl: string = environment.apiUrl;

  constructor(private httpClinet: HttpClient) { }

  getBrandMostNutrient(): Observable<BrandMostNutrient[]> {
    return this.httpClinet.get<BrandMostNutrient[]>(`${this.apiUrl}/brand-most-nutrient`);
  }

  getNutrientPrcentage(product: string): Observable<NutrientPrcentage[]> {
    return this.httpClinet.get<NutrientPrcentage[]>(`${this.apiUrl}/nutrient-percentage?product=${product}`);
  }

}
