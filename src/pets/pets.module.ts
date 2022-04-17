import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { SpeciesModule } from 'src/species/species.module'
import { UsersModule } from 'src/users/users.module'
import { Pet } from './pet.entity'
import { PetsController } from './pets.controller'
import { PetsService } from './pets.service'

@Module({
  imports: [TypeOrmModule.forFeature([Pet]), UsersModule, SpeciesModule],
  controllers: [PetsController],
  providers: [PetsService],
})
export class PetsModule {}
