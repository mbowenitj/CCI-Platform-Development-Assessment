import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {
  public data: any;

  constructor() {
    this.data = [
      { Value: 25, Label: "Residential" },
      { Value: 12, Label: "Heating" },
      { Value: 11, Label: "Lighting" },
      { Value: 18, Label: "Other" },
      { Value: 37, Label: "Cooling" }
  ];
   }

  ngOnInit(): void {
  }



}
