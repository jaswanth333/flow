import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-next',
  templateUrl: './next.component.html',
  styleUrls: ['./next.component.css']
})
export class NextComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  displayedColumns = ['position', 'name', 'weight', 'symbol','symbol1','symbol2','symbol3'];
  dataSource = ELEMENT_DATA;
  

}



export interface Element {
  name: string;
  position: string;
  weight: string;
  symbol: string;
  symbol1: string;
  symbol2: string;
  symbol3: string;
}

const ELEMENT_DATA: Element[] = [
  {position: '', name: '', weight: '', symbol: '',symbol1: '',symbol2: '',symbol3: ''},
  
];

