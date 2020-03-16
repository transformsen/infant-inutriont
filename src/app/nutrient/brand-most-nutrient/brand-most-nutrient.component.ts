import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BrandMostNutrient } from 'src/app/model/nutrient.interface';
import { NutrientService } from '../nutrient.service';

@Component({
  selector: 'app-brand-most-nutrient',
  templateUrl: './brand-most-nutrient.component.html',
  styleUrls: ['./brand-most-nutrient.component.scss']
})
export class BrandMostNutrientComponent implements OnInit {

  brandMostNutrient$: Observable<BrandMostNutrient[]>;

  constructor(private nutrientService: NutrientService) { }

  ngOnInit(): void {
    this.brandMostNutrient$ = this.nutrientService.getBrandMostNutrient();
  }

}
