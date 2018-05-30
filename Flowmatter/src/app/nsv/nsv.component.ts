import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nsv',
  templateUrl: './nsv.component.html',
  styleUrls: ['./nsv.component.css']
})
export class NsvComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

 
    displayedColumns = ['position', 'name', 'weight', 'symbol','symbol1'];
    dataSource = ELEMENT_DATA;
  }
  
  export interface PeriodicElement {
    name: string;
    position: number;
    weight: string;
    symbol: string;
    symbol1:string;
  }
  
  const ELEMENT_DATA: PeriodicElement[] = [
    {position: 1, name: 'Course', weight: 'active', symbol: 'Edit',symbol1:'x'},
    
  ];
