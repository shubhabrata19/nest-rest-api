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
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Users APIs')
@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  @ApiOkResponse({ description: 'Users fetched Sucessfully' })
  getAllUser(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ description: 'User fetched Sucessfully' })
  getOneUser(@Param('id') id: string): Promise<User> {
    return this.userService.findOne(id);
  }

  @Post()
  @ApiOkResponse({ description: 'User created Sucessfully' })
  createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.userService.create(createUserDto);
  }

  @Delete(':id')
  @ApiOkResponse({ description: 'Users deleted Sucessfully' })
  deleteUser(@Param('id') id: string): Promise<User> {
    return this.userService.delete(id);
  }

  @Put(':id')
  @ApiOkResponse({ description: 'Users updated Sucessfully' })
  updateUser(
    @Body() updateUserDto: CreateUserDto,
    @Param('id') id,
  ): Promise<User> {
    return this.userService.update(id, updateUserDto);
  }
}
