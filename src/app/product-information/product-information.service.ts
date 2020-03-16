import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Product } from '../model/product-information';

@Injectable({
  providedIn: 'root'
})
export class ProductInformationService {
  
  apiUrl: string = environment.apiUrl;
  constructor(private httpClient: HttpClient) { }

  getProducts(product: string): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${this.apiUrl}/products?product=${product}`)
  }

  getProductDetails(productName: string): Observable<Product> {
    return this.httpClient.get<Product>(`${this.apiUrl}/product?productName=${productName}`)
  }
}
