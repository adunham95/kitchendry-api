import { InputType, Field } from '@nestjs/graphql';
import { IsInt, IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateRecipeInput {
  @IsString()
  @IsNotEmpty()
  @Field()
  userID: number;

  @IsString()
  @IsNotEmpty()
  @Field()
  name: string;

  @IsString()
  @IsNotEmpty()
  @Field()
  description: string;

  @IsInt()
  @IsNotEmpty()
  @Field()
  servings: number;
}
