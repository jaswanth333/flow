import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nsv',
  templateUrl: './nsv.component.html',
  styleUrls: ['./nsv.component.css']
})
export class NsvComponent implements OnInit {
  name = 'Angular 5';
  myItems: any[];

  constructor() { 
    this.myItems = [
      { name: 'course', status: 'active',editconfiguration:'edit',state: true },
      
    ]
  }
  public getRowsValue(flag) {
    if (flag === null) {
      return this.myItems.length;
    } else {
      return this.myItems.filter(i => (i.state == flag)).length;
    }
  }
  ngOnInit() {
  }

}
