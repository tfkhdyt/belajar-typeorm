import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { UsersModule } from './users/users.module'
import { config } from '../ormconfig'
import { ConfigModule } from '@nestjs/config'
import { PetsModule } from './pets/pets.module'

@Module({
  imports: [
    UsersModule,
    TypeOrmModule.forRoot(config),
    ConfigModule.forRoot({ isGlobal: true }),
    PetsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
