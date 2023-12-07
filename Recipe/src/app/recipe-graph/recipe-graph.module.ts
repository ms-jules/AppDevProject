// recipe-graph.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeGraphComponent } from './recipe-graph.component';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [RecipeGraphComponent],
  imports: [CommonModule, NgChartsModule],
  exports: [RecipeGraphComponent],
})
export class RecipeGraphModule {}
