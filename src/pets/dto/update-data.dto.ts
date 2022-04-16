import { IsOptional, IsString } from 'class-validator'

export class UpdateDataDto {
  @IsString()
  @IsOptional()
  name?: string
}
