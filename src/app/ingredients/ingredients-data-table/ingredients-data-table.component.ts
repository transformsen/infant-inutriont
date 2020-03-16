import { Component, OnInit } from '@angular/core';
import { IngredientsService } from '../ingredients.service';
import { Observable, combineLatest } from 'rxjs';
import { startWith, switchMap, debounceTime } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { Ingredients } from 'src/app/model/ingredients.interface';

@Component({
  selector: 'app-ingredients-data-table',
  templateUrl: './ingredients-data-table.component.html',
  styleUrls: ['./ingredients-data-table.component.scss']
})
export class IngredientsDataTableComponent implements OnInit {

  products$: Observable<string[]>;
  ingredients$: Observable<Ingredients[]>;

  productSearchInput : FormControl = new FormControl('enfami')
  ingredientSearchInput: FormControl = new FormControl('')

  constructor(private ingredientsService: IngredientsService) { }

  ngOnInit(): void {
    this.ingredients$ = combineLatest([
      this.productSearchInput.valueChanges.pipe(startWith('')),
      this.ingredientSearchInput.valueChanges.pipe(startWith(''))
    ]).pipe(debounceTime(400), switchMap((search)=>{
      return this.ingredientsService.getIngredients(search[0], search[1])
    }))
    
    this.products$ = this.ingredientsService.getProductsList();
  }

}
