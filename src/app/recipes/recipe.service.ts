import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
        'A Test Recipe', 
        'This is simply a test', 
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3s9LUH08yNEOUF1Ig9rxPkmtIIQOdPsSpew&usqp=CAU',
        [ new Ingredient('Meat', 1),
          new Ingredient('French Fries', 20)]),
        new Recipe(
        'Another Test Recipe', 
        'This is simply a test',
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3s9LUH08yNEOUF1Ig9rxPkmtIIQOdPsSpew&usqp=CAU',
         [new Ingredient('Buns', 2),
         new Ingredient('Meat', 20)])
      ];

      constructor(private slService: ShoppingListService)
      {}
    getRecipes() {
        return this.recipes.slice();
    }
    addIngredientsTolist(ingredients: Ingredient[]){
       this.slService.addIngredients(ingredients);
    }
}