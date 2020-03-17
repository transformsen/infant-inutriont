import { Component, OnInit } from '@angular/core';
import { ProductInformationService } from '../product-information.service';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product-information';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { switchMap, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  constructor(private productInformationService: ProductInformationService,
              private router: Router) { }
  productList$: Observable<Product[]>;
  productSearchInput: FormControl = new FormControl('');

  ngOnInit(): void {
    this.productList$ =  this.productSearchInput.valueChanges.pipe(
      startWith(''),
      switchMap((product => this.productInformationService.getProducts(product)))
    );
  }

  viewDetails(name: string) {
    this.router.navigate([`product-information/details/${name}`]);
  }

}
