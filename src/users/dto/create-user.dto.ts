import {
  isEmail,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsString,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsEnum(['INTERN', 'ADMIN', 'USER'], {
    message: 'Role must be one of the following: INTERN, ADMIN, USER',
  })
  role: 'INTERN' | 'ADMIN' | 'USER';
}
