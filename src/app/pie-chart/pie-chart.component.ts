import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent {
  public chart: any;

  ngOnInit(): void {
    this.createChart();
  }
createChart() {
    this.chart = new Chart("MyChart", {
      type: 'pie',
      // type: 'doughnut',
      data: {
        labels: [
          'Wheat',
          'Maize',
          'Rice',
          'Sugarcane',
          'Cotton'
        ],
        datasets: [{
          label: 'Area and Production of Important Crops (2020-21)',
          data: [9168.2, 1417.8, 3335.1, 1165.0, 2078.9],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(153, 102, 255)'
          ],
          hoverOffset: 4
        }]
      },
      options: {
        aspectRatio: 2.5,
        plugins: {
          title: {
            display: true,
            text: 'Area and Production of Important Crops (2020-21)',
            font: {
              size: 24,
              weight: 'bold',
              family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"
            },
            padding: {
              top: 10,
              bottom: 30
            }
          },
          legend: {
            display: true,
            labels: {
              font: {
                size: 14,
                family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"
              }
            }
          }
        }
      }
    });
  }
}
