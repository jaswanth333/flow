import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
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

}
