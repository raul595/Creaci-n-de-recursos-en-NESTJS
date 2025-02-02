import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { PokemonModule } from './pokemon/pokemon.module';
import { join } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST, 
      port: 3306,
      username: process.env.USUARIO,
      password: process.env.PASSWORD,
      database: process.env.DBNAME_POKEMON,
      entities: [join(__dirname, '**', '*.entity.{ts,js}')],
      synchronize: false,
    }),
    PokemonModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}




