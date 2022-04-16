import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { UsersService } from 'src/users/users.service'
import { Repository } from 'typeorm'
import { Pet } from './pet.entity'

@Injectable()
export class PetsService {
  constructor(
    @InjectRepository(Pet) private readonly petsRepo: Repository<Pet>,
    private readonly usersService: UsersService,
  ) {}

  async findAll() {
    const pets = await this.petsRepo.find().catch((err) => {
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

  async insert(name: string, userId: number) {
    const user = await this.usersService.findById(userId)
    const pet = this.petsRepo.create({ name, user })
    return this.petsRepo.save(pet).catch((err) => {
      throw new BadRequestException(err)
    })
  }

  async update(petId: number, name?: string) {
    const pet = await this.findById(petId)

    if (name) pet.name = name

    return this.petsRepo.save(pet).catch((err) => {
      throw new BadRequestException(err)
    })
  }
}
