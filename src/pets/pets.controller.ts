import {
  Body,
  Controller,
  Get,
  // NotImplementedException,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common'
import { InsertDataDto } from './dto/insert-data.dto'
import { UpdateDataDto } from './dto/update-data.dto'
import { PetsService } from './pets.service'

@Controller('pets')
export class PetsController {
  constructor(private readonly petsService: PetsService) {}

  @Get()
  findAll() {
    return this.petsService.findAll()
  }

  @Get(':petId')
  findById(@Param('petId', ParseIntPipe) petId: number) {
    return this.petsService.findById(petId)
    // throw new NotImplementedException()
  }

  @Post()
  insert(@Body() insertDataDto: InsertDataDto) {
    const { name, userId } = insertDataDto
    return this.petsService.insert(name, userId)
  }

  @Patch(':petId')
  update(
    @Body() updateDataDto: UpdateDataDto,
    @Param('petId', ParseIntPipe) petId: number,
  ) {
    const { name } = updateDataDto
    return this.petsService.update(petId, name)
    // throw new NotImplementedException()
  }
}
