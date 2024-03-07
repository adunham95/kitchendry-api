import { ObjectType, Field, GraphQLISODateTime } from '@nestjs/graphql';
import { Recipe as RecipeORM } from '@prisma/client';
import { Ingredient } from 'src/ingredients/entities/ingredient.entity';
import { Instruction } from 'src/instructions/entities/instruction.entity';

@ObjectType()
export class Recipe implements RecipeORM {
  @Field()
  id: number;

  @Field()
  userID: number;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  servings: number;

  @Field(() => GraphQLISODateTime)
  createdAt: Date;

  @Field(() => GraphQLISODateTime)
  updatedAt: Date;

  @Field(() => [Instruction])
  instructions?: Instruction[];

  @Field(() => [Ingredient])
  ingredients?: Ingredient[];
}
