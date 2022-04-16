import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UsersModule } from 'src/users/users.module'
import { Pet } from './pet.entity'
import { PetsController } from './pets.controller'
import { PetsService } from './pets.service'

@Module({
  imports: [TypeOrmModule.forFeature([Pet]), UsersModule],
  controllers: [PetsController],
  providers: [PetsService],
})
export class PetsModule {}
