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
import { InsertSpeciesDto } from './dto/insert-species.dto'
import { UpdateSpeciesDto } from './dto/update-species.dto'
import { SpeciesService } from './species.service'

@Controller('species')
export class SpeciesController {
  constructor(private readonly speciesService: SpeciesService) {}

  @Get()
  findAll() {
    return this.speciesService.findAll()
  }

  @Get(':speciesId')
  findById(@Param('speciesId', ParseIntPipe) speciesId: number) {
    return this.speciesService.findById(speciesId)
  }

  @Post()
  insert(@Body() insertSpeciesDto: InsertSpeciesDto) {
    const { name } = insertSpeciesDto
    return this.speciesService.insert(name)
  }

  @Patch(':speciesId')
  update(
    @Param('speciesId', ParseIntPipe) speciesId: number,
    @Body() updateSpeciesDto: UpdateSpeciesDto,
  ) {
    const { name } = updateSpeciesDto
    return this.speciesService.update(speciesId, name)
  }

  @Delete(':speciesId')
  delete(@Param('speciesId', ParseIntPipe) speciesId: number) {
    return this.speciesService.delete(speciesId)
  }
}
