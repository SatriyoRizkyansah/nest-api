import { ApiProperty } from '@nestjs/swagger';
import {
  isEmail,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsString,
} from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'John Doe', description: 'Nama lengkap user' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'john@example.com', description: 'Email valid user' })
  @IsEmail()
  email: string;

  @ApiProperty({
    example: 'ADMIN',
    enum: ['INTERN', 'ADMIN', 'USER'],
    description: 'Role user',
  })
  @IsEnum(['INTERN', 'ADMIN', 'USER'], {
    message: 'Role must be one of the following: INTERN, ADMIN, USER',
  })
  role: 'INTERN' | 'ADMIN' | 'USER';
}
