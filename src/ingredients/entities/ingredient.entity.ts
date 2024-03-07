import { ObjectType, Field } from '@nestjs/graphql';
import { Ingredient as IngredientORM } from '@prisma/client';

@ObjectType()
export class Ingredient implements IngredientORM {
  @Field()
  id: number;

  @Field()
  recipeID: number;

  @Field()
  refID: string;

  @Field()
  instructionRefID: string;

  @Field()
  name: string;

  @Field()
  count: number;

  @Field()
  type: string;
}
