import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way',
  templateUrl: './two-way.component.html',
  styleUrls: ['./two-way.component.css']
})
export class TwoWayComponent implements OnInit {

  name = '';
  constructor() { }

  ngOnInit(): void {
  }

  onChange(e: any) {
    console.log(e.target.value);
    this.name = e.target.value;
  }

}
