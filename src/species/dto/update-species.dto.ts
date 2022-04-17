import { IsString } from 'class-validator'

export class UpdateSpeciesDto {
  @IsString()
  name: string
}
