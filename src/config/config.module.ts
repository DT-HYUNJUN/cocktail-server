import { Module } from '@nestjs/common';
import { ConfigModule as AuthConfigModule } from '@nestjs/config';

@Module({
  imports: [
    AuthConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
})
export class ConfigModule {}
