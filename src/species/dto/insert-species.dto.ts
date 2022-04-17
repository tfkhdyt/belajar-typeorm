import { IsString } from 'class-validator'

export class InsertSpeciesDto {
  @IsString()
  name: string
}
