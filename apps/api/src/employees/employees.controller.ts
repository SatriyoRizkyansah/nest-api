import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { EmployeesService } from './employees.service';
import {
  ApiTags,
  ApiOperation,
  ApiBody,
  ApiQuery,
  ApiParam,
  ApiResponse,
} from '@nestjs/swagger';
import { Prisma } from 'generated/prisma';
import { UpdateEmployeeDto } from './dto/update-employe.dto';
import { CreateEmployeeDto } from './dto/create-employe.dto';
// import { Prisma } from '@prisma/client';

@ApiTags('Employees')
@Controller('employees')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  @Post()
  @ApiOperation({ summary: 'Create new employee' })
  @ApiBody({ type: CreateEmployeeDto })
  create(@Body() createEmployeeDto: CreateEmployeeDto) {
    return this.employeesService.create(createEmployeeDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all employees (optionally filtered by role)' })
  @ApiQuery({
    name: 'role',
    required: false,
    enum: ['INTERN', 'ADMIN', 'USER'],
    description: 'Filter employees by role',
  })
  findAll(@Query('role') role?: 'INTERN' | 'ADMIN' | 'USER') {
    return this.employeesService.findAll(role);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get employee by ID' })
  @ApiParam({ name: 'id', type: Number, description: 'Employee ID' })
  findOne(@Param('id') id: string) {
    return this.employeesService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update employee by ID' })
  @ApiParam({ name: 'id', type: Number, description: 'Employee ID' })
  @ApiBody({ type: UpdateEmployeeDto })
  update(
    @Param('id') id: string,
    @Body() updateEmployeeDto: UpdateEmployeeDto,
  ) {
    return this.employeesService.update(+id, updateEmployeeDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete employee by ID' })
  @ApiParam({ name: 'id', type: Number, description: 'Employee ID' })
  remove(@Param('id') id: string) {
    return this.employeesService.remove(+id);
  }
}
