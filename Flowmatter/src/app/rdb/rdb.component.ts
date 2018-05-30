import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rdb',
  templateUrl: './rdb.component.html',
  styleUrls: ['./rdb.component.css']
})
export class RdbComponent implements OnInit {

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
