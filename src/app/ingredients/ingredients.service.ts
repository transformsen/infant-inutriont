import { Injectable } from '@angular/core';
import { Ingredients } from '../model/ingredients.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IngredientsService {
  
  apiUrl: string = environment.apiUrl;
  constructor(private httpClient: HttpClient) { }

  getIngredients(product: string, ingredient: string): Observable<Ingredients[]> {
    return this.httpClient.get<Ingredients[]>(`${this.apiUrl}/ingredients?product=${product}&ingredient=${ingredient}`)
  }

  getProductsList(): Observable<string[]> {
    return this.httpClient.get<string[]>(`${this.apiUrl}/products-list`)
  }

}
