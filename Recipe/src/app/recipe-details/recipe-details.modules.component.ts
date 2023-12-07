import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { RecipeDetailsComponent } from './recipe-details.component';

const routes: Routes = [
  {
    path: '',
    component: RecipeDetailsComponent,
  },
];

@NgModule({
  declarations: [RecipeDetailsComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
})
export class RecipeDetailsModule {}
