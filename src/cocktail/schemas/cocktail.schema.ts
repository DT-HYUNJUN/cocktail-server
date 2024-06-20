import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ObjectType, Field, Int } from '@nestjs/graphql';

export type CocktailDocument = Cocktail & Document;

@Schema()
@ObjectType()
export class Cocktail {
  @Field()
  @Prop({ required: true })
  strDrink: string;

  @Field()
  @Prop({ required: true })
  strCategory: string;

  @Field()
  @Prop({ required: true })
  strAlcoholic: boolean;

  @Field()
  @Prop({ required: true })
  strGlass: string;

  @Field()
  @Prop({ required: true })
  strDescription: string;

  @Field({ nullable: true })
  @Prop()
  strDrinkThumb: string;

  @Field((type) => [Ingredient])
  @Prop({ required: true })
  ingredients: Ingredient[];

  @Field((type) => [Instruction])
  @Prop({ required: true })
  instructions: Instruction[];
}

@ObjectType()
class Ingredient {
  @Field((type) => Int)
  id: number;

  @Field()
  strIngredient: string;

  @Field()
  strMeasure: string;
}

@ObjectType()
class Instruction {
  @Field((type) => Int)
  id: number;

  @Field()
  strInstruction: string;
}

export const CocktailSchema = SchemaFactory.createForClass(Cocktail);
