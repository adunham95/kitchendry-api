import { ObjectType, Field, GraphQLISODateTime } from '@nestjs/graphql';
import { User } from '@prisma/client';

@ObjectType()
export class UserEntity implements User {
  constructor(partial: Partial<UserEntity>) {
    Object.assign(this, partial);
  }

  @Field()
  id: number;

  @Field(() => String)
  firstName: string;

  @Field(() => String)
  lastName: string;

  @Field(() => String)
  email: string;

  @Field(() => GraphQLISODateTime)
  createdAt: Date;

  @Field(() => GraphQLISODateTime)
  updatedAt: Date;

  // @Exclude()
  password: string;
}
