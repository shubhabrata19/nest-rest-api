import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-User.dto';
import { UsersService } from './users.service';
import { User } from './interfaces/user.interface';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  getAllUser(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  getOneUser(@Param() param): Promise<User> {
    return this.userService.findOne(param.id);
  }

  @Post()
  createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.userService.create(createUserDto);
  }

  @Delete(':id')
  deleteUser(@Param('id') id): Promise<User> {
    return this.userService.delete(id);
  }

  @Put(':id')
  updateUser(
    @Body() updateUserDto: CreateUserDto,
    @Param('id') id,
  ): Promise<User> {
    return this.userService.update(id, updateUserDto);
  }
}
