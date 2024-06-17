export class CreateCocktailDto {
  readonly strDrink: string;
  readonly strCategory: string;
  readonly strAlcoholic: boolean;
  readonly strGlass: string;
  readonly strInstructions: string;
  strDrinkThumb: string;
  readonly ingredients: { id: number; strIngredient: string }[];
  readonly measures: { id: number; strMeasure: string }[];
}
