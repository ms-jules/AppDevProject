
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AddRecipeFormComponent } from './add-recipe.component';
import { RecipeService } from '../services/recipe.service';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AddRecipeFormComponent,
  },
];
@NgModule({
  declarations: [AddRecipeFormComponent],
  imports: [
    CommonModule,
    FormsModule,  
    IonicModule,
    RouterModule.forChild(routes),
  ],
  entryComponents: [AddRecipeFormComponent]
})
export class AddRecipePageModule {}


