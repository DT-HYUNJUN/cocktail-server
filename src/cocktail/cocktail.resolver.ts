import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CocktailService } from './cocktail.service';
import { Cocktail } from './schemas/cocktail.schema';
import { CreateCocktailDto } from './dto/create-cocktail.dto';

@Resolver((of) => Cocktail)
export class CocktailResolver {
  constructor(private readonly cocktailService: CocktailService) {}

  @Query((returns) => [Cocktail])
  async cocktails() {
    return this.cocktailService.findAll();
  }

  @Mutation((returns) => Cocktail)
  async createCocktail(
    @Args('createCocktailInput') createCocktailDto: CreateCocktailDto,
  ) {
    return this.cocktailService.create(createCocktailDto);
  }
}
