import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {
  options = [
    { name: 'Bangalore', id: 1 },
    { name: 'Chennai', id: 2 },
    { name: 'Erode', id: 3 },
    { name: 'Bangkok', id: 4 },
    { name: 'Jammu', id: 5 },
    { name: 'Madurai', id: 6 },
    { name: 'Goa', id: 7 },
    { name: 'Mumbai', id: 8 },
    { name: 'Kolkata', id: 9 },
    { name: 'Shillong', id: 10 },
    { name: 'Cochin', id: 11 },
    { name: 'Mysore', id: 12 },
  ];
  currentSelection: any = {
    name: 'Chennai'
  };
}
