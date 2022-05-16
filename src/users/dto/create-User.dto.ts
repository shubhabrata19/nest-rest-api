import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    type: String,
    description: 'The id of the user',
    default: '',
  })
  readonly id: string;

  @ApiProperty({
    type: String,
    description: 'The Name of the user',
    default: '',
  })
  readonly name: string;

  @ApiProperty({
    type: String,
    description: 'The email of the user',
    default: '',
  })
  readonly email: string;

  @ApiProperty({
    type: String,
    description: 'The Password of the user',
    default: '',
  })
  readonly password: string;
}
