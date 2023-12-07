import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RecipeService } from '../services/recipe.service'; 
import { AddRecipePageModule } from './add-recipe.module';
@Component({
  selector: 'app-add-recipe-form',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss'],
})
export class AddRecipeFormComponent {
  newRecipe: any = {
    ingredients: [],       // Initialize ingredients as an empty array
    instructions: [],      // Initialize instructions as an empty array
  };

  constructor(private recipeService: RecipeService, private router: Router) {}

  addRecipe() {
    // Generate an auto-incrementing ID (you can use a better logic based on your backend)
    const id = (this.recipeService.recipes.length + 1).toString();
    
    const recipeToAdd = {
      id,
      title: this.newRecipe.title,
      category: this.newRecipe.category,
      Main: this.newRecipe.Main,
      description: this.newRecipe.description,
      ingredients: this.newRecipe.ingredients,
      instructions: this.newRecipe.instructions,
      preparationTime: this.newRecipe.preparationTime,
      calories: this.newRecipe.calories,
      servings: this.newRecipe.servings,
      imageUrl: this.newRecipe.imageUrl,
      youtube: this.newRecipe.youtube,
    };

    this.recipeService.addRecipe(recipeToAdd);

    // Optionally, you can reset the form or navigate back to the recipe list
    this.newRecipe = {}; // Uncomment this line to reset the form
    this.router.navigate(['/']); // Change this line to navigate where you want
  }

  addIngredient() {
    this.newRecipe.ingredients.push('');
  }
  
  addInstruction() {
    this.newRecipe.instructions.push('');
  }
  
}
