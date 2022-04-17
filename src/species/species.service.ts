import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Species } from './species.entity'

@Injectable()
export class SpeciesService {
  constructor(
    @InjectRepository(Species)
    private readonly speciesRepo: Repository<Species>,
  ) {}

  async findAll() {
    const species = await this.speciesRepo
      .find({
        order: {
          id: 'ASC',
        },
      })
      .catch((err) => {
        throw new BadRequestException(err)
      })

    if (species.length === 0 || !species) throw new NotFoundException()

    return species
  }

  async findById(id: number) {
    return this.speciesRepo.findOneOrFail(id).catch((err) => {
      throw new NotFoundException(err)
    })
  }

  async insert(name: string) {
    const species = this.speciesRepo.create({ name })
    return this.speciesRepo.save(species).catch((err) => {
      throw new BadRequestException(err)
    })
  }
}
