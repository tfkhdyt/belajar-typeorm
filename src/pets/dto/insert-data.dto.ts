import { Type } from 'class-transformer'
import { IsNumber, IsString } from 'class-validator'

export class InsertDataDto {
  @IsString()
  name: string

  @IsNumber()
  @Type(() => Number)
  userId: number
}
