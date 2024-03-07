import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { PrismaModule } from './prisma/prisma.module';
import { AppResolver } from './app.resolver';
import { UsersModule } from './users/users.module';
import { RecipesModule } from './recipes/recipes.module';
import { InstructionsModule } from './instructions/instructions.module';
import { IngredientsModule } from './ingredients/ingredients.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
    }),
    PrismaModule,
    UsersModule,
    RecipesModule,
    InstructionsModule,
    IngredientsModule,
  ],
  controllers: [AppController],
  providers: [AppService, AppResolver],
})
export class AppModule {}
