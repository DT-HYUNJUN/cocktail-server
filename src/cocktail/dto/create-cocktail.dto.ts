export class CreateCocktailDto {
  readonly strDrink: string;
  readonly strCategory: string;
  readonly strAlcoholic: boolean;
  readonly strGlass: string;
  readonly strDescription: string;
  strDrinkThumb: string;
  readonly ingredients: {
    id: number;
    strIngredient: string;
    strMeasure: string;
  }[];
  readonly instructions: { id: number; strInstruction: string }[];
}
