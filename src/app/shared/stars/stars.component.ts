import {Component, Input, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit,OnChanges {
@Input() rate:number=0;
width:number=100;
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges() {
    this.width=this.rate*15;
  }

}
