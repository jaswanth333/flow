import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rdbms',
  templateUrl: './rdbms.component.html',
  styleUrls: ['./rdbms.component.css']
})
export class RdbmsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  selectedValue:string;

  source = [
    {srcName: 'MySql',  value: 'mysql'},
    {srcName: 'SQL Server', value: 'sql'},
    {srcName: 'Oracle', value: 'orcl'}
  ];

}


