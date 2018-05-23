import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-import',
  templateUrl: './import.component.html',
  styleUrls: ['./import.component.css']
})
export class ImportComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  displayedColumns = ['position', 'name', 'weight', 'symbol','symbol1','symbol2','symbol3','symbol4','symbol5','symbol6','symbol7','symbol8'];
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
  symbol4: string;
  symbol5: string;
  symbol6: string;
  symbol7: string;
  symbol8: string;

}

const ELEMENT_DATA: Element[] = [
  {position: 'csvConnector', name: 'course.csv', weight: 'ff.course', symbol: '08-03-2018 17:56:12',symbol1: '08-03-2018 17:56:16',symbol2: 'finished',symbol3: 'executed successfully',symbol4: '14',symbol5: '08-03-2018 17:56:12',symbol6: '108',symbol7: '108',symbol8: '0'},
  
];

