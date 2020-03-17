import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { Observable } from 'rxjs';
import { RatingDetails } from 'src/app/model/dashboard.interface';
import { ColDef } from 'ag-grid-community';


@Component({
  selector: 'app-brand-ratings-details',
  templateUrl: './brand-ratings-details.component.html',
  styleUrls: ['./brand-ratings-details.component.scss']
})
export class BrandRatingsDetailsComponent implements OnInit {

  columnDefs: ColDef[] = [
    {headerName: 'Product', headerClass:'aggrid-font-uppercase', 
            cellClass:'aggrid-font-uppercase', field: 'product', sort: "desc" },
    {headerName: 'Rank', headerClass:'aggrid-font-uppercase', 
            cellClass:'aggrid-font-uppercase', field: 'rank',
        cellRenderer: upDownCellRenderer},
    {headerName: 'Price', headerClass:'aggrid-font-uppercase', 
            cellClass:'aggrid-font-uppercase', field: 'price'},
    {headerName: 'Size', headerClass:'aggrid-font-uppercase', 
            cellClass:'aggrid-font-uppercase', field: 'size'},
    {headerName: 'Weight', headerClass:'aggrid-font-uppercase', 
            cellClass:'aggrid-font-uppercase', field: 'weight'},
    {headerName: 'Star 1', headerClass:'aggrid-font-uppercase', 
            cellClass:'aggrid-font-uppercase', field: 'star1'},
    {headerName: 'Star 2', headerClass:'aggrid-font-uppercase', 
            cellClass:'aggrid-font-uppercase', field: 'star2'},
    {headerName: 'Star 3', headerClass:'aggrid-font-uppercase', 
            cellClass:'aggrid-font-uppercase', field: 'star3'},
    {headerName: 'Star 4', headerClass:'aggrid-font-uppercase', 
            cellClass:'aggrid-font-uppercase', field: 'star4'},
    {headerName: 'Star 5', headerClass:'aggrid-font-uppercase', 
            cellClass:'aggrid-font-uppercase', field: 'star5'},
    {headerName: 'Review', headerClass:'aggrid-font-uppercase', 
            cellClass:'aggrid-font-uppercase', field: 'review',
            cellRenderer: upDownCellRenderer},
  ];

  defaultColDef = {
    sortable: true
  }

  ratingDetails$: Observable<RatingDetails[]>
  constructor(
    private dashboardService: DashboardService
  ) { }

  ngOnInit(): void {
    this.ratingDetails$ = this.dashboardService.getRatingDetails();
  }

  onGridReady(param){
    param.api.sizeColumnsToFit();
}

}

export const upDownCellRenderer = (param)=>{
        if(param.value< 0 ){
          return `${Math.abs(param.value)}  <i class="fa fa-caret-down down"></i>`
        }else{
          return `${param.value}  <i class="fa fa-caret-up up"></i>`
        }
}