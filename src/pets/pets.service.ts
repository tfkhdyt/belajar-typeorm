import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Pet } from './pet.entity'

@Injectable()
export class PetsService {
  constructor(
    @InjectRepository(Pet) private readonly petsRepo: Repository<Pet>
  ) {}

  async findAll() {
    const pets = await this.petsRepo.find().catch((err) => {
      throw new BadRequestException(err.message)
    })
    if (pets.length === 0 || !pets) throw new NotFoundException()

    return pets
  }

  async insert(name: string, userId: number) {
    const pet = this.petsRepo.create()
    pet.name
    return this.petsRepo.save(pet)
  }
}
