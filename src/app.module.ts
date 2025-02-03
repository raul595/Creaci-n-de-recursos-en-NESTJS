import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { PokemonModule } from './pokemon/pokemon.module';
import { PeliculasModule } from './peliculas/peliculas.module';

@Module({
  imports: [ConfigModule.forRoot({isGlobal:true,}), 
    TypeOrmModule.forRoot({
      type: 'mysql',
      name: 'pokemon',
      host: process.env.DB_HOST, 
      port: 3306,
      username: process.env.USUARIO,
      password: process.env.PASSWORD,
      database: process.env.DBNAME_POKEMON,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize:true
    }),
  TypeOrmModule.forRoot({
    type: 'mysql',
    name: 'peliculas',
    host: process.env.DB_HOST, 
    port: 3306,
    username: process.env.USUARIO,
    password: process.env.PASSWORD,
    database: process.env.DBNAME_PELICULAS,
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: false,
  }),
  PokemonModule,
  PeliculasModule,
],
controllers: [],
providers: [],
})
export class AppModule {}




