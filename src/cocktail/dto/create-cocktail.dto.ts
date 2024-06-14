export class CreateCocktailDto {
  readonly idDrink: string;
  readonly strDrink: string;
  readonly strCategory: string;
  readonly strAlcoholic: string;
  readonly strGlass: string;
  readonly strInstructions: string;
  strDrinkThumb: string;
  readonly ingredients: { id: number; strIngredient: string }[];
  readonly measures: { id: number; strMeasure: string }[];
}
