import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-ingredients-list',
  templateUrl: './ingredients-list.component.html',
  styleUrls: ['./ingredients-list.component.scss']
})
export class IngredientsListComponent implements OnInit {

  @Input() rowData = [];

  columnDefs = [
    {headerName: 'product Ingredient', headerClass: 'aggrid-font-uppercase',
            cellClass: 'aggrid-font-uppercase', field: 'productIngredient' },
    {headerName: 'unit Ingredient', headerClass: 'aggrid-font-uppercase',
            cellClass: 'aggrid-font-uppercase', field: 'unitIngredient' },
    {headerName: 'minimal Value', headerClass: 'aggrid-font-uppercase',
            cellClass: 'aggrid-font-uppercase', field: 'minimalValue'},
    {headerName: 'maximum Value', headerClass: 'aggrid-font-uppercase',
            cellClass: 'aggrid-font-uppercase', field: 'maximumValue'}
  ];

  ngOnInit() {

  }

  onGridReady(param) {
        param.api.sizeColumnsToFit();
  }

}
