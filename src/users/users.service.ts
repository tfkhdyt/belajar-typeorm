import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { User } from './user.entity'

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly usersRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    try {
      return this.usersRepository.find()
    } catch (err) {
      throw new NotFoundException(err.message)
    }
  }

  async findById(id: number): Promise<User> {
    try {
      const user = await this.usersRepository.findOneOrFail({ where: { id } })
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
