import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-up-down-indication',
  templateUrl: './up-down-indication.component.html',
  styleUrls: ['./up-down-indication.component.scss']
})
export class UpDownIndicationComponent implements OnInit {

  @Input() data: number;

  isPositive:boolean = false;
  constructor() { }

  ngOnInit(): void {
    if(this.data> 0 ){
      this.isPositive = true
    }
  }

}
