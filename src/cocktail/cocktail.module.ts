import { Module } from '@nestjs/common';
import { CocktailController } from './cocktail.controller';
import { CocktailService } from './cocktail.service';
// import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { Cocktail, CocktailSchema } from './schemas/cocktail.schema';
import { CocktailResolver } from './cocktail.resolver';
import { ConfigModule } from 'src/config/config.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Cocktail.name, schema: CocktailSchema },
    ]),
    // ThrottlerModule.forRootAsync({
    //   imports: [ConfigModule],
    //   useFactory: (configService: ConfigService) => [
    //     {
    //       ttl: configService.getOrThrow('UPLOAD_RATE_TTL'),
    //       limit: configService.getOrThrow('UPLOAD_RATE_LIMIT'),
    //     },
    //   ],
    //   inject: [ConfigService],
    // }),
  ],
  controllers: [CocktailController],
  providers: [
    CocktailService,
    // {
    //   provide: APP_GUARD,
    //   useClass: ThrottlerGuard,
    // },
    CocktailResolver,
  ],
})
export class CocktailModule {}
