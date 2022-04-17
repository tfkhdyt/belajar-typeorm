import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { User } from './user.entity'

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly usersRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    const users = await this.usersRepository
      .find({
        order: {
          id: 'ASC',
        },
      })
      .catch((err) => {
        throw new BadRequestException(err.message)
      })

    if (users.length === 0 || !users) throw new NotFoundException()
    return users
  }

  async findById(id: number): Promise<User> {
    try {
      const user = await this.usersRepository.findOneOrFail(id)
      return user
    } catch (err) {
      throw new NotFoundException(`User with id (${id}) is not found`)
    }
  }

  createUser(firstName: string, lastName?: string): Promise<User> {
    const newUser = this.usersRepository.create({
      firstName,
      lastName,
    })

    return this.usersRepository.save(newUser)
  }

  async updateUser(id: number, firstName?: string, lastName?: string) {
    const user = await this.findById(id)

    if (firstName) user.firstName = firstName
    if (lastName) user.lastName = lastName

    return this.usersRepository.save(user)
  }

  async deleteUser(id: number): Promise<User> {
    const user = await this.findById(id)
    return this.usersRepository.remove(user)
  }
}
