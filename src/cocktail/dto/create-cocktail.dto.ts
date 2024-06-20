import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateCocktailDto {
  @Field()
  readonly strDrink: string;

  @Field()
  readonly strCategory: string;

  @Field()
  readonly strAlcoholic: boolean;

  @Field()
  readonly strGlass: string;

  @Field()
  readonly strDescription: string;

  @Field({ nullable: true })
  strDrinkThumb: string;

  @Field((type) => [IngredientInput])
  readonly ingredients: IngredientInput[];

  @Field((type) => [InstructionInput])
  readonly instructions: InstructionInput[];
}

@InputType()
class IngredientInput {
  @Field((type) => Int)
  readonly id: number;

  @Field()
  readonly strIngredient: string;

  @Field()
  readonly strMeasure: string;
}

@InputType()
class InstructionInput {
  @Field((type) => Int)
  readonly id: number;

  @Field()
  readonly strInstruction: string;
}
