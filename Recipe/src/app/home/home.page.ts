import { Component,} from '@angular/core';
import { RecipeService } from '../services/recipe.service';
import { Router } from '@angular/router'
import { MenuController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  recipes: any[];
  filteredRecipes: any[];
  searchTerm: string = '';
  isSearchBarVisible: boolean = false;
  showSubCategories: boolean = false;
  showSubIngredients: boolean =false;
  isMenuVisible: boolean = true;
  navigateToAddrecipe: any;
  recipeCountData: number[] = [];
  recipeCountLabels: string[] = [];
  recipeCountType: string = 'bar';
  recipeGraphData: any[] = []; // Declare recipeGraphData here
  selectedCategory: string;
  constructor(private recipeService: RecipeService, private router: Router,private menuController: MenuController,private navCtrl: NavController) {
    this.recipes = this.recipeService.getAllRecipes();
    this.filteredRecipes = this.shuffleRecipes([...this.recipes]);
    this.recipes = this.recipeService.getAllRecipes();
    this.filteredRecipes = this.shuffleRecipes([...this.recipes]);
    this.recipeGraphData = this.recipes;
  }

  ngOnInit() {
    this.recipes = this.recipeService.getAllRecipes();
    this.filteredRecipes = this.shuffleRecipes([...this.recipes]);
    this.initializeChartData();
  }

  private initializeChartData() {

    const categories = Array.from(new Set(this.recipes.map((recipe) => recipe.category)));
    this.recipeCountLabels = categories;
    this.recipeCountData = categories.map(
      (category) => this.recipes.filter((recipe) => recipe.category === category).length
    );
  }

  private updateRecipeGraphData(): void {
    if (this.selectedCategory) {
      this.recipeGraphData = this.recipes.filter(recipe => recipe.category === this.selectedCategory);
    } else {
      this.recipeGraphData = this.recipes;
    }
  }

  toggleSearchBar() {
    this.isSearchBarVisible = !this.isSearchBarVisible;
    this.isMenuVisible = !this.isSearchBarVisible;
    if (!this.isSearchBarVisible) {
      this.searchTerm = '';
    }
  }

  filterRecipes() {
    this.filteredRecipes = this.shuffleRecipes(
      this.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(this.searchTerm.toLowerCase())
      )
    );
  }

  viewRecipeDetails(recipeId: string) {
    this.router.navigate(['/recipe', recipeId]);
  }

  private shuffleRecipes(array: any[]): any[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  toggleMenu() {
    if (this.isMenuVisible) {
      this.menuController.toggle('main-menu');
    }
  }
  toggleCategoryMenu() {
    this.showSubCategories = !this.showSubCategories;
  }
  toggleIngredientsMenu() { 
    this.showSubIngredients = !this.showSubIngredients;
  }
  navigateTo(route: string) { 
    this.navCtrl.navigateForward(route);
  }

  filterRecipesBycategory(Category: string) {
    this.filteredRecipes = this.shuffleRecipes(
      this.recipes.filter((recipe) => recipe.Category === Category)
    );
  }


  filterRecipesByIngredients(Main: string) {
    this.filteredRecipes = this.shuffleRecipes(
      this.recipes.filter((recipe) => recipe.Main === Main)
    );
  }

  resetFilters() {
    this.showSubCategories = false;
    this.showSubIngredients = false;
    this.searchTerm = '';
    this.filterRecipes();
  }
}
