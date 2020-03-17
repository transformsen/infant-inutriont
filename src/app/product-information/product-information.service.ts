import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Product, ProductAnalysis, ProductRank, ProductSale } from '../model/product-information';

@Injectable({
  providedIn: 'root'
})
export class ProductInformationService {

  apiUrl: string = environment.apiUrl;
  constructor(private httpClient: HttpClient) { }

  getProducts(product: string): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${this.apiUrl}/products?product=${product}`);
  }

  getProductDetails(productName: string): Observable<Product> {
    return this.httpClient.get<Product>(`${this.apiUrl}/product?productName=${productName}`);
  }

  getProductAnalysis(productName: string): Observable<ProductAnalysis> {
    return this.httpClient.get<ProductAnalysis>(`${this.apiUrl}/product-analysis?productName=${productName}`);
  }

  getProductRank(productName: string): Observable<ProductRank[]> {
    return this.httpClient.get<ProductRank[]>(`${this.apiUrl}/product-rank?productName=${productName}`);
  }

  getProductSales(productName: string): Observable<ProductSale[]> {
    return this.httpClient.get<ProductSale[]>(`${this.apiUrl}/product-sale?productName=${productName}`);
  }
}
