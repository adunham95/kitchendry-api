import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString, MinLength } from 'class-validator';

@InputType()
export class CreateUserInput {
  @IsString()
  @IsNotEmpty()
  @Field()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  @Field()
  lastName: string;

  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  @Field()
  password: string;
}
