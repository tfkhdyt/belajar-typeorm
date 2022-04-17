import { Type } from 'class-transformer'
import { IsNumber, IsOptional, IsString } from 'class-validator'

export class UpdateDataDto {
  @IsString()
  @IsOptional()
  name?: string

  @IsNumber()
  @Type(() => Number)
  @IsOptional()
  speciesId?: number
}
