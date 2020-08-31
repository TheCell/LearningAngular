import { Subject } from 'rxjs';

import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
  public ingredientsChanged = new Subject<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    // this.ingredients = this.ingredients.concat(ingredients);
    this.ingredients.push(...ingredients); // array to list and then push
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  getIngredients() {
    return this.ingredients.slice();
  }
}
