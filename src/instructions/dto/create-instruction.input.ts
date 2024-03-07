import { InputType, Field } from '@nestjs/graphql';
import { IsInt, IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateInstructionInput {
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
  description: string;

  @IsInt()
  @IsNotEmpty()
  @Field()
  order: number;
}
