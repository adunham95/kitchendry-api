import { InputType, Field } from '@nestjs/graphql';
import { IsInt, IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateIngredientInput {
  @IsInt()
  @IsNotEmpty()
  @Field()
  recipeID: number;

  @IsString()
  @IsNotEmpty()
  @Field()
  refID: string;

  @IsString()
  @IsNotEmpty()
  @Field()
  instructionRefID: string;

  @IsString()
  @IsNotEmpty()
  @Field()
  name: string;

  @IsInt()
  @IsNotEmpty()
  @Field()
  count: number;

  @IsString()
  @IsNotEmpty()
  @Field()
  type: string;
}
