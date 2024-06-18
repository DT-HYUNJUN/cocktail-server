import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CocktailDocument = Cocktail & Document;

@Schema()
export class Cocktail {
  @Prop({ required: true })
  strDrink: string;

  @Prop({ required: true })
  strCategory: string;

  @Prop({ required: true })
  strAlcoholic: boolean;

  @Prop({ required: true })
  strGlass: string;

  @Prop({ required: true })
  strDescription: string;

  @Prop()
  strDrinkThumb: string;

  @Prop({ required: true })
  ingredients: {
    id: number;
    strIngredient: string;
    strMeasure: string;
  }[];

  @Prop({ required: true })
  instructions: { id: number; strInstruction: string }[];
}

export const CocktailSchema = SchemaFactory.createForClass(Cocktail);
