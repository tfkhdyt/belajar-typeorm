import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { User } from './user.entity'
import { UsersService } from './users.service'

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll(): Promise<User[]> {
    return this.usersService.findAll()
  }

  @Get(':userId')
  findById(@Param('userId', ParseIntPipe) userId: number): Promise<User> {
    return this.usersService.findById(userId)
  }

  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    const { firstName, lastName } = createUserDto
    return this.usersService.createUser(firstName, lastName)
  }

  @Patch(':userId')
  updateUser(
    @Param('userId', ParseIntPipe) userId: number,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    const { firstName, lastName } = updateUserDto
    return this.usersService.updateUser(userId, firstName, lastName)
  }

  @Delete(':userId')
  deleteUser(@Param('userId', ParseIntPipe) userId: number) {
    return this.usersService.deleteUser(userId)
  }
}
