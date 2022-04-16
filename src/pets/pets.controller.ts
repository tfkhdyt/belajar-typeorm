import { Body, Controller, Get, Post } from '@nestjs/common'
import { InsertDataDto } from './dto/insert-data.dto'
import { PetsService } from './pets.service'

@Controller('pets')
export class PetsController {
  constructor(private readonly petsService: PetsService) {}

  @Get()
  findAll() {
    return this.petsService.findAll()
  }

  @Post()
  insert(@Body() insertDataDto: InsertDataDto) {
    const { name, userId } = insertDataDto
  }
}
