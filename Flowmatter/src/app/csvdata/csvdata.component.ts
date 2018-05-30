import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-csvdata',
  templateUrl: './csvdata.component.html',
  styleUrls: ['./csvdata.component.css']
})
export class CsvdataComponent implements OnInit {
selectedSource:any;
  constructor() { }

  ngOnInit() {
  }

  selectedValue: string;

  source = [
    {srcName: 'Manual',  value: 'mysql'},
    {srcName: 'SFTP', value: 'sql'},
    
  ];
}