import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Patch,
  Delete,
  Query,
  ParseIntPipe,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  // ApiStandartResponse(CreateUserDto);

  @ApiOperation({
    summary: 'Get data user',
    operationId: 'getAllUsers',
  })
  @Get()
  findAll(@Query('role') role?: 'INTERN' | 'ADMIN' | 'USER') {
    return this.usersService.findAll(role);
  }

  // @Get('interns') // GET /users/interns
  // fintAllInterns() {
  //   return [];
  // }

  @ApiOperation({
    summary: 'Get data user by id',
    operationId: 'getAllUsersById',
  })
  @Get(':id') // GET /users/:id
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.findOne(id);
  }

  @ApiOperation({
    summary: 'Create data user',
    operationId: 'createUser',
  })
  @Post() // POST /users
  create(
    @Body()
    user: CreateUserDto,
  ) {
    return this.usersService.create(user);
  }

  @ApiOperation({
    summary: 'Update data user',
    operationId: 'updateUser',
  })
  @Patch(':id') // PATCH /users/:id
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body(ValidationPipe)
    UpdateUserDto: UpdateUserDto,
  ) {
    return this.usersService.update(id, UpdateUserDto);
  }

  @ApiOperation({
    summary: 'Delete data user',
    operationId: 'deleteUser',
  })
  @Delete(':id') // DELETE /users/:id
  delete(@Param('id', ParseIntPipe) id: number) {
    return { id };
  }
}
