// recipe-graph.component.ts

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-graph',
  template: `
    <div>
      <div *ngIf="barChartData.length > 0">
        <canvas
          baseChart
          [datasets]="barChartData"
          [labels]="barChartLabels"
          [options]="barChartOptions"
          [legend]="barChartLegend"
          [chartType]="barChartType"
        ></canvas>
      </div>
      <div *ngIf="barChartData.length === 0">
        No data available.
      </div>
    </div>
  `,
  styles: [],
})
export class RecipeGraphComponent {
  @Input() barChartData: any[] = [];
  @Input() barChartLabels: string[] = [];
  @Input() barChartOptions: any = {}; // You might want to adjust the type based on your actual options
  @Input() barChartLegend: boolean = true;
  @Input() barChartType: string = 'bar';
}
