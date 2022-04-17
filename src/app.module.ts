import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { UsersModule } from './users/users.module'
import config from '../ormconfig'
import { ConfigModule } from '@nestjs/config'
import { PetsModule } from './pets/pets.module'
import { SpeciesModule } from './species/species.module'

@Module({
  imports: [
    UsersModule,
    TypeOrmModule.forRoot(config),
    ConfigModule.forRoot({ isGlobal: true }),
    PetsModule,
    SpeciesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
