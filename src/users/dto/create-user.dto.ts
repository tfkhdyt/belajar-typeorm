import { IsOptional, IsString } from 'class-validator'

export class CreateUserDto {
  @IsString()
  firstName: string

  @IsString()
  @IsOptional()
  lastName?: string
}
