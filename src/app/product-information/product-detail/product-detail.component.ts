import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product-information';
import { ActivatedRoute } from '@angular/router';
import { IngredientsService } from 'src/app/ingredients/ingredients.service';
import { switchMap, tap } from 'rxjs/operators';
import { zip, Observable } from 'rxjs';
import { ProductInformationService } from '../product-information.service';
import { Ingredients } from 'src/app/model/ingredients.interface';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  productDetail$: Observable<(Product | Ingredients[])[]>;
  productName: string;

  constructor(private activatedRoute: ActivatedRoute,
              private ingredientsService: IngredientsService,
              private productInformationService: ProductInformationService) { }

  ngOnInit(): void {
    this.productDetail$ = this.activatedRoute.params.pipe(
      switchMap((param) => {
        this.productName = param.name;
        return zip(this.ingredientsService.getIngredients(this.productName, ''),
            this.productInformationService.getProductDetails(this.productName));
      })
    );
  }
}
