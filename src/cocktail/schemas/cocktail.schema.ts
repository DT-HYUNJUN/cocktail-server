import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CocktailDocument = Cocktail & Document;

@Schema()
export class Cocktail {
  @Prop({ required: true })
  idDrink: string;

  @Prop({ required: true })
  strDrink: string;

  @Prop({ required: true })
  strCategory: string;

  @Prop({ required: true })
  strAlcoholic: string;

  @Prop({ required: true })
  strGlass: string;

  @Prop({ required: true })
  strInstructions: string;

  @Prop()
  strDrinkThumb: string;

  @Prop({ required: true })
  ingredients: { id: number; strIngredient: string }[];

  @Prop({ required: true })
  measures: { id: number; strMeasure: string }[];
}

export const CocktailSchema = SchemaFactory.createForClass(Cocktail);
