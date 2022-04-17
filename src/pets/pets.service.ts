import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { SpeciesService } from 'src/species/species.service'
import { UsersService } from 'src/users/users.service'
import { Repository } from 'typeorm'
import { Pet } from './pet.entity'

@Injectable()
export class PetsService {
  constructor(
    @InjectRepository(Pet) private readonly petsRepo: Repository<Pet>,
    private readonly usersService: UsersService,
    private readonly speciesService: SpeciesService,
  ) {}

  async findAll() {
    const pets = await this.petsRepo
      .find({
        order: {
          id: 'ASC',
        },
        relations: ['species'],
      })
      .catch((err) => {
        throw new BadRequestException(err.message)
      })
    if (pets.length === 0 || !pets) throw new NotFoundException()

    return pets
  }

  async findById(petId: number) {
    const pet = await this.petsRepo.findOneOrFail(petId).catch((err) => {
      throw new NotFoundException(err.message)
    })
    return pet
  }

  async insert(name: string, userId: number, speciesId: number) {
    const user = await this.usersService.findById(userId)
    const species = await this.speciesService.findById(speciesId)
    const pet = this.petsRepo.create({ name, user, species })
    return this.petsRepo.save(pet).catch((err) => {
      throw new BadRequestException(err)
    })
  }

  async update(petId: number, name?: string, speciesId?: number) {
    const pet = await this.findById(petId)

    if (name) pet.name = name
    if (speciesId) {
      const species = await this.speciesService.findById(speciesId)
      pet.species = species
    }

    return this.petsRepo.save(pet).catch((err) => {
      throw new BadRequestException(err)
    })
  }
}
