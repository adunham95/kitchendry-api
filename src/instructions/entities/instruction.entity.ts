import { ObjectType, Field } from '@nestjs/graphql';
import { Instruction as InstructionORM } from '@prisma/client';

@ObjectType()
export class Instruction implements InstructionORM {
  @Field()
  id: number;

  @Field()
  recipeID: number;

  @Field()
  refID: string;

  @Field()
  description: string;

  @Field()
  order: number;
}
