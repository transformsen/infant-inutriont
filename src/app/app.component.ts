import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'infant-inutriont';
  background: ThemePalette = 'accent';
  navLinks: any[] = [
    {id: 'dashboard', path: './dashboard', label: 'Dashboard'},
    {id: 'nutrient', path: './nutrient', label: 'Nutrient List'},
    {id: 'ingredients', path: './ingredients', label: 'Ingredients List'},
    {id: 'product-information', path: './product-information', label: 'Product Information'}
  ];
  activeLink: string = this.navLinks[0].id;
}
