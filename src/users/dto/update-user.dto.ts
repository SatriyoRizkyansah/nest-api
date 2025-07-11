import { CreateUserDto } from './create-user.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  // The PartialType utility automatically makes all properties optional
  // from the CreateUserDto, so you don't need to redefine them here.
  // If you want to add additional properties or methods, you can do so.
}
