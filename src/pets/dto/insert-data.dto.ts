import { IsNumber, IsString } from 'class-validator'

export class InsertDataDto {
  @IsString()
  name: string

  @IsNumber()
  userId: number
}
